import { loadPosts } from '$lib/posts';

export const prerender = true;
export const entries = async () => [{}];

export const load = async () => ({
	posts: await loadPosts('no')
});
