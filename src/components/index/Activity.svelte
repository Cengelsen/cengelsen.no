<script>
    export let recentPosts = [];
</script>

<section class="recent-posts">
    <h2>Recent Blog Posts</h2>
    <ul>
        {#each recentPosts.slice(0, 5) as post}
            <li class="post">
                <h3 class="post-title">{post.title}</h3>
                <p class="post-date">{post.date}</p>
                <p class="post-description">{post.description}</p>
            </li>
        {/each}
    </ul>
</section>

<style>

    * {
        margin: 0;
        padding: 0;
    }

    .recent-posts {
        width: 70%;
        height: 100%;
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

    .post {
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #eee;
    }

    .post:last-child {
        border-bottom: none;
    }

    .post-title {
        font-size: 1.4rem;
        margin-bottom: 0.5rem;
    }

    .post-date {
        font-size: 0.9rem;
        color: #666;
        margin-bottom: 0.5rem;
    }

    .post-description {
        font-size: 1rem;
        line-height: 1.4;
    }

    @media (max-width: 768px) {
        .recent-posts {
            padding: 0 0.5rem;
        }

        h2 {
            font-size: 1.6rem;
        }

        .post-title {
            font-size: 1.2rem;
        }
    }
</style>
