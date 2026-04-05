import { Feed } from 'feed';
import type { Post } from './posts';

export const SITE_URL = 'https://test.cengelsen.no';

interface FeedOptions {
	site: string;
	blogPath: string;
	feedPath: string;
	lang: string;
	title: string;
	description: string;
}

function prepareContentForFeed(html: string, site: string): string {
	return html
		.replace(/src="\//g, `src="${site}/`)
		.replace(/href="\//g, `href="${site}/`)
		.replace(/<(img|br|hr)([^>]*?)(?<!\/)>/g, '<$1$2 />');
}

export function generateRssFeed(posts: Post[], options: FeedOptions): string {
	const { site, blogPath, feedPath, lang, title, description } = options;

	const feed = new Feed({
		title,
		description,
		id: `${site}${blogPath}`,
		link: `${site}${blogPath}`,
		language: lang,
		feedLinks: {
			rss: `${site}${feedPath}`
		},
		updated: posts.length > 0 && posts[0].date
			? new Date(posts[0].date)
			: new Date()
	});

	for (const post of posts.filter((p) => p.title && p.date)) {
		const url = `${site}${blogPath}/${post.slug}`;

		feed.addItem({
			title: post.title,
			id: url,
			link: url,
			description: post.description,
			date: new Date(post.date),
			content: post.content ? prepareContentForFeed(post.content, site) : undefined
		});
	}

	return feed.rss2();
}
