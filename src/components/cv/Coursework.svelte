<script lang="ts">
    import type { Coursework } from '../../types/cv.types';

    export let entries: Coursework[];
    export let replacesLabel: string = 'Replaces';
    export let essayLabel: string = 'Essay';
    export let lang: string = 'no';

    $: blogBase = lang === 'no' ? '/blog' : `/${lang}/blog`;

    $: grouped = entries.reduce<Record<string, Coursework[]>>((acc, entry) => {
        for (const deg of entry.degrees) {
            (acc[deg] ??= []).push(entry);
        }
        return acc;
    }, {});
</script>

<div class="coursework-section">
    {#each Object.entries(grouped) as [degree, courses]}
        <div class="degree-group">
            <h4 class="degree-name">{degree}</h4>
            <div class="course-grid">
                {#each courses as course}
                    <div class="course-card" class:shared={course.degrees.length > 1}>
                        <div class="course-header">
                            <h3 class="course-name">{course.name}</h3>
                            <span class="course-code">{course.code}</span>
                        </div>
                        <p class="course-description">{course.description}</p>
                        {#if course.blogSlug}
                            <a class="course-essay" href="{blogBase}/{course.blogSlug}">{essayLabel} →</a>
                        {/if}
                        {#if course.replaces}
                            <span class="course-replaces">{replacesLabel} {course.replaces}</span>
                        {/if}
                        {#if course.degrees.length > 1}
                            <div class="course-shared-badges">
                                {#each course.degrees.filter(d => d !== degree) as otherDegree}
                                    <span class="shared-badge">{otherDegree}</span>
                                {/each}
                            </div>
                        {/if}
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

    .degree-name {
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
        border: 1px solid transparent;
    }

    .course-card.shared {
        border-color: var(--color-accent);
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

    .course-essay {
        font-size: var(--font-size-sm);
        color: var(--color-accent);
        text-decoration: none;
    }

    .course-essay:hover {
        text-decoration: underline;
    }

    .course-replaces {
        font-size: 0.7rem;
        color: var(--color-muted);
        font-style: italic;
    }

    .course-shared-badges {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-xs);
        margin-top: auto;
    }

    .shared-badge {
        font-size: 0.7rem;
        padding: 1px 0.4rem;
        border-radius: var(--radius-sm);
        color: var(--color-accent);
        border: 1px solid var(--color-accent);
        opacity: 0.8;
    }
</style>
