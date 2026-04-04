import { loadPosts, LANG_PREFIXES } from '$lib/posts';

export const entries = () => LANG_PREFIXES.map((lang) => ({ lang }));

export const load = async ({ params }) => ({
	posts: await loadPosts(params.lang)
});
