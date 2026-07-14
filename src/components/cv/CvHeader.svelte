<script lang="ts">
    import type { CvSummary, ContactLink } from '../../types/cv.types';
    import Fa from 'svelte-fa';
    import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
    import ContactInfo from './ContactInfo.svelte';

    export let name: string = 'Christian Kårbø Engelsen';
    export let summary: CvSummary;
    export let contact: ContactLink[] = [];
</script>

<header class="cv-header">
    <h1 class="cv-name">{name}</h1>
    <p class="cv-title">{summary.title}</p>
    <p class="cv-location">
        <Fa icon={faLocationDot} />
        {summary.location}
    </p>
    <p class="cv-bio">{summary.bio}</p>
    {#if contact.length > 0}
        <div class="cv-header-contact">
            <ContactInfo entries={contact} variant="header" />
        </div>
    {/if}
</header>

<style>
    .cv-header {
        text-align: center;
        margin-bottom: var(--space-2xl);
        padding-bottom: 0;
        border-bottom: 2px solid var(--color-chrome-border);
    }

    .cv-name {
        font-size: 2rem;
        font-weight: 700;
        color: var(--color-dark);
        margin: 0 0 var(--space-xs) 0;
    }

    .cv-title {
        font-size: var(--font-size-lg);
        color: var(--color-accent);
        margin: 0 0 var(--space-sm) 0;
        font-weight: 500;
    }

    .cv-location {
        font-size: var(--font-size-sm);
        color: var(--color-muted);
        margin: 0 0 var(--space-md) 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--space-xs);
    }

    .cv-bio {
        font-size: var(--font-size-base);
        color: var(--color-mid);
        width: 100%;
        margin: 0;
        line-height: var(--line-height-base);
        overflow-wrap: break-word;
        word-wrap: break-word;
        hyphens: auto;
        white-space: normal;
    }

    .cv-header-contact {
        margin-top: var(--space-md);
        padding: var(--space-md) 0;
        border-top: 1px solid var(--color-chrome-border);
    }

    @media (max-width: 700px) {
        .cv-name {
            font-size: 1.5rem;
        }
    }
</style>
