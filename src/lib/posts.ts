import { error } from '@sveltejs/kit';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const SUPPORTED_LANGS = ['en', 'no'] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export const LANG_PREFIXES = ['en'] as const;
export type LangPrefix = (typeof LANG_PREFIXES)[number];

export interface Post {
	id: number | null;
	slug: string;
	title: string;
	date: string;
	description: string;
}

export function slugify(title: string): string {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9æøå\s-]/g, '')
		.trim()
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-');
}

export async function loadPosts(lang: string): Promise<Post[]> {
	if (!SUPPORTED_LANGS.includes(lang as Lang)) {
		throw error(404, { message: `Unsupported language: ${lang}` });
	}

	const dir = path.join(process.cwd(), 'src', 'content', lang);
	const files = await fs.readdir(dir);

	const posts = await Promise.all(
		files
			.filter((f) => f.endsWith('.md'))
			.map(async (file) => {
				const raw = await fs.readFile(path.join(dir, file), 'utf-8');
				const { data } = matter(raw);
				return {
					id: data.id ?? null,
					slug: slugify(data.title ?? ''),
					title: data.title ?? '',
					date: data.date ? String(data.date) : '',
					description: data.description ?? ''
				};
			})
	);

	return posts.sort((a, b) => {
		const dateA = a.date ? new Date(a.date).getTime() : 0;
		const dateB = b.date ? new Date(b.date).getTime() : 0;
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
