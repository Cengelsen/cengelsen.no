import { loadPosts, SUPPORTED_LANGS } from '$lib/posts';

export const entries = () => SUPPORTED_LANGS.map((lang) => ({ lang }));

export const load = async ({ params }) => ({
	posts: await loadPosts(params.lang)
});
