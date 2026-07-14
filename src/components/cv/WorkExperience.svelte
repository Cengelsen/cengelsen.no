<script lang="ts">
    import type { WorkExperience } from '../../types/cv.types';

    export let entries: WorkExperience[];
    export let presentLabel: string = 'Present';
</script>

<div class="timeline">
    {#each entries as entry}
        <div class="timeline-entry">
            <div class="timeline-header">
                <div>
                    <h3 class="entry-role">{entry.role}</h3>
                    <p class="entry-company">
                        {#if entry.companyUrl}
                            <a href={entry.companyUrl} target="_blank" rel="noopener noreferrer">{entry.company}</a>
                        {:else}
                            {entry.company}
                        {/if}
                    </p>
                </div>
                <span class="entry-dates">
                    {entry.startDate} — {entry.endDate ?? presentLabel}
                </span>
            </div>
            <ul class="entry-description">
                {#each entry.description as bullet}
                    <li>{bullet}</li>
                {/each}
            </ul>
            {#if entry.skillTags?.length}
                <div class="entry-skills">
                    {#each entry.skillTags as tag}
                        <span class="skill-tag">{tag}</span>
                    {/each}
                </div>
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

    .entry-role {
        font-size: var(--font-size-base);
        font-weight: 600;
        color: var(--color-dark);
        margin: 0;
    }

    .entry-company {
        font-size: var(--font-size-sm);
        color: var(--color-mid);
        margin: var(--space-xs) 0 0 0;
    }

    .entry-company a {
        color: var(--color-accent);
        text-decoration: none;
    }

    .entry-company a:hover {
        text-decoration: underline;
    }

    .entry-dates {
        font-size: var(--font-size-sm);
        color: var(--color-muted);
        white-space: nowrap;
        flex-shrink: 0;
    }

    .entry-description {
        margin: var(--space-sm) 0 0 0;
        padding-left: var(--space-lg);
        color: var(--color-mid);
        font-size: var(--font-size-sm);
        line-height: var(--line-height-base);
    }

    .entry-description li {
        margin-bottom: var(--space-xs);
    }

    .entry-skills {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-xs);
        margin-top: var(--space-sm);
    }

    .skill-tag {
        font-size: 0.7rem;
        padding: 1px var(--space-xs);
        background-color: oklch(80% 0.16 75 / 0.12);
        color: var(--color-accent);
        border-radius: var(--radius-sm);
        border: 1px solid oklch(80% 0.16 75 / 0.25);
        font-weight: 500;
    }

    @media (max-width: 700px) {
        .timeline-header {
            flex-direction: column;
            gap: var(--space-xs);
        }
    }

    :global(.cv-section--compact) .timeline {
        gap: var(--space-md);
        padding-left: var(--space-md);
    }

    :global(.cv-section--compact) .timeline-entry::before {
        left: calc(-1 * var(--space-md) - 7px);
    }

    :global(.cv-section--compact) .entry-role {
        font-size: var(--font-size-sm);
    }

    :global(.cv-section--compact) .entry-description {
        margin-top: var(--space-xs);
        padding-left: var(--space-md);
    }

    :global(.cv-section--compact) .entry-description li {
        margin-bottom: 2px;
    }
</style>
