import { loadPosts } from '$lib/posts';

export const load = async ({ params }) => ({
	posts: await loadPosts(params.lang)
});
