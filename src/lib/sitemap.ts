import { PROFILE_SLUGS } from '../data/cv-profiles';
import { loadPosts } from './posts';

export interface SitemapUrl {
	loc: string;
	lastmod?: string;
	changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
	priority?: number;
}

function escapeXml(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

function formatLastmod(isoDate: string): string | undefined {
	if (!isoDate) {
		return undefined;
	}

	const date = new Date(isoDate);
	if (Number.isNaN(date.getTime())) {
		return undefined;
	}

	return date.toISOString().slice(0, 10);
}

export async function collectSitemapUrls(site: string): Promise<SitemapUrl[]> {
	const urls: SitemapUrl[] = [];

	const add = (pathname: string, options: Omit<SitemapUrl, 'loc'> = {}) => {
		const path = pathname === '/' ? '/' : pathname.replace(/\/+$/, '') || '/';
		urls.push({ loc: `${site}${path}`, ...options });
	};

	add('/', { priority: 1, changefreq: 'monthly' });
	add('/en', { priority: 1, changefreq: 'monthly' });
	add('/blog', { priority: 0.8, changefreq: 'weekly' });
	add('/en/blog', { priority: 0.8, changefreq: 'weekly' });
	add('/cv', { priority: 0.7, changefreq: 'monthly' });
	add('/en/cv', { priority: 0.7, changefreq: 'monthly' });

	for (const profile of PROFILE_SLUGS) {
		add(`/cv/${profile}`, { priority: 0.6, changefreq: 'monthly' });
		add(`/en/cv/${profile}`, { priority: 0.6, changefreq: 'monthly' });
	}

	const [noPosts, enPosts] = await Promise.all([loadPosts('no'), loadPosts('en')]);

	for (const post of noPosts) {
		add(`/blog/${post.slug}`, {
			lastmod: formatLastmod(post.pubDate),
			changefreq: 'yearly',
			priority: 0.6
		});
	}

	for (const post of enPosts) {
		add(`/en/blog/${post.slug}`, {
			lastmod: formatLastmod(post.pubDate),
			changefreq: 'yearly',
			priority: 0.6
		});
	}

	return urls;
}

export function generateSitemapXml(urls: SitemapUrl[]): string {
	const urlEntries = urls.map((entry) => {
		const lines = [`    <loc>${escapeXml(entry.loc)}</loc>`];

		if (entry.lastmod) {
			lines.push(`    <lastmod>${entry.lastmod}</lastmod>`);
		}
		if (entry.changefreq) {
			lines.push(`    <changefreq>${entry.changefreq}</changefreq>`);
		}
		if (entry.priority !== undefined) {
			lines.push(`    <priority>${entry.priority.toFixed(1)}</priority>`);
		}

		return `  <url>\n${lines.join('\n')}\n  </url>`;
	});

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries.join('\n')}
</urlset>
`;
}

export function sitemapResponse(xml: string): Response {
	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600, s-maxage=86400'
		}
	});
}
