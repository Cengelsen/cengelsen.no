<script lang="ts">
    import type { Education, WorkExperience } from '../../types/cv.types';
    import type { CareerEntryKind } from '../../lib/career-timeline';
    import {
        buildCareerTimeline,
        buildCategoryLayouts,
        CATEGORY_COLORS,
        formatCvRange,
        monthPosition,
        plotCategoryHeightRem,
        plotTimeWidthRem
    } from '../../lib/career-timeline';

    export let experience: WorkExperience[] = [];
    export let volunteer: WorkExperience[] = [];
    export let education: Education[] = [];
    export let presentLabel: string = 'Present';
    export let ariaLabel: string = 'Career timeline';
    export let kindLabels: Record<CareerEntryKind, string> = {
        experience: 'Work',
        education: 'Education',
        volunteer: 'Volunteer'
    };

    $: layout = buildCareerTimeline(experience, volunteer, education);
    $: categoryLayouts = buildCategoryLayouts(layout);
    $: plotWidth = plotTimeWidthRem(layout);
    $: chartHeight = plotCategoryHeightRem(categoryLayouts);
    $: organizations = [
        ...new Map(layout.items.map((item) => [item.organization, item.color])).entries()
    ].sort(([a], [b]) => a.localeCompare(b));

    function barStyle(startMonth: number, endMonth: number): string {
        const left = monthPosition(endMonth, layout.minMonth, layout.maxMonth);
        const right = monthPosition(startMonth, layout.minMonth, layout.maxMonth);
        const width = Math.max(right - left, 2.5);
        return `left: ${left}%; width: ${width}%;`;
    }

    function tickStyle(month: number): string {
        return `left: ${monthPosition(month, layout.minMonth, layout.maxMonth)}%;`;
    }
</script>

<div class="overlap-chart">
    <div class="chart-body">
        <div class="chart-row">
            <div class="y-axis" aria-hidden="true">
                {#each categoryLayouts as category (category.kind)}
                    <div
                        class="category-label"
                        style="height: {category.heightRem}rem; --category-color: {CATEGORY_COLORS[category.kind]};"
                    >
                        <span class="category-swatch" aria-hidden="true"></span>
                        <span class="category-name">{kindLabels[category.kind]}</span>
                    </div>
                {/each}
            </div>

            <div class="plot-area">
                <div class="plot-column" style="width: {plotWidth}rem" role="list" aria-label={ariaLabel}>
                    <div class="x-axis" aria-hidden="true">
                        {#each layout.ticks as tick}
                            <span class="axis-tick" style={tickStyle(tick.month)}>
                                {tick.label}
                            </span>
                        {/each}
                    </div>

                    <div class="plot-body" style="height: {chartHeight}rem">
                        {#each layout.ticks as tick}
                            <div class="grid-line" style={tickStyle(tick.month)}></div>
                        {/each}

                        <div class="categories">
                            {#each categoryLayouts as category (category.kind)}
                                <section
                                    class="category"
                                    style="height: {category.heightRem}rem; --category-color: {CATEGORY_COLORS[category.kind]};"
                                    aria-label={kindLabels[category.kind]}
                                >
                                    <div class="lanes">
                                        {#each category.lanes as lane, laneIndex (laneIndex)}
                                            <div class="lane" style="height: {lane.heightRem}rem">
                                                {#each lane.items as item (item.id)}
                                                    <div
                                                        class="overlap-bar"
                                                        role="listitem"
                                                        style="{barStyle(item.startMonth, item.endMonth)} --bar-color: {item.color};"
                                                        title="{item.title} — {item.organization}: {formatCvRange(item.startDate, item.endDate, presentLabel)}"
                                                    >
                                                        <span class="bar-label">
                                                            <span class="bar-role">{item.title}</span>
                                                            <span class="bar-organization">
                                                                {#if item.url}
                                                                    <a href={item.url} target="_blank" rel="noopener noreferrer">{item.organization}</a>
                                                                {:else}
                                                                    {item.organization}
                                                                {/if}
                                                            </span>
                                                        </span>
                                                    </div>
                                                {/each}
                                            </div>
                                        {/each}
                                    </div>
                                </section>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {#if organizations.length > 0}
        <ul class="org-legend">
            {#each organizations as [organization, color]}
                <li class="legend-item">
                    <span class="legend-swatch" style="background-color: {color}"></span>
                    <span>{organization}</span>
                </li>
            {/each}
        </ul>
    {/if}
</div>

<style>
    .overlap-chart {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
        min-width: 0;
        width: 100%;
    }

    .chart-body {
        width: 100%;
        min-width: 0;
    }

    .chart-row {
        display: grid;
        grid-template-columns: 4.5rem minmax(0, 1fr);
        gap: var(--space-sm);
        align-items: start;
    }

    .y-axis {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding-top: calc(1.35rem + var(--space-xs));
    }

    .category-label {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.35rem;
        padding-right: var(--space-xs);
        box-sizing: border-box;
    }

    .category-swatch {
        width: 0.45rem;
        height: 0.45rem;
        border-radius: 2px;
        background-color: var(--category-color);
        flex-shrink: 0;
    }

    .category-name {
        font-size: 0.72rem;
        font-weight: 600;
        color: var(--category-color);
        text-align: right;
        line-height: 1.2;
    }

    .plot-area {
        min-width: 0;
        overflow-x: auto;
    }

    .plot-column {
        position: relative;
        padding: 0 calc(var(--space-xs) / 2);
        box-sizing: border-box;
        width: max-content;
        min-width: 100%;
    }

    .x-axis {
        position: relative;
        height: 1.35rem;
        margin-bottom: var(--space-xs);
        border-bottom: 1px solid var(--color-chrome-border);
    }

    .plot-body {
        position: relative;
    }

    .grid-line {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 0;
        border-left: 1px solid oklch(50% 0 0 / 0.12);
        pointer-events: none;
        z-index: 0;
    }

    .categories {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        height: 100%;
    }

    .category {
        position: relative;
        flex: 0 0 auto;
        width: 100%;
        border-top: 1px solid oklch(50% 0 0 / 0.1);
        border-left: 3px solid var(--category-color);
        padding-top: 0.15rem;
        box-sizing: border-box;
    }

    .category:first-child {
        border-top: none;
        padding-top: 0;
    }

    .lanes {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        height: 100%;
    }

    .lane {
        position: relative;
        flex: 0 0 auto;
        width: 100%;
    }

    .axis-tick {
        position: absolute;
        bottom: 0.2rem;
        transform: translateX(-50%);
        font-size: 0.7rem;
        color: var(--color-muted);
        white-space: nowrap;
        line-height: 1;
    }

    .overlap-bar {
        position: absolute;
        top: 0;
        bottom: 0;
        box-sizing: border-box;
        min-width: 2.75rem;
        border-radius: var(--radius-sm);
        background-color: color-mix(in oklch, var(--bar-color) 72%, var(--color-chrome));
        border: 1px solid color-mix(in oklch, var(--bar-color) 88%, white);
        border-left-width: 3px;
        border-left-color: var(--bar-color);
        box-shadow: inset 0 0 0 1px oklch(0% 0 0 / 0.08);
        padding: var(--space-xs) var(--space-sm);
        overflow: hidden;
        cursor: default;
        transition: filter 0.15s ease;
        z-index: 1;
    }

    .overlap-bar:hover {
        filter: brightness(1.08);
        z-index: 2;
    }

    .bar-label {
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 0;
    }

    .bar-role {
        font-size: 0.78rem;
        font-weight: 700;
        color: var(--color-dark);
        line-height: 1.25;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        text-wrap: balance;
    }

    .bar-organization {
        font-size: 0.65rem;
        font-weight: 500;
        color: var(--color-mid);
        line-height: 1.2;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .bar-organization a {
        color: inherit;
        text-decoration: none;
    }

    .bar-organization a:hover {
        color: var(--color-accent);
        text-decoration: underline;
    }

    .org-legend {
        list-style: none;
        margin: var(--space-sm) 0 0 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-sm) var(--space-md);
    }

    .legend-item {
        display: flex;
        align-items: center;
        gap: var(--space-xs);
        font-size: 0.8rem;
        font-weight: 500;
        color: var(--color-mid);
    }

    .legend-swatch {
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 2px;
        flex-shrink: 0;
    }

    @media (max-width: 700px) {
        .chart-row {
            grid-template-columns: 3.25rem minmax(0, 1fr);
        }

        .category-name {
            font-size: 0.65rem;
        }
    }

    :global(.cv-section--compact) .bar-role {
        font-size: 0.72rem;
    }
</style>
