<script lang="ts">
    import type { Certificate } from '../../types/cv.types';
    import Fa from 'svelte-fa';
    import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

    export let entries: Certificate[];
    export let viewCredentialLabel: string = 'View credential';
</script>

<div class="certificates-list">
    {#each entries as entry}
        <div class="cert-item">
            <div class="cert-info">
                <h3 class="cert-name">{entry.name}</h3>
                <p class="cert-issuer">{entry.issuer}</p>
                <p class="cert-date">{entry.date}</p>
            </div>
            {#if entry.credentialUrl}
                <a href={entry.credentialUrl} target="_blank" rel="noopener noreferrer" class="cert-link">
                    {viewCredentialLabel}
                    <Fa icon={faArrowUpRightFromSquare} size="0.75x" />
                </a>
            {/if}
        </div>
    {/each}
</div>

<style>
    .certificates-list {
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
    }

    .cert-item {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: var(--space-md);
        background-color: var(--color-surface);
        border-radius: var(--radius-md);
        gap: var(--space-md);
        flex-wrap: wrap;
    }

    .cert-info {
        flex: 1;
        min-width: 0;
    }

    .cert-name {
        font-size: var(--font-size-base);
        font-weight: 600;
        color: var(--color-dark);
        margin: 0;
    }

    .cert-issuer {
        font-size: var(--font-size-sm);
        color: var(--color-mid);
        margin: var(--space-xs) 0 0 0;
    }

    .cert-date {
        font-size: var(--font-size-sm);
        color: var(--color-muted);
        margin: var(--space-xs) 0 0 0;
    }

    .cert-link {
        display: inline-flex;
        align-items: center;
        gap: var(--space-xs);
        font-size: var(--font-size-sm);
        color: var(--color-accent);
        text-decoration: none;
        white-space: nowrap;
        flex-shrink: 0;
    }

    .cert-link:hover {
        text-decoration: underline;
    }

    :global(.cv-section--compact) .certificates-list {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: var(--space-sm);
    }

    :global(.cv-section--compact) .cert-item {
        padding: var(--space-sm);
        gap: var(--space-sm);
        border-radius: var(--radius-sm);
    }

    :global(.cv-section--compact) .cert-name {
        font-size: var(--font-size-sm);
    }

    :global(.cv-section--compact) .cert-issuer,
    :global(.cv-section--compact) .cert-date {
        font-size: 0.8125rem;
        margin-top: 2px;
    }

    :global(.cv-section--compact) .cert-link {
        font-size: 0.8125rem;
    }

    @media (max-width: 700px) {
        :global(.cv-section--compact) .certificates-list {
            grid-template-columns: 1fr;
        }
    }
</style>
