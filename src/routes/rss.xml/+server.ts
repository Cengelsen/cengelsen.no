import { loadPosts } from '$lib/posts';
import { generateRssFeed, SITE_URL } from '$lib/rss';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const posts = await loadPosts('no', { includeContent: true });
	const xml = generateRssFeed(posts, {
		site: SITE_URL,
		blogPath: '/blog',
		feedPath: '/rss.xml',
		lang: 'no',
		title: 'cengelsen.no (norsk)',
		description: 'Blogginnlegg fra cengelsen.no — på norsk'
	});

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
