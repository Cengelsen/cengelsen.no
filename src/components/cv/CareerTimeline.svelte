<script lang="ts">
    import type { Education, WorkExperience } from '../../types/cv.types';
    import type { CareerEntryKind } from '../../lib/career-timeline';
    import {
        buildCareerTimeline,
        buildCategoryLayouts,
        buildTimelineWindows,
        CATEGORY_COLORS,
        clippedBarPosition,
        formatWindowLabel,
        monthPosition,
        plotCategoryHeightRem
    } from '../../lib/career-timeline';
    import type { Lang } from '../../lib/posts';
    import { currentMonthIndex, formatCvRange } from '../../lib/cv-dates';

    export let experience: WorkExperience[] = [];
    export let volunteer: WorkExperience[] = [];
    export let education: Education[] = [];
    export let presentLabel: string = 'Present';
    export let lang: Lang = 'no';
    export let ariaLabel: string = 'Career timeline';
    export let newerLabel: string = 'Newer';
    export let olderLabel: string = 'Older';
    export let screenNavLabel: string = 'Timeline period';
    export let kindLabels: Record<CareerEntryKind, string> = {
        experience: 'Work',
        education: 'Education',
        volunteer: 'Volunteer'
    };

    const presentMonth = currentMonthIndex();

    let screenIndex = 0;

    $: windows = buildTimelineWindows(presentMonth);
    $: screenIndex = Math.min(screenIndex, Math.max(windows.length - 1, 0));
    $: activeWindow = windows[screenIndex];
    $: windowLabel = activeWindow ? formatWindowLabel(activeWindow) : '';
    $: layout = activeWindow
        ? buildCareerTimeline(experience, volunteer, education, activeWindow, presentMonth)
        : null;
    $: categoryLayouts = layout ? buildCategoryLayouts(layout) : [];
    $: chartHeight = plotCategoryHeightRem(categoryLayouts);

    function barStyle(startMonth: number, endMonth: number): string | null {
        if (!layout) return null;
        const position = clippedBarPosition(
            startMonth,
            endMonth,
            layout.window,
            layout.axisMinMonth,
            layout.axisMaxMonth
        );
        if (!position) return null;
        return `left: ${position.left}%; width: ${position.width}%;`;
    }

    function tickStyle(month: number): string {
        if (!layout) return '';
        return `left: ${monthPosition(month, layout.axisMinMonth, layout.axisMaxMonth)}%;`;
    }

    function showNewer() {
        screenIndex = Math.max(screenIndex - 1, 0);
    }

    function showOlder() {
        screenIndex = Math.min(screenIndex + 1, windows.length - 1);
    }
</script>

<div class="overlap-chart">
    {#if windows.length > 1}
        <div class="timeline-nav" role="group" aria-label={screenNavLabel}>
            <button
                type="button"
                class="nav-btn"
                disabled={screenIndex === 0}
                aria-label={newerLabel}
                on:click={showNewer}
            >
                ‹ {newerLabel}
            </button>
            <button
                type="button"
                class="nav-btn"
                disabled={screenIndex === windows.length - 1}
                aria-label={olderLabel}
                on:click={showOlder}
            >
                {olderLabel} ›
            </button>
        </div>
    {/if}

    {#if layout}
        <div class="chart-body">
            <div class="chart-row">
                <div class="plot-area">
                    <div
                        class="plot-column"
                        role="list"
                        aria-label="{ariaLabel}, {windowLabel}"
                    >
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
                                                        {@const style = barStyle(item.startMonth, item.endMonth)}
                                                        {#if style}
                                                            <div
                                                                class="overlap-bar"
                                                                role="listitem"
                                                                style="{style} --bar-color: {item.color};"
                                                                title="{item.title} — {item.organization}: {formatCvRange(item.startDate, item.endDate, presentLabel, lang)}"
                                                            >
                                                                <span class="bar-label">
                                                                    <span class="bar-role">{item.title}</span>
                                                                    <span class="bar-organization">{item.organization}</span>
                                                                </span>
                                                            </div>
                                                        {/if}
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
            </div>
        </div>

        {#if windows.length > 1}
            <div class="timeline-nav" role="group" aria-label={screenNavLabel}>
                <button
                    type="button"
                    class="nav-btn"
                    disabled={screenIndex === 0}
                    aria-label={newerLabel}
                    on:click={showNewer}
                >
                    ‹ {newerLabel}
                </button>
                <button
                    type="button"
                    class="nav-btn"
                    disabled={screenIndex === windows.length - 1}
                    aria-label={olderLabel}
                    on:click={showOlder}
                >
                    {olderLabel} ›
                </button>
            </div>
        {/if}
    {/if}
</div>

<style>
    .overlap-chart {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
        min-width: 0;
        width: 100%;
        max-width: 100%;
    }

    .timeline-nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--space-md);
        flex-wrap: wrap;
    }

    .nav-btn {
        appearance: none;
        border: 1px solid var(--color-chrome-border);
        border-radius: var(--radius-md);
        background: transparent;
        color: var(--color-mid);
        font-size: 0.85rem;
        font-weight: 500;
        padding: 0.45rem 0.9rem;
        cursor: pointer;
        transition: background-color 0.15s ease, color 0.15s ease;
    }

    .nav-btn:hover:not(:disabled) {
        color: var(--color-dark);
        background-color: oklch(50% 0 0 / 0.08);
    }

    .nav-btn:disabled {
        opacity: 0.35;
        cursor: not-allowed;
    }

    .nav-btn:focus-visible {
        outline: 2px solid var(--color-accent);
        outline-offset: 2px;
    }

    .chart-body {
        width: 100%;
        min-width: 0;
    }

    .chart-row {
        position: relative;
        width: 100%;
    }

    .plot-area {
        width: 100%;
        min-width: 0;
        overflow: hidden;
    }

    .y-axis {
        position: absolute;
        top: 0;
        right: 100%;
        margin-right: var(--space-sm);
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding-top: calc(1.85rem + var(--space-xs));
        width: max-content;
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

    .plot-column {
        position: relative;
        padding: 0 calc(var(--space-xs) / 2);
        box-sizing: border-box;
        width: 100%;
        max-width: 100%;
    }

    .x-axis {
        position: relative;
        height: 1.85rem;
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
        bottom: 0.35rem;
        transform: translateX(-50%);
        font-size: 0.82rem;
        font-weight: 600;
        color: var(--color-dark);
        letter-spacing: 0.02em;
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
        padding: calc(var(--space-xs) / 2) var(--space-sm);
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
        -webkit-line-clamp: 1;
        line-clamp: 1;
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
        -webkit-line-clamp: 1;
        line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    @media (max-width: 700px) {
        .category-name {
            font-size: 0.65rem;
        }
    }

    :global(.cv-section--compact) .bar-role {
        font-size: 0.72rem;
    }
</style>
