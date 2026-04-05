import type { Post } from './posts';

interface FeedOptions {
	origin: string;
	blogPath: string;
	lang: string;
	title: string;
	description: string;
}

function absolutifyUrls(html: string, origin: string): string {
	return html
		.replace(/src="\//g, `src="${origin}/`)
		.replace(/href="\//g, `href="${origin}/`);
}

function escapeXml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

export function generateRssFeed(posts: Post[], options: FeedOptions): string {
	const { origin, blogPath, lang, title, description } = options;

	const lastBuildDate = posts.length > 0 && posts[0].date
		? new Date(posts[0].date).toUTCString()
		: new Date().toUTCString();

	const items = posts
		.filter((p) => p.title && p.date)
		.map((post) => {
			const url = `${origin}${blogPath}/${post.slug}`;
			const contentEncoded = post.content
				? `\n      <content:encoded><![CDATA[${absolutifyUrls(post.content, origin)}]]></content:encoded>`
				: '';
			return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>${contentEncoded}
    </item>`;
		})
		.join('\n');

	return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${escapeXml(`${origin}${blogPath}`)}</link>
    <description>${escapeXml(description)}</description>
    <language>${lang}</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${escapeXml(`${origin}${blogPath === '/blog' ? '' : blogPath.replace('/blog', '')}/rss.xml`)}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;
}
