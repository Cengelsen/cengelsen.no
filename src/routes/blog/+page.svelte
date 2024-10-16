<script lang="ts">
	import type { PageData } from './$types';
	import Post from '../../components/recent-activity/Post.svelte';

	export let data: PageData;

    let posts = data.posts.no;

</script>

<h1>Blog Posts</h1>

{#if posts.length > 0 }
    {#each posts as post}
        <Post {post} />
    {/each}
{:else}
    <p>No posts available.</p>
{/if}