import { error } from '@sveltejs/kit';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { SUPPORTED_LANGS, type Lang } from '$lib/posts';

export const load = async ({ params }) => {
	if (!SUPPORTED_LANGS.includes(params.lang as Lang)) {
		throw error(404, { message: `Unsupported language: ${params.lang}` });
	}

	try {
		const filePath = path.join(process.cwd(), 'src', 'content', params.lang, `${params.slug}.md`);
		const fileContent = await fs.readFile(filePath, 'utf-8');
		const { data: frontmatter, content } = matter(fileContent);

		return {
			content,
			slug: params.slug,
			frontmatter
		};
	} catch {
		throw error(404, { message: `Post "${params.slug}" not found` });
	}
};
