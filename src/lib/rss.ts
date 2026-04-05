import { Feed } from 'feed';
import type { Post } from './posts';

interface FeedOptions {
	origin: string;
	blogPath: string;
	lang: string;
	title: string;
	description: string;
}

function prepareContentForFeed(html: string, origin: string): string {
	return html
		.replace(/src="\//g, `src="${origin}/`)
		.replace(/href="\//g, `href="${origin}/`)
		.replace(/<(img|br|hr)([^>]*?)(?<!\/)>/g, '<$1$2 />');
}

export function generateRssFeed(posts: Post[], options: FeedOptions): string {
	const { origin, blogPath, lang, title, description } = options;

	const feedUrl = blogPath === '/blog'
		? `${origin}/rss.xml`
		: `${origin}${blogPath.replace('/blog', '')}/rss.xml`;

	const feed = new Feed({
		title,
		description,
		id: `${origin}${blogPath}`,
		link: `${origin}${blogPath}`,
		language: lang,
		feedLinks: {
			rss: feedUrl
		},
		copyright: '',
		updated: posts.length > 0 && posts[0].date
			? new Date(posts[0].date)
			: new Date()
	});

	for (const post of posts.filter((p) => p.title && p.date)) {
		const url = `${origin}${blogPath}/${post.slug}`;

		feed.addItem({
			title: post.title,
			id: url,
			link: url,
			description: post.description,
			date: new Date(post.date),
			content: post.content ? prepareContentForFeed(post.content, origin) : undefined
		});
	}

	return feed.rss2();
}
