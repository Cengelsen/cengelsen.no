import { error } from '@sveltejs/kit';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { loadPosts, findPostFile, findPostByIdAndLang } from '$lib/posts';

export const prerender = true;
export const entries = async () =>
	(await loadPosts('no')).map((p) => ({ slug: p.slug }));

export const load = async ({ params }) => {
	const filename = await findPostFile('no', params.slug);
	if (!filename) {
		throw error(404, { message: `Post "${params.slug}" not found` });
	}

	const filePath = path.join(process.cwd(), 'src', 'content', 'no', filename);
	const fileContent = await fs.readFile(filePath, 'utf-8');
	const { data: frontmatter, content } = matter(fileContent);

	const translatedPost = frontmatter.id
		? await findPostByIdAndLang(frontmatter.id, 'en')
		: null;

	return {
		content,
		slug: params.slug,
		frontmatter,
		translatedSlug: translatedPost?.slug ?? null
	};
};
