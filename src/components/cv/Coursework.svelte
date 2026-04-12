<script lang="ts">
    import type { Coursework } from '../../types/cv.types';

    export let entries: Coursework[];
    export let replacesLabel: string = 'Replaces';
    export let essayLabel: string = 'Essay';
    export let overlapLabel: string = 'Also counts towards this degree';
    export let typeLabels: Record<string, string> = { mandatory: 'Mandatory', specialization: 'Specialization', elective: 'Elective' };
    export let lang: string = 'no';

    $: blogBase = lang === 'no' ? '/blog' : `/${lang}/blog`;

    const typeOrder = ['mandatory', 'specialization', 'elective'] as const;

    $: grouped = entries.reduce<Record<string, { primary: Coursework[]; overlap: Coursework[] }>>((acc, entry) => {
        const primary = entry.degrees[0];
        (acc[primary] ??= { primary: [], overlap: [] }).primary.push(entry);

        for (const deg of entry.degrees.slice(1)) {
            (acc[deg] ??= { primary: [], overlap: [] }).overlap.push(entry);
        }
        return acc;
    }, {});

    function groupByType(courses: Coursework[]): { type: string | null; courses: Coursework[] }[] {
        const hasTypes = courses.some(c => c.courseType);
        if (!hasTypes) return [{ type: null, courses }];

        const groups: { type: string | null; courses: Coursework[] }[] = [];
        for (const t of typeOrder) {
            const matching = courses.filter(c => c.courseType === t);
            if (matching.length > 0) groups.push({ type: t, courses: matching });
        }
        const untyped = courses.filter(c => !c.courseType);
        if (untyped.length > 0) groups.push({ type: null, courses: untyped });
        return groups;
    }
</script>

<div class="coursework-section">
    {#each Object.entries(grouped) as [degree, { primary, overlap }]}
        <div class="degree-group">
            <h4 class="degree-name">{degree}</h4>
            {#if overlap.length > 0}
                <div class="overlap-section">
                    <p class="overlap-note">{overlapLabel}:</p>
                    <ul class="overlap-list">
                        {#each overlap as course}
                            <li class="overlap-item">
                                <span class="overlap-name">{course.name}</span>
                                <span class="overlap-code">{course.code}</span>
                            </li>
                        {/each}
                    </ul>
                </div>
                <hr class="overlap-divider" />
            {/if}
            {#each groupByType(primary) as { type, courses }}
                {#if type}
                    <div class="type-group type-group--{type}">
                        <span class="type-label type-label--{type}">{typeLabels[type]}</span>
                        <div class="course-grid">
                            {#each courses as course}
                                <div class="course-card">
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
                                </div>
                            {/each}
                        </div>
                    </div>
                {:else}
                    <div class="course-grid">
                        {#each courses as course}
                            <div class="course-card">
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
                            </div>
                        {/each}
                    </div>
                {/if}
            {/each}
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

    .degree-group {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
    }

    .type-group {
        border: 1px solid oklch(50% 0 0 / 0.12);
        border-radius: var(--radius-md);
        padding: var(--space-sm) var(--space-md);
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
    }

    .type-group--mandatory {
        border-color: oklch(50% 0 0 / 0.55);
    }

    .type-group--specialization {
        border-color: oklch(80% 0.16 75 / 0.4);
    }

    .type-group--elective {
        border-color: oklch(55% 0.15 160 / 0.4);
    }

    .type-label {
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .type-label--mandatory {
        color: var(--color-muted);
    }

    .type-label--specialization {
        color: var(--color-accent);
    }

    .type-label--elective {
        color: oklch(55% 0.15 160);
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

    .overlap-section {
        margin-bottom: 0;
    }

    .overlap-divider {
        border: none;
        border-top: 1px solid var(--color-chrome-border, oklch(50% 0 0 / 0.15));
        margin: var(--space-md) 0;
    }

    .overlap-note {
        font-size: var(--font-size-sm);
        color: var(--color-muted);
        font-style: italic;
        margin: 0 0 var(--space-xs) 0;
    }

    .overlap-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-xs);
    }

    .overlap-item {
        display: flex;
        align-items: baseline;
        gap: var(--space-xs);
        padding: 2px var(--space-sm);
        border: 1px dashed var(--color-muted);
        border-radius: var(--radius-sm);
        opacity: 0.85;
    }

    .overlap-name {
        font-size: var(--font-size-sm);
        color: var(--color-mid);
    }

    .overlap-code {
        font-size: 0.7rem;
        color: var(--color-muted);
        font-family: var(--font-mono, monospace);
    }
</style>
