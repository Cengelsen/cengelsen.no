<script lang="ts">
    import type { Education } from '../../types/cv.types';
    import type { Lang } from '../../lib/posts';
    import { formatCvDateDisplay } from '../../lib/cv-dates';

    export let entries: Education[];
    export let presentLabel: string = 'Present';
    export let creditsUnit: string = 'ECTS credits';
    export let lang: Lang = 'no';
</script>

<div class="timeline">
    {#each entries as entry}
        <div class="timeline-entry">
            <div class="timeline-header">
                <div>
                    <h3 class="entry-field">{entry.field}</h3>
                    <p class="entry-meta">
                        <span class="entry-institution">{entry.institution}</span>
                        <span class="entry-meta-separator" aria-hidden="true">·</span>
                        <span class="entry-degree">{entry.degree}</span>
                    </p>
                </div>
                <div class="entry-aside">
                    {#if entry.credits}
                        <span class="entry-credits">{entry.credits} {creditsUnit}</span>
                    {/if}
                    <span class="entry-dates">
                        {formatCvDateDisplay(entry.startDate, lang)} — {entry.endDate ? formatCvDateDisplay(entry.endDate, lang) : presentLabel}
                    </span>
                </div>
            </div>
            {#if entry.description}
                <p class="entry-description">{entry.description}</p>
            {/if}
        </div>
    {/each}
</div>

<style>
    .timeline {
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
        border-left: 3px solid var(--color-chrome-border);
        padding-left: var(--space-lg);
    }

    .timeline-entry {
        position: relative;
    }

    .timeline-entry::before {
        content: '';
        position: absolute;
        left: calc(-1 * var(--space-lg) - 7px);
        top: 6px;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background-color: var(--color-accent);
    }

    .timeline-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: var(--space-md);
        flex-wrap: wrap;
    }

    .entry-field {
        font-size: var(--font-size-base);
        font-weight: 600;
        color: var(--color-dark);
        margin: 0;
    }

    .entry-meta {
        font-size: var(--font-size-sm);
        color: var(--color-mid);
        margin: var(--space-xs) 0 0 0;
    }

    .entry-meta-separator {
        margin: 0 var(--space-xs);
        color: var(--color-muted);
    }

    .entry-degree {
        color: var(--color-mid);
    }

    .entry-aside {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: var(--space-xs);
        flex-shrink: 0;
    }

    .entry-credits {
        font-size: var(--font-size-sm);
        font-weight: 600;
        color: var(--color-accent);
        background-color: oklch(80% 0.16 75 / 0.12);
        border: 1px solid oklch(80% 0.16 75 / 0.25);
        border-radius: var(--radius-sm);
        padding: 2px var(--space-sm);
        white-space: nowrap;
    }

    .entry-dates {
        font-size: var(--font-size-sm);
        color: var(--color-muted);
        white-space: nowrap;
    }

    .entry-description {
        margin: var(--space-sm) 0 0 0;
        color: var(--color-mid);
        font-size: var(--font-size-sm);
        line-height: var(--line-height-base);
    }

    @media (max-width: 700px) {
        .timeline-header {
            flex-direction: column;
            gap: var(--space-xs);
        }

        .entry-aside {
            align-items: flex-start;
        }
    }

    :global(.cv-section--compact) .timeline {
        gap: var(--space-md);
        padding-left: var(--space-md);
    }

    :global(.cv-section--compact) .timeline-entry::before {
        left: calc(-1 * var(--space-md) - 7px);
    }

    :global(.cv-section--compact) .entry-field {
        font-size: var(--font-size-sm);
    }

    :global(.cv-section--compact) .entry-description {
        margin-top: var(--space-xs);
    }
</style>
