<script lang="ts">
	import type { PageData } from './$types';
	import Post from '../../../components/recent-activity/Post.svelte';

	export let data: PageData;

    let posts = data.posts;

    

</script>

<div class="content-wrapper">

    <h1>Blog Posts</h1>

    <section class="postlist">
        {#if posts.length > 0 }
            {#each posts as post}
                <Post {post} />
            {/each}
        {:else}
            <p>No posts available.</p>
        {/if}
    </section>
</div>

<style>

    h1{
        text-align: center;
    }

    .content-wrapper{
        max-width: min(90vw, 800px);
        margin: auto;
        padding: 20px;
    }

    .postlist{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(80%, 1fr));
    }

</style>