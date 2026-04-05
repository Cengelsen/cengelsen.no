<script lang="ts">
    import type { ContactLink } from '../../types/cv.types';
    import Fa from 'svelte-fa';
    import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
    import { faEnvelope, faPhone, faLink } from '@fortawesome/free-solid-svg-icons';

    export let entries: ContactLink[];

    function getIcon(platform: string) {
        const key = platform.toLowerCase();
        if (key === 'linkedin') return faLinkedin;
        if (key === 'github') return faGithub;
        if (key === 'epost' || key === 'email') return faEnvelope;
        if (key === 'telefon' || key === 'phone') return faPhone;
        return faLink;
    }
</script>

<div class="contact-list">
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

    .contact-item {
        display: flex;
        align-items: center;
        gap: var(--space-md);
        padding: var(--space-sm) var(--space-md);
        background-color: var(--color-surface);
        border-radius: var(--radius-sm);
        text-decoration: none;
        transition: background-color 0.2s ease;
    }

    .contact-item:hover {
        background-color: oklch(34% 0.04 75 / 0.8);
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
</style>
