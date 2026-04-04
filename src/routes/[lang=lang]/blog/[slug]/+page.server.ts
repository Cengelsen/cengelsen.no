import { error } from '@sveltejs/kit';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { LANG_PREFIXES, loadPosts, findPostFile, findPostByIdAndLang, type LangPrefix } from '$lib/posts';

export const entries = async () =>
	(
		await Promise.all(
			LANG_PREFIXES.map((lang) => loadPosts(lang).then((posts) => posts.map((p) => ({ lang, slug: p.slug }))))
		)
	).flat();

export const load = async ({ params }) => {
	if (!LANG_PREFIXES.includes(params.lang as LangPrefix)) {
		throw error(404, { message: `Unsupported language: ${params.lang}` });
	}

	const filename = await findPostFile(params.lang, params.slug);
	if (!filename) {
		throw error(404, { message: `Post "${params.slug}" not found` });
	}

	const filePath = path.join(process.cwd(), 'src', 'content', params.lang, filename);
	const fileContent = await fs.readFile(filePath, 'utf-8');
	const { data: frontmatter, content } = matter(fileContent);

	const translatedPost = frontmatter.id
		? await findPostByIdAndLang(frontmatter.id, 'no')
		: null;

	return {
		content,
		slug: params.slug,
		frontmatter,
		translatedSlug: translatedPost?.slug ?? null
	};
};
