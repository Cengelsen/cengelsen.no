<script lang="ts">
    import type { PageData } from "../$types";
    import SvelteMarkdown from 'svelte-markdown';

    export let data: PageData;

    const title = data.frontmatter.title
    const content = data.html

</script>

<article>
    
    <h1>{title}</h1>

    <SvelteMarkdown source={content} />
</article>
 
<style>
    article {
        max-width: 80%;
        margin: auto;
        padding: 20px;
    }

</style>
