<script>
    import Post from "../recent-activity/Post.svelte";
    import { page } from "$app/stores";
    export let recentPosts;

    const activityTitle = $page.params.lang === 'en' ? "Recent Activity" : "Nylig aktivitet";

</script>

<h2>{activityTitle}</h2>

<section class="recent-posts">
    
    <div class="recent-posts-container">
        <ul>
            {#each recentPosts as post }
    
            <li><Post post={post}/></li>
                
            {/each}
        </ul>
    </div>
</section>

<style>

    * {
        margin: 0;
        padding: 0;
    }

    .recent-posts {
        border: 5px solid green;
        background-color: beige;
        height: 100%;
        overflow-y: scroll;
        scrollbar-width: none;
    }

    .recent-posts-container {
        width: 90%;
        justify-self: center;
        margin: auto;
    }

    h2 {
        margin-top: 2%;
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }

    ul {
        list-style-type: none;
        padding: auto;
    }
</style>
