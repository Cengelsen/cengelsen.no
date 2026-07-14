<script lang="ts">
    import type { Education, WorkExperience } from '../../types/cv.types';
    import type { CareerEntryKind } from '../../lib/career-timeline';
    import {
        buildCareerTimeline,
        buildCategoryLayouts,
        buildMobileCareerTimeline,
        buildTimelineWindows,
        CATEGORY_COLORS,
        clippedBarPosition,
        clippedBarPositionVertical,
        formatWindowLabel,
        mobileCategoryColumnWidthRem,
        mobileLaneOffset,
        mobilePlotHeightRem,
        mobilePlotWidthRem,
        monthPosition,
        monthPositionPadded,
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
    $: mobileLayout = buildMobileCareerTimeline(experience, volunteer, education, presentMonth);
    $: categoryLayouts = layout ? buildCategoryLayouts(layout) : [];
    $: mobileCategoryLayouts = buildCategoryLayouts(mobileLayout);
    $: chartHeight = plotCategoryHeightRem(categoryLayouts);
    $: mobilePlotHeight = mobilePlotHeightRem(mobileLayout.axisMinMonth, mobileLayout.axisMaxMonth);
    $: mobilePlotWidth = mobilePlotWidthRem(mobileCategoryLayouts);

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

    function mobileBarStyle(
        startMonth: number,
        endMonth: number,
        laneIndex: number,
        laneCount: number
    ): string | null {
        const position = clippedBarPositionVertical(
            startMonth,
            endMonth,
            mobileLayout.window,
            mobileLayout.axisMinMonth,
            mobileLayout.axisMaxMonth,
            true
        );
        if (!position) return null;
        const lane = mobileLaneOffset(laneIndex, laneCount);
        return `top: ${position.top}%; height: ${position.height}%; left: ${lane.left}%; width: ${lane.width}%;`;
    }

    function tickStyle(month: number): string {
        if (!layout) return '';
        return `left: ${monthPosition(month, layout.axisMinMonth, layout.axisMaxMonth)}%;`;
    }

    function mobileTickStyle(month: number): string {
        return `top: ${monthPositionPadded(month, mobileLayout.axisMinMonth, mobileLayout.axisMaxMonth)}%;`;
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
            <div class="chart-row plot-desktop">
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

            <div
                class="plot-mobile"
                role="list"
                aria-label="{ariaLabel}, {formatWindowLabel(mobileLayout.window)}"
            >
                <div class="mobile-scroll">
                    <div
                        class="mobile-chart"
                        style="width: calc({mobilePlotWidth}rem + var(--mobile-y-axis-width));"
                    >
                        <div class="mobile-header-row">
                            <div class="mobile-y-spacer" aria-hidden="true"></div>
                            <div class="mobile-category-axis" style="width: {mobilePlotWidth}rem">
                                {#each mobileCategoryLayouts as category (category.kind)}
                                    <div
                                        class="mobile-category-header"
                                        style="width: {mobileCategoryColumnWidthRem(category)}rem; --category-color: {CATEGORY_COLORS[category.kind]};"
                                    >
                                        <span class="category-swatch" aria-hidden="true"></span>
                                        <span class="category-name">{kindLabels[category.kind]}</span>
                                    </div>
                                {/each}
                            </div>
                        </div>

                        <div class="mobile-body-row">
                            <div
                                class="mobile-y-axis"
                                style="height: {mobilePlotHeight}rem"
                                aria-hidden="true"
                            >
                                {#each mobileLayout.ticks as tick}
                                    <span class="mobile-year-tick" style={mobileTickStyle(tick.month)}>
                                        {tick.label}
                                    </span>
                                {/each}
                            </div>

                            <div
                                class="mobile-plot-grid"
                                style="width: {mobilePlotWidth}rem; height: {mobilePlotHeight}rem"
                            >
                                {#each mobileLayout.ticks as tick}
                                    <div class="mobile-grid-line" style={mobileTickStyle(tick.month)}></div>
                                {/each}

                                {#each mobileCategoryLayouts as category (category.kind)}
                                    <div
                                        class="mobile-category-column"
                                        style="width: {mobileCategoryColumnWidthRem(category)}rem; --category-color: {CATEGORY_COLORS[category.kind]};"
                                        aria-label={kindLabels[category.kind]}
                                    >
                                        {#each category.lanes as lane, laneIndex (laneIndex)}
                                            {#each lane.items as item (item.id)}
                                                {@const style = mobileBarStyle(
                                                    item.startMonth,
                                                    item.endMonth,
                                                    laneIndex,
                                                    category.lanes.length
                                                )}
                                                {#if style}
                                                    <div
                                                        class="overlap-bar mobile-bar"
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
                                        {/each}
                                    </div>
                                {/each}
                            </div>
                        </div>
                    </div>
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
        --mobile-y-axis-width: 2.75rem;
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
        min-width: 0;
        width: 100%;
        max-width: 100%;
    }

    .plot-mobile {
        display: none;
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
        .plot-desktop {
            display: none;
        }

        .plot-mobile {
            display: block;
        }

        .timeline-nav {
            display: none;
        }

        .chart-body {
            width: 100%;
        }

        .mobile-scroll {
            overflow-x: auto;
            overflow-y: visible;
            -webkit-overflow-scrolling: touch;
            width: 100%;
            max-width: 100%;
        }

        .plot-mobile {
            overflow: visible;
        }

        .mobile-chart {
            min-width: 100%;
        }

        .mobile-header-row,
        .mobile-body-row {
            display: flex;
            align-items: stretch;
        }

        .mobile-y-spacer {
            flex: 0 0 var(--mobile-y-axis-width);
            position: sticky;
            left: 0;
            z-index: 3;
            background-color: var(--color-chrome);
        }

        .mobile-category-axis {
            display: flex;
            gap: var(--space-xs);
            flex: 0 0 auto;
            padding-bottom: var(--space-xs);
            border-bottom: 1px solid var(--color-chrome-border);
        }

        .mobile-category-header {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.35rem;
            flex: 0 0 auto;
            box-sizing: border-box;
            padding: 0 var(--space-xs);
            text-align: center;
        }

        .mobile-category-header .category-name {
            text-align: center;
            color: var(--category-color);
        }

        .mobile-y-axis {
            flex: 0 0 var(--mobile-y-axis-width);
            position: sticky;
            left: 0;
            z-index: 2;
            border-right: 1px solid var(--color-chrome-border);
            background-color: var(--color-chrome);
            overflow: hidden;
            box-sizing: border-box;
        }

        .mobile-year-tick {
            position: absolute;
            left: 0;
            right: 0;
            transform: translateY(-50%);
            font-size: 0.72rem;
            font-weight: 600;
            color: var(--color-dark);
            white-space: nowrap;
            line-height: 1;
            text-align: right;
            padding-right: 0.2rem;
            box-sizing: border-box;
            overflow: hidden;
            text-overflow: clip;
        }

        .mobile-plot-grid {
            position: relative;
            display: flex;
            gap: var(--space-xs);
            flex: 0 0 auto;
        }

        .mobile-grid-line {
            position: absolute;
            left: 0;
            right: 0;
            height: 0;
            border-top: 1px solid oklch(50% 0 0 / 0.12);
            pointer-events: none;
            z-index: 0;
        }

        .mobile-category-column {
            position: relative;
            flex: 0 0 auto;
            height: 100%;
            border-top: 3px solid var(--category-color);
            box-sizing: border-box;
            z-index: 1;
        }

        .mobile-bar {
            min-width: 0;
            min-height: 2.75rem;
            border-left-width: 1px;
            border-top-width: 3px;
            border-top-color: var(--bar-color);
            padding: var(--space-xs) calc(var(--space-xs) / 2);
        }

        .category-name {
            font-size: 0.65rem;
        }
    }

    :global(.cv-section--compact) .bar-role {
        font-size: 0.72rem;
    }
</style>
