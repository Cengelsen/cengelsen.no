<script lang="ts">
    import type { Post } from '$lib/posts';
    import { page } from '$app/stores';

    export let post: Post;

    function formatDate(dateStr: string): string {
        if (!dateStr) return '';
        const date = new Date(dateStr.includes('T') ? dateStr : dateStr + 'T00:00:00');
        return new Intl.DateTimeFormat('nb-NO', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    }
</script>

<a class="post" href="/{$page.params.lang}/blog/{post.slug}">
    <h2 class="post-title">{post.title}</h2>
    <p class="post-date">{formatDate(post.date)}</p>
    <p class="post-description">{post.description}</p>
</a>

<style>
    .post {
        display: block;
        background-color: var(--color-surface);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        border: 1px solid transparent;
        width: 100%;
        text-decoration: none;
        color: inherit;
        padding: var(--space-md);
    }

    @media (hover: hover) {
        .post {
            transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
        }

        .post:hover {
            box-shadow: var(--shadow-md);
            transform: translateY(-1px);
            border-color: var(--color-accent);
        }
    }

    .post-title {
        font-size: 1.1rem;
        color: var(--color-dark);
        margin: 0 0 var(--space-xs) 0;
    }

    .post-date {
        font-style: italic;
        font-size: var(--font-size-sm);
        color: var(--color-mid);
        margin: 0 0 var(--space-sm) 0;
    }

    .post-description {
        color: var(--color-mid);
        font-size: var(--font-size-sm);
        line-height: var(--line-height-base);
        margin: 0;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>
