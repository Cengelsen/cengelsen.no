import { error } from '@sveltejs/kit';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const SUPPORTED_LANGS = ['en', 'no'] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export interface Post {
	slug: string;
	title: string;
	date: string;
	description: string;
}

export async function loadPosts(lang: string): Promise<Post[]> {
	if (!SUPPORTED_LANGS.includes(lang as Lang)) {
		throw error(404, { message: `Unsupported language: ${lang}` });
	}

	const dir = path.join(process.cwd(), 'src', 'content', lang);
	const files = await fs.readdir(dir);

	return Promise.all(
		files
			.filter((f) => f.endsWith('.md'))
			.map(async (file) => {
				const raw = await fs.readFile(path.join(dir, file), 'utf-8');
				const { data } = matter(raw);
				return {
					slug: file.replace('.md', ''),
					title: data.title ?? '',
					date: data.date ?? '',
					description: data.description ?? ''
				};
			})
	);
}
