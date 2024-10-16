<script lang="ts">
	import type { PageData } from './$types';
	import Post from '../../components/recent-activity/Post.svelte';

	export let data: PageData;

    import { page } from '$app/stores';

    console.debug($page.url.pathname)

    let posts = data.posts.en;

    console.debug(posts)
</script>

<h1>Blog Posts</h1>

{#each posts as post}
    <Post {post} />
{/each}
<p>No posts available.</p>
