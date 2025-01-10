<script>
    import Post from "../recent-activity/Post.svelte";
    import { page } from "$app/stores";
    export let recentPosts;

    const activityTitle = $page.params.lang === 'en' ? "Recent Activity" : "Nylig aktivitet";

</script>

<section class="recent-posts">
    <h2>{activityTitle}</h2>
    <ul>
        {#each recentPosts as post }
            <Post post={post}/>
        {/each}
    </ul>
</section>

<style>

    * {
        margin: 0;
        padding: 0;
    }

    .recent-posts {
        border: 5px solid green;
        background-color: beige;
    }

    h2 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }
</style>
