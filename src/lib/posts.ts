import { error } from '@sveltejs/kit';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { renderMarkdown } from './markdown';

export const SUPPORTED_LANGS = ['en', 'no'] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export const LANG_PREFIXES = ['en'] as const;
export type LangPrefix = (typeof LANG_PREFIXES)[number];

export interface Post {
	id: number;
	slug: string;
	title: string;
	pubDate: string;
	description: string;
	content?: string;
}

function normalizePubDate(value: unknown): string {
	if (!value) {
		return '';
	}

	if (value instanceof Date) {
		return value.toISOString();
	}

	return String(value);
}

interface LoadPostsOptions {
	includeContent?: boolean;
}

export function slugify(title: string): string {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9æøå\s-]/g, '')
		.trim()
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-');
}

export async function loadPosts(lang: string, options?: LoadPostsOptions): Promise<Post[]> {
	if (!SUPPORTED_LANGS.includes(lang as Lang)) {
		throw error(404, { message: `Unsupported language: ${lang}` });
	}

	const includeContent = options?.includeContent ?? false;
	const dir = path.join(process.cwd(), 'src', 'content', lang);
	const files = await fs.readdir(dir);

	const posts = await Promise.all(
		files
			.filter((f) => f.endsWith('.md'))
			.map(async (file) => {
				const raw = await fs.readFile(path.join(dir, file), 'utf-8');
				const { data, content } = matter(raw);
				const id = data.id;
				if (typeof id !== 'number') {
					throw error(500, { message: `Post "${file}" is missing a numeric id in frontmatter` });
				}

				const post: Post = {
					id,
					slug: slugify(data.title ?? ''),
					title: data.title ?? '',
					pubDate: normalizePubDate(data.pubDate),
					description: data.description ?? ''
				};
				if (includeContent) {
					post.content = renderMarkdown(content);
				}
				return post;
			})
	);

	return posts.sort((a, b) => {
		const dateA = a.pubDate ? new Date(a.pubDate).getTime() : 0;
		const dateB = b.pubDate ? new Date(b.pubDate).getTime() : 0;
		return dateB - dateA;
	});
}

export async function findPostFile(lang: string, slug: string): Promise<string | null> {
	const dir = path.join(process.cwd(), 'src', 'content', lang);
	const files = await fs.readdir(dir);

	for (const file of files.filter((f) => f.endsWith('.md'))) {
		const raw = await fs.readFile(path.join(dir, file), 'utf-8');
		const { data } = matter(raw);
		if (slugify(data.title ?? '') === slug) {
			return file;
		}
	}

	return null;
}

export async function findPostByIdAndLang(id: number, lang: string): Promise<Post | null> {
	const posts = await loadPosts(lang);
	return posts.find((p) => p.id === id) ?? null;
}
