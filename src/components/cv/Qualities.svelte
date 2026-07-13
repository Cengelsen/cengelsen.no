<script lang="ts">
    import type { QualityValue } from '../../types/cv.types';

    export let entries: QualityValue[];
</script>

<div class="qualities-grid">
    {#each entries as entry}
        <article class="quality-card">
            <h3 class="quality-name">{entry.name}</h3>
            <p class="quality-description">{entry.description}</p>
        </article>
    {/each}
</div>

<style>
    .qualities-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: var(--space-sm);
    }

    .quality-card {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--space-xs);
        padding: var(--space-sm) var(--space-md);
        text-align: center;
        border-radius: var(--radius-md);
        background:
            linear-gradient(
                145deg,
                color-mix(in oklch, var(--cv-accent, var(--color-accent)) 12%, oklch(36% 0.02 75 / 0.25)) 0%,
                oklch(30% 0 0 / 0.25) 48%,
                oklch(24% 0 0 / 0.25) 100%
            );
        border: 1px solid color-mix(in oklch, var(--cv-accent, var(--color-accent)) 22%, oklch(100% 0 0 / 0.08));
        box-shadow:
            var(--shadow-md),
            inset 0 1px 0 oklch(100% 0 0 / 0.14),
            inset 0 -1px 0 oklch(0% 0 0 / 0.35);
        overflow: hidden;
    }

    .quality-card::before {
        content: '';
        position: absolute;
        inset: 0 0 55% 0;
        background: linear-gradient(
            180deg,
            oklch(100% 0 0 / 0.1) 0%,
            transparent 100%
        );
        pointer-events: none;
    }

    .quality-name,
    .quality-description {
        position: relative;
        z-index: 1;
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
        max-width: 24ch;
        font-size: 0.8125rem;
        color: var(--color-mid);
        line-height: 1.35;
    }

    @media (max-width: 700px) {
        .qualities-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
