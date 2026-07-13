<script lang="ts">
    import type { Coursework } from '../../types/cv.types';
    import { computeDegreeCredits } from '../../lib/education-credits';
    import Fa from 'svelte-fa';
    import { faFileLines } from '@fortawesome/free-solid-svg-icons';

    export let entries: Coursework[];
    export let replacesLabel: string = 'Replaces';
    export let replacedByLabel: string = 'Replaced by';
    export let essayLabel: string = 'Essay';
    export let overlapLabel: string = 'Also counts towards this degree';
    export let creditsUnit: string = 'ECTS credits';
    export let typeLabels: Record<string, string> = { mandatory: 'Mandatory', specialization: 'Specialization', elective: 'Elective' };
    export let lang: string = 'no';

    $: blogBase = lang === 'no' ? '/blog' : `/${lang}/blog`;

    $: replacedByMap = entries.reduce<Record<string, Coursework>>((acc, entry) => {
        if (entry.replaces) acc[entry.replaces] = entry;
        return acc;
    }, {});

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

    function hasCredits(credits: number | undefined): credits is number {
        return credits != null && credits > 0;
    }
</script>

<div class="coursework-section">
    {#each Object.entries(grouped) as [degree, { primary, overlap }]}
        {@const degreeCredits = computeDegreeCredits(entries, degree)}
        <div class="degree-group">
            <div class="degree-header">
                <h4 class="degree-name">{degree}</h4>
                {#if degreeCredits > 0}
                    <span class="degree-credits">{degreeCredits} {creditsUnit}</span>
                {/if}
            </div>
            {#if overlap.length > 0}
                <div class="overlap-section">
                    <p class="overlap-note">{overlapLabel}:</p>
                    <ul class="overlap-list">
                        {#each overlap as course}
                            <li class="overlap-item">
                                <span class="overlap-name">{course.name}</span>
                                <span class="overlap-code">{course.code}</span>
                                {#if hasCredits(course.credits)}
                                    <span class="overlap-credits">{course.credits}</span>
                                {/if}
                            </li>
                        {/each}
                    </ul>
                </div>
                <hr class="overlap-divider" />
            {/if}
            {#each groupByType(primary) as { type, courses }}
                <div
                    class="course-group"
                    class:type-group={type != null}
                    class:type-group--mandatory={type === 'mandatory'}
                    class:type-group--specialization={type === 'specialization'}
                    class:type-group--elective={type === 'elective'}
                >
                    {#if type}
                        <span class="type-label type-label--{type}">{typeLabels[type]}</span>
                    {/if}
                    <div class="course-grid">
                        {#each courses as course}
                            {@const replacedBy = replacedByMap[course.code]}
                            <div
                                class="course-card"
                                class:has-credits={hasCredits(course.credits)}
                                class:has-essay={!!course.blogSlug}
                            >
                                {#if hasCredits(course.credits)}
                                    <span class="course-credits">{course.credits}</span>
                                {/if}
                                <div class="course-header">
                                    <h3 class="course-name">{course.name}</h3>
                                </div>
                                <div class="course-body" class:course-body--full={!course.skillTags?.length}>
                                    <div class="course-content">
                                        <p class="course-description">{course.description}</p>
                                    </div>
                                    {#if course.skillTags?.length}
                                        <div class="course-props">
                                            {#each course.skillTags as tag}
                                                <span class="skill-tag">{tag}</span>
                                            {/each}
                                        </div>
                                    {/if}
                                </div>
                                {#if course.blogSlug}
                                    <a
                                        class="course-essay"
                                        href="{blogBase}/{course.blogSlug}"
                                        title={essayLabel}
                                        aria-label={essayLabel}
                                    >
                                        <Fa icon={faFileLines} size="1.15x" />
                                    </a>
                                {/if}
                                <div class="course-footer">
                                    <span class="course-code">{course.code}</span>
                                    {#if course.replaces}
                                        <span class="course-footer-note">
                                            {replacesLabel} {course.replaces}
                                        </span>
                                    {:else if replacedBy}
                                        <span class="course-footer-note">
                                            {replacedByLabel} {replacedBy.code}
                                        </span>
                                    {/if}
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    {/each}
</div>

<style>
    .coursework-section {
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
        min-width: 0;
        max-width: 100%;
    }

    .degree-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: var(--space-sm);
        flex-wrap: wrap;
        margin-bottom: var(--space-sm);
    }

    .degree-name {
        font-size: var(--font-size-sm);
        font-weight: 600;
        color: var(--color-dark);
        margin: 0;
    }

    .degree-credits {
        font-size: var(--font-size-sm);
        font-weight: 600;
        color: var(--color-accent);
        white-space: nowrap;
    }

    .degree-group {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
    }

    .course-group {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
    }

    .type-group {
        border: 1px solid oklch(50% 0 0 / 0.12);
        border-radius: var(--radius-md);
        padding: var(--space-sm) var(--space-md);
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
        grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
        gap: var(--space-sm);
        min-width: 0;
    }

    .course-card {
        position: relative;
        min-width: 0;
        max-width: 100%;
        padding: var(--space-sm) var(--space-md);
        background-color: var(--color-surface);
        border-radius: var(--radius-md);
        display: flex;
        flex-direction: column;
        gap: var(--space-xs);
        overflow: hidden;
    }

    .course-card.has-credits .course-header {
        padding-right: 2rem;
    }

    .course-header {
        display: flex;
        align-items: flex-start;
    }

    .course-body {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(3rem, auto);
        gap: var(--space-sm);
        align-items: stretch;
    }

    .course-body--full {
        grid-template-columns: 1fr;
    }

    .course-content {
        display: flex;
        flex-direction: column;
        gap: var(--space-xs);
        min-width: 0;
        overflow-wrap: break-word;
    }

    .course-props {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-self: stretch;
        gap: 3px;
        flex-shrink: 0;
        min-width: 3rem;
        height: 100%;
        border-left: 1px solid var(--color-chrome-border, oklch(50% 0 0 / 0.15));
        padding-left: var(--space-sm);
    }

    .course-props > * {
        display: block;
        max-width: 100%;
    }

    .course-name {
        font-size: var(--font-size-sm);
        font-weight: 600;
        color: var(--color-dark);
        margin: 0;
        min-width: 0;
        flex: 1;
    }

    .course-code {
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--color-dark);
        font-family: var(--font-mono, monospace);
        letter-spacing: 0.02em;
        background-color: oklch(50% 0 0 / 0.06);
        border: 1px solid oklch(50% 0 0 / 0.12);
        border-radius: 2px;
        padding: 0 4px;
        width: fit-content;
        flex-shrink: 0;
    }

    .course-credits,
    .course-essay {
        color: var(--color-dark);
        background-color: oklch(36% 0.03 75 / 0.5);
    }

    .course-credits {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        padding: 0.35rem 0.45rem 0 0;
        font-size: 0.8rem;
        font-weight: 700;
        line-height: 1;
        clip-path: polygon(100% 0, 0 0, 100% 100%);
        box-shadow:
            inset 0 0 0 1px var(--color-chrome-border),
            -1px 1px 0 oklch(22% 0 0 / 0.25);
    }

    .course-description {
        font-size: var(--font-size-sm);
        color: var(--color-mid);
        margin: 0;
        line-height: var(--line-height-base);
        overflow-wrap: break-word;
        word-wrap: break-word;
        hyphens: auto;
    }

    .course-essay {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 1;
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        padding: 0 0.3rem 0.3rem 0;
        clip-path: polygon(100% 100%, 0 100%, 100% 0);
        box-shadow:
            inset 0 0 0 1px var(--color-chrome-border),
            -1px -1px 0 oklch(22% 0 0 / 0.25);
        text-decoration: none;
        cursor: pointer;
    }

    .course-card.has-essay .course-essay {
        bottom: 2rem;
    }

    .course-card.has-essay .course-body {
        padding-bottom: 1.5rem;
    }

    .course-essay:hover {
        color: var(--color-dark);
        background-color: oklch(42% 0.04 75 / 0.65);
    }

    .course-essay:focus-visible {
        outline: 2px solid var(--color-chrome-border);
        outline-offset: -2px;
    }

    .skill-tag {
        font-size: 0.7rem;
        padding: 0 4px;
        background-color: oklch(80% 0.16 75 / 0.12);
        color: var(--color-accent);
        border-radius: 2px;
        border: 1px solid oklch(80% 0.16 75 / 0.25);
        font-weight: 500;
        width: fit-content;
    }

    .course-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-sm);
        margin-top: auto;
        margin-left: calc(-1 * var(--space-md));
        margin-right: calc(-1 * var(--space-md));
        margin-bottom: calc(-1 * var(--space-sm));
        padding: 0 var(--space-md);
        height: 2rem;
        min-height: 2rem;
        flex-shrink: 0;
        border-top: 1px solid var(--color-chrome-border, oklch(50% 0 0 / 0.15));
        background-color: oklch(50% 0 0 / 0.06);
        width: calc(100% + 2 * var(--space-md));
        box-sizing: border-box;
    }

    .course-footer .course-code {
        line-height: 1;
        white-space: nowrap;
    }

    .course-footer-note {
        flex: 1;
        min-width: 0;
        font-size: 0.7rem;
        color: var(--color-muted);
        font-style: italic;
        text-align: center;
        line-height: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media (max-width: 700px) {
        .course-grid {
            grid-template-columns: 1fr;
        }

        .course-body {
            display: flex;
            flex-direction: column;
            gap: var(--space-xs);
        }

        .course-props {
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            align-self: auto;
            height: auto;
            gap: var(--space-xs);
            width: 100%;
            border-left: none;
            padding-left: 0;
            border-top: 1px solid var(--color-chrome-border, oklch(50% 0 0 / 0.15));
            padding-top: var(--space-xs);
        }
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

    .overlap-credits {
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--color-accent);
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
