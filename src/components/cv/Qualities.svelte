<script lang="ts">
    import type { QualityValue } from '../../types/cv.types';

    export let entries: QualityValue[];
</script>

<div class="qualities-grid">
    {#each entries as entry}
        <article class="quality-item">
            <h3 class="quality-name">{entry.name}</h3>
            <p class="quality-description">{entry.description}</p>
        </article>
    {/each}
</div>

<style>
    .qualities-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        --quality-divider: 2px solid oklch(36% 0 0);
    }

    .quality-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--space-xs);
        padding: var(--space-md);
        text-align: center;
    }

    .quality-item:nth-child(odd) {
        border-right: var(--quality-divider);
    }

    .quality-item:nth-child(-n + 2) {
        border-bottom: var(--quality-divider);
    }

    .quality-name {
        margin: 0;
        font-size: var(--font-size-sm);
        font-weight: 600;
        color: var(--color-dark);
        letter-spacing: 0.02em;
    }

    .quality-description {
        margin: 0;
        font-size: 0.8125rem;
        color: var(--color-mid);
        line-height: 1.35;
    }

    @media (min-width: 768px) {
        .qualities-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .quality-item:nth-child(odd) {
            border-right: none;
        }

        .quality-item:nth-child(-n + 2) {
            border-bottom: none;
        }

        .quality-item:not(:nth-child(3n)) {
            border-right: var(--quality-divider);
        }

        .quality-item:nth-child(-n + 3) {
            border-bottom: var(--quality-divider);
        }
    }
</style>
