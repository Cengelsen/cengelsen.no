<script lang="ts">
    import type { PageData } from "../$types";
    import SvelteMarkdown from 'svelte-markdown';

    export let data: PageData;

    let content = data.posts.no[0].content;
</script>

<article>
    <SvelteMarkdown source={content} />
</article>

<style>
    article {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }
</style>
