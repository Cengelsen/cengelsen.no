<script lang="ts">
    import type { LanguageProficiency } from '../../types/cv.types';

    export let entries: LanguageProficiency[];
</script>

<div class="languages-list">
    {#each entries as entry}
        <div class="language-item">
            <span class="language-name">{entry.language}</span>
            <span class="language-proficiency">{entry.proficiency}</span>
        </div>
    {/each}
</div>

<style>
    .languages-list {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
    }

    .language-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--space-sm) var(--space-md);
        background-color: var(--color-surface);
        border-radius: var(--radius-sm);
    }

    .language-name {
        font-weight: 600;
        color: var(--color-dark);
    }

    .language-proficiency {
        font-size: var(--font-size-sm);
        color: var(--color-muted);
        font-style: italic;
    }

    :global(.cv-section--compact) .languages-list {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: var(--space-xs);
    }

    :global(.cv-section--compact) .language-item {
        padding: var(--space-xs) var(--space-sm);
    }

    :global(.cv-section--compact) .language-name {
        font-size: var(--font-size-sm);
    }

    :global(.cv-section--compact) .language-proficiency {
        font-size: 0.8125rem;
    }

    @media (max-width: 700px) {
        :global(.cv-section--compact) .languages-list {
            grid-template-columns: 1fr;
        }
    }
</style>
