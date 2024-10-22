<script lang="ts">
    
    export let post;
    import { goto } from '$app/navigation';

    function openPost(title: string) {
        const slug = title.toLowerCase().replace(/\s+/g, '-');
        goto(`/blog/${slug}`);
    }

</script>

<button class="post" on:click={()=>openPost(post.title)}>    
    <h2 class="post-title">{post.title}</h2>
    <p class="post-date">{post.date}</p>
    <p class="post-description">{post.description}</p>
</button>

<style>
    .post {
        background-color: #f9f9f9;
        border-radius: 10px;
        margin-bottom: 2%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        width: 90%;
    }

    .post-title {
        font-size: 1.5em;
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
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>

