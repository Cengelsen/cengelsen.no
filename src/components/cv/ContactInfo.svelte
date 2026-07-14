<script lang="ts">
    import type { ContactLink } from '../../types/cv.types';
    import Fa from 'svelte-fa';
    import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
    import { faEnvelope, faPhone, faLink } from '@fortawesome/free-solid-svg-icons';

    export let entries: ContactLink[];
    export let variant: 'section' | 'header' = 'section';

    function getIcon(platform: string) {
        const key = platform.toLowerCase();
        if (key === 'linkedin') return faLinkedin;
        if (key === 'github') return faGithub;
        if (key === 'epost' || key === 'email') return faEnvelope;
        if (key === 'telefon' || key === 'phone') return faPhone;
        return faLink;
    }
</script>

<div class="contact-list" class:contact-list--header={variant === 'header'}>
    {#each entries as entry}
        <a href={entry.url} target="_blank" rel="noopener noreferrer" class="contact-item">
            <span class="contact-icon">
                <Fa icon={getIcon(entry.platform)} />
            </span>
            <div class="contact-details">
                <span class="contact-platform">{entry.platform}</span>
                <span class="contact-label">{entry.label}</span>
            </div>
        </a>
    {/each}
</div>

<style>
    .contact-list {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
    }

    .contact-list--header {
        flex-flow: row wrap;
        justify-content: center;
        gap: var(--space-xs) var(--space-md);
        margin-top: 0;
    }

    .contact-list--header .contact-item {
        gap: var(--space-sm);
        padding: var(--space-xs) var(--space-sm);
        background-color: transparent;
        border: 1px solid transparent;
        transition: background-color 0.2s ease, border-color 0.2s ease;
    }

    .contact-list--header .contact-item:hover {
        background-color: oklch(50% 0 0 / 0.08);
        border-color: white;
    }

    .contact-list--header .contact-item:hover .contact-label {
        color: var(--color-dark);
    }

    .contact-list--header .contact-item:focus-visible {
        outline: 2px solid var(--color-accent);
        outline-offset: 2px;
    }

    .contact-list--header .contact-icon {
        font-size: 1rem;
        width: 1.25rem;
    }

    .contact-list--header .contact-details {
        flex-direction: row;
        align-items: baseline;
        gap: var(--space-xs);
    }

    .contact-list--header .contact-platform::after {
        content: ':';
    }

    .contact-list--header .contact-platform,
    .contact-list--header .contact-label {
        font-size: 0.8125rem;
        line-height: 1.3;
    }

    .contact-list--header .contact-label {
        color: var(--color-accent);
    }

    .contact-item {
        display: flex;
        align-items: center;
        gap: var(--space-md);
        padding: var(--space-sm) var(--space-md);
        background-color: var(--color-surface);
        border: 1px solid transparent;
        border-radius: var(--radius-sm);
        text-decoration: none;
        transition: background-color 0.2s ease, border-color 0.2s ease;
    }

    .contact-item:hover {
        background-color: oklch(50% 0 0 / 0.1);
        border-color: white;
    }

    .contact-item:hover .contact-label {
        color: var(--color-dark);
    }

    .contact-item:focus-visible {
        outline: 2px solid var(--color-accent);
        outline-offset: 2px;
    }

    .contact-icon {
        color: var(--color-accent);
        font-size: 1.25rem;
        width: 2rem;
        display: flex;
        justify-content: center;
    }

    .contact-details {
        display: flex;
        flex-direction: column;
    }

    .contact-platform {
        font-size: var(--font-size-sm);
        font-weight: 600;
        color: var(--color-dark);
    }

    .contact-label {
        font-size: var(--font-size-sm);
        color: var(--color-mid);
    }

    :global(.cv-section--compact) .contact-list {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: var(--space-xs);
    }

    :global(.cv-section--compact) .contact-item {
        gap: var(--space-sm);
        padding: var(--space-xs) var(--space-sm);
    }

    :global(.cv-section--compact) .contact-icon {
        font-size: 1rem;
        width: 1.5rem;
    }

    :global(.cv-section--compact) .contact-platform,
    :global(.cv-section--compact) .contact-label {
        font-size: 0.8125rem;
        line-height: 1.3;
    }

    @media (max-width: 700px) {
        :global(.cv-section--compact) .contact-list {
            grid-template-columns: 1fr;
        }
    }
</style>
