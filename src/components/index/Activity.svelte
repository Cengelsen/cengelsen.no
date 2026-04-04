<script lang="ts">
    import Post from "../recent-activity/Post.svelte";
    import type { Post as PostType } from "$lib/posts";

    export let recentPosts: PostType[];
    export let title: string;
</script>

<section class="activity">
    <h2 class="activity-title">{title}</h2>

    <div class="post-list-wrapper">
        <ul class="post-list">
            {#each recentPosts as post}
                <li><Post {post} /></li>
            {/each}
        </ul>
    </div>
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

    .post-list-wrapper {
        flex: 1;
        position: relative;
        overflow: hidden;
        background-color: oklch(26% 0 0);
        border-radius: var(--radius-md);
        padding: var(--space-md);
    }

    .post-list-wrapper::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 4rem;
        background: linear-gradient(to bottom, transparent, oklch(26% 0 0));
        pointer-events: none;
        border-radius: 0 0 var(--radius-md) var(--radius-md);
    }

    .post-list {
        list-style-type: none;
        padding: 4px 0 var(--space-lg);
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
        height: 100%;
        overflow-y: auto;
        scrollbar-width: none;
    }

    .post-list::-webkit-scrollbar {
        display: none;
    }
</style>
