<script lang="ts">
    import Post from "../recent-activity/Post.svelte";
    import type { Post as PostType } from "$lib/posts";

    export let recentPosts: PostType[];
    export let title: string;
</script>

<section class="activity">
    <h2 class="activity-title">{title}</h2>

    <ul class="post-list">
        {#each recentPosts as post}
            <li><Post {post} /></li>
        {/each}
    </ul>
</section>

<style>
    .activity {
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .activity-title {
        font-size: 1.5rem;
        margin-top: 0;
        margin-bottom: var(--space-md);
        color: var(--color-dark);
        flex-shrink: 0;
    }

    .post-list {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
        flex: 1;
        overflow-y: auto;
    }
</style>
