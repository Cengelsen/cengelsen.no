<script lang="ts">
    import type { Coursework } from '../../types/cv.types';

    export let entries: Coursework[];

    $: grouped = entries.reduce<Record<string, Coursework[]>>((acc, entry) => {
        (acc[entry.institution] ??= []).push(entry);
        return acc;
    }, {});
</script>

<div class="coursework-section">
    {#each Object.entries(grouped) as [institution, courses]}
        <div class="institution-group">
            <h4 class="institution-name">{institution}</h4>
            <div class="course-grid">
                {#each courses as course}
                    <div class="course-card">
                        <div class="course-header">
                            <h3 class="course-name">{course.name}</h3>
                            <span class="course-code">{course.code}</span>
                        </div>
                        <p class="course-description">{course.description}</p>
                    </div>
                {/each}
            </div>
        </div>
    {/each}
</div>

<style>
    .coursework-section {
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
    }

    .institution-name {
        font-size: var(--font-size-sm);
        font-weight: 600;
        color: var(--color-dark);
        margin: 0 0 var(--space-sm) 0;
    }

    .course-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: var(--space-sm);
    }

    .course-card {
        display: flex;
        flex-direction: column;
        gap: var(--space-xs);
        padding: var(--space-sm) var(--space-md);
        background-color: var(--color-surface);
        border-radius: var(--radius-md);
    }

    .course-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: var(--space-sm);
    }

    .course-name {
        font-size: var(--font-size-sm);
        font-weight: 600;
        color: var(--color-dark);
        margin: 0;
    }

    .course-code {
        font-size: 0.75rem;
        color: var(--color-muted);
        font-family: var(--font-mono, monospace);
        white-space: nowrap;
        flex-shrink: 0;
    }

    .course-description {
        font-size: var(--font-size-sm);
        color: var(--color-mid);
        margin: 0;
        line-height: var(--line-height-base);
    }
</style>
