import { loadPosts } from '$lib/posts';
import { generateRssFeed } from '$lib/rss';

export const prerender = true;

export const GET = async ({ url }) => {
	const posts = await loadPosts('no', { includeContent: true });
	const xml = generateRssFeed(posts, {
		origin: url.origin,
		blogPath: '/blog',
		lang: 'no',
		title: 'cengelsen.no',
		description: 'Blogginnlegg fra cengelsen.no'
	});

	return new Response(xml, {
		headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
	});
};
