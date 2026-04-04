import { loadPosts } from '$lib/posts';

export const load = async () => ({
	posts: await loadPosts('no')
});
