import { loadPosts } from '$lib/posts';
import { generateRssFeed } from '$lib/rss';

export const prerender = true;

export const GET = async ({ url }) => {
	const posts = await loadPosts('en', { includeContent: true });
	const xml = generateRssFeed(posts, {
		origin: url.origin,
		blogPath: '/en/blog',
		lang: 'en',
		title: 'cengelsen.no',
		description: 'Blog posts from cengelsen.no'
	});

	return new Response(xml, {
		headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
	});
};
