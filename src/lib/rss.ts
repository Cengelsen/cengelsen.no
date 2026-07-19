import { Feed } from 'feed';
import type { Post } from './posts';
import { SITE_AUTHOR } from './site';

interface FeedOptions {
	site: string;
	blogPath: string;
	feedPath: string;
	lang: string;
	title: string;
	description: string;
}

const DESCRIPTION_MAX_LENGTH = 280;

function excerptFromHtml(html: string, maxLength = DESCRIPTION_MAX_LENGTH): string {
	const text = html
		.replace(/<[^>]+>/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();

	if (text.length <= maxLength) {
		return text;
	}

	return `${text.slice(0, maxLength).replace(/\s+\S*$/, '')}…`;
}

function itemDescription(post: Post): string {
	if (post.description.trim()) {
		return post.description;
	}

	if (post.content) {
		return excerptFromHtml(post.content);
	}

	return post.title;
}

function stablePostId(site: string, post: Post): string {
	if (post.id != null) {
		return `${site}/posts/id/${post.id}`;
	}

	return `${site}/posts/file/${post.fileSlug}`;
}

function prepareContentForFeed(html: string, site: string, articleUrl: string): string {
	return html
		.replace(/src="\//g, `src="${site}/`)
		.replace(/href="\//g, `href="${site}/`)
		.replace(/href="#([^"]*)"/g, `href="${articleUrl}#$1"`)
		.replace(/href='#([^']*)'/g, `href="${articleUrl}#$1"`)
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
		favicon: `${site}/favicon.ico`,
		copyright: `© ${new Date().getFullYear()} ${SITE_AUTHOR.name}`,
		generator: 'cengelsen.no',
		author: SITE_AUTHOR,
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
			id: stablePostId(site, post),
			link: url,
			description: itemDescription(post),
			date: new Date(post.date),
			content: post.content ? prepareContentForFeed(post.content, site, url) : undefined
		});
	}

	return feed.rss2();
}
