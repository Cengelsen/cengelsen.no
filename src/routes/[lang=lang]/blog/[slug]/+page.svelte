<script lang="ts">
    import type { PageData } from './$types';
    import { renderMarkdown } from '$lib/markdown';

    export let data: PageData;

    const title = data.frontmatter.title;
    const html = renderMarkdown(data.content);
</script>

<article class="prose">
    <h1>{title}</h1>
    {@html html}
</article>

<style>
    .prose {
        width: 100%;
        max-width: var(--content-max-width);
        margin: 0 auto;
        padding: var(--space-xl) var(--space-lg);
        overflow-wrap: break-word;
        word-break: break-word;
    }

    /* Headings */
    .prose :global(h1),
    .prose :global(h2),
    .prose :global(h3),
    .prose :global(h4) {
        line-height: 1.3;
        margin-top: var(--space-xl);
        margin-bottom: var(--space-sm);
        color: var(--color-dark);
    }

    .prose :global(h1) { font-size: clamp(1.5rem, 5vw, 2rem); margin-top: var(--space-lg); }
    .prose :global(h2) { font-size: clamp(1.2rem, 4vw, 1.5rem); }
    .prose :global(h3) { font-size: clamp(1.1rem, 3.5vw, 1.25rem); }
    .prose :global(h4) { font-size: 1.1rem; }

    /* Paragraphs */
    .prose :global(p) {
        margin-top: 0;
        margin-bottom: var(--space-md);
        color: var(--color-dark);
    }

    /* Lists */
    .prose :global(ul),
    .prose :global(ol) {
        padding-left: var(--space-xl);
        margin-bottom: var(--space-md);
    }

    .prose :global(li) {
        margin-bottom: var(--space-md);
    }

    .prose :global(li p) {
        display: block;
        margin-bottom: var(--space-sm);
    }

    .prose :global(li p:last-child) {
        margin-bottom: 0;
    }

    .prose :global(li > ul),
    .prose :global(li > ol) {
        margin-top: var(--space-sm);
    }

    /* Links */
    .prose :global(a) {
        color: var(--color-accent);
        text-decoration: underline;
    }

    .prose :global(a:hover) {
        opacity: 0.8;
    }

    /* Blockquote */
    .prose :global(blockquote) {
        border-left: 4px solid var(--color-accent);
        margin: var(--space-lg) 0;
        padding: var(--space-sm) var(--space-md);
        background-color: var(--color-surface);
        color: var(--color-mid);
        border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
    }

    .prose :global(blockquote p) {
        margin: 0;
    }

    /* Inline code */
    .prose :global(code) {
        font-family: 'Courier New', monospace;
        font-size: 0.875em;
        background-color: var(--color-surface);
        border: 1px solid var(--color-chrome-border);
        border-radius: var(--radius-sm);
        padding: 0.1em 0.4em;
    }

    /* Code blocks */
    .prose :global(pre) {
        background-color: var(--color-chrome);
        color: var(--color-dark);
        border: 1px solid var(--color-chrome-border);
        border-radius: var(--radius-md);
        padding: var(--space-md);
        overflow-x: auto;
        margin: var(--space-lg) 0;
    }

    .prose :global(pre code) {
        background: none;
        border: none;
        padding: 0;
        font-size: 0.875rem;
        color: inherit;
    }

    /* Horizontal rule */
    .prose :global(hr) {
        border: none;
        border-top: 1px solid var(--color-surface);
        margin: var(--space-xl) 0;
    }

    /* Images */
    .prose :global(img) {
        max-width: 100%;
        border-radius: var(--radius-md);
        margin: var(--space-md) 0;
    }

    /* Tables */
    .prose :global(table) {
        width: 100%;
        border-collapse: collapse;
        margin: var(--space-lg) 0;
        font-size: var(--font-size-sm);
    }

    .prose :global(th),
    .prose :global(td) {
        text-align: left;
        padding: var(--space-sm) var(--space-md);
        border-bottom: 1px solid var(--color-surface);
    }

    .prose :global(th) {
        background-color: var(--color-surface);
        font-weight: 600;
    }

    /* Wrap tables so they scroll horizontally on narrow viewports */
    .prose :global(table) {
        display: block;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }

    @media (max-width: 700px) {
        .prose {
            padding: var(--space-md);
        }

        .prose :global(ul),
        .prose :global(ol) {
            padding-left: var(--space-lg);
        }
    }
</style>
