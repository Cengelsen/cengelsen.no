import { loadPosts } from '$lib/posts';
import { generateRssFeed, rssResponse } from '$lib/rss';
import { SITE_URL } from '$lib/site';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const posts = await loadPosts('en', { includeContent: true });
	const xml = generateRssFeed(posts, {
		site: SITE_URL,
		blogPath: '/en/blog',
		feedPath: '/en/rss.xml',
		lang: 'en',
		title: 'cengelsen.no (English)',
		description: 'Blog posts from cengelsen.no — in English'
	});

	return rssResponse(xml);
};
