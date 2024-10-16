<script>
    import SvelteMarkdown from 'svelte-markdown';

    export let post;

    console.debug("Post", post)

</script>

<article class="post">
    <h2 class="post-title">{post.title}</h2>
    <p class="post-date">{post.date}</p>
    <p class="post-description">{post.description}</p>
</article>

<style>
    .post {
        background-color: #f9f9f9;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .post-title {
        font-size: 1.5em;
        margin: 0 0 10px 0;
        color: #333;
    }

    .post-date {
        font-style: italic;
        color: #666;
        margin: 0 0 10px 0;
    }

    .post-description {
        color: #444;
        line-height: 1.6;
    }
</style>

