import type { Education, WorkExperience } from '../types/cv.types';
import {
	currentMonthIndex,
	endCvDate,
	parseCvDate,
	type MonthIndex
} from './cv-dates';

export type CareerEntryKind = 'experience' | 'volunteer' | 'education';

/** Left-to-right preference when entries compete for the same lane. */
export const KIND_PRIORITY_ORDER: CareerEntryKind[] = ['experience', 'education', 'volunteer'];

/** Accent colours for career category rows on the timeline y-axis. */
export const CATEGORY_COLORS: Record<CareerEntryKind, string> = {
	experience: 'oklch(80% 0.16 75)',
	education: 'oklch(62% 0.16 250)',
	volunteer: 'oklch(65% 0.14 155)'
};

const KIND_PRIORITY: Record<CareerEntryKind, number> = {
	experience: 0,
	education: 1,
	volunteer: 2
};

export interface CareerTimelineEntry {
	kind: CareerEntryKind;
	id: string;
	title: string;
	subtitle: string;
	organization: string;
	url?: string;
	startDate: string;
	endDate?: string;
	startMonth: MonthIndex;
	endMonth: MonthIndex;
	lane: number;
	color: string;
}

export interface TimelineTick {
	/** January 1 of the year, when it falls inside the axis range. */
	month: MonthIndex;
	label: string;
	/** When the Jan tick sits on the axis max, the label extends right/down into the year. */
	align: 'start' | 'end';
}

export interface CareerTimelineLayout {
	items: CareerTimelineEntry[];
	laneCount: number;
	window: TimelineWindow;
	axisMinMonth: MonthIndex;
	axisMaxMonth: MonthIndex;
	/** Latest month shown for entries (present, or axis max when earlier). */
	displayMaxMonth: MonthIndex;
	/** Vertical (desktop) / horizontal (mobile) lines at each 1 January within the axis. */
	gridLines: MonthIndex[];
	ticks: TimelineTick[];
}

export interface TimelineWindow {
	index: number;
	minMonth: MonthIndex;
	maxMonth: MonthIndex;
}

export interface CareerTimelineLaneLayout {
	heightRem: number;
	items: CareerTimelineEntry[];
}

export interface CareerTimelineCategoryLayout {
	kind: CareerEntryKind;
	lanes: CareerTimelineLaneLayout[];
	heightRem: number;
}

const LANE_MIN_HEIGHT_REM = 11 / 6;
export const LANE_GAP_REM = 0.25;
const CATEGORY_GAP_REM = LANE_GAP_REM;
/** Extra height on non-first category rows (must match CareerTimeline.svelte). */
const CATEGORY_CHROME_REM = 0;
const TIME_SCALE_REM = 0.45;
const PLOT_PADDING_REM = 0.5;
export const MOBILE_LANE_WIDTH_REM = 5.5;
export const MOBILE_CATEGORY_MIN_WIDTH_REM = 6;
export const MOBILE_TIME_SCALE_REM = 0.55;
export const MOBILE_CATEGORY_GAP_REM = LANE_GAP_REM;
export const MOBILE_Y_AXIS_WIDTH_REM = 2.75;
export const MOBILE_AXIS_INSET_PERCENT = 2;
/** Present-side buffer (left on desktop, top on mobile) between category stripe and bars. */
export const PRESENT_BUFFER_PERCENT = 0.625;

export const TIMELINE_EARLIEST_YEAR = 1997;
export const TIMELINE_WINDOW_YEARS = 5;
export const TIMELINE_WINDOW_MONTHS = TIMELINE_WINDOW_YEARS * 12;
export const TIMELINE_EARLIEST_MONTH = TIMELINE_EARLIEST_YEAR * 12;

/** Fallback palette for organizations without a documented brand color. */
const ORG_COLORS = [
	'oklch(72% 0.14 75)',
	'oklch(68% 0.12 200)',
	'oklch(70% 0.13 145)',
	'oklch(74% 0.11 30)',
	'oklch(66% 0.12 280)',
	'oklch(72% 0.1 55)',
	'oklch(69% 0.11 320)',
	'oklch(71% 0.12 170)',
	'oklch(64% 0.11 220)',
	'oklch(76% 0.12 85)'
];

/**
 * Brand colors from each organization's public visual identity (websites, style guides, logos).
 * Keys are normalized organization names (lowercase).
 */
const ORGANIZATION_BRAND_COLORS: Record<string, string> = {
	// srib.no --primary-color (#b2d670)
	'studentradioen i bergen': 'oklch(83% 0.136 125)',
	// nordicusv.com site theme
	'nordic usv as': 'oklch(74% 0.136 221)',
	// Forsvaret heraldic standard, PMS 185
	forsvaret: 'oklch(58% 0.234 24)',
	'norwegian armed forces': 'oklch(58% 0.234 24)',
	// boskonf.no accent
	'bergen open source': 'oklch(83% 0.158 173)',
	// aisafety.no/css/base/variables.css --color-accent (#0d9488)
	'ai safety bergen': 'oklch(60% 0.104 185)',
	// hulen.no signature yellow posters
	'hulen bergen': 'oklch(87% 0.179 92)',
	// fribyte.no maroon
	fribyte: 'oklch(38% 0.155 29)',
	// kvarteret.no --primary-color (#f54b4b)
	'det akademiske kvarter': 'oklch(65% 0.207 25)',
	// phonofestivalen.no archived link accent rgb(192, 80, 77) (#c0504d)
	phonofestivalen: 'oklch(58% 0.145 24)',
	// kvarteret.no / samfunnetibergen.no merged identity
	'studentersamfunnet i bergen': 'oklch(65% 0.207 25)',
	// uib.no brand guide main blue (#00417d)
	'universitetet i bergen': 'oklch(38% 0.117 253)',
	'university of bergen': 'oklch(38% 0.117 253)'
};

function normalizeOrganization(name: string): string {
	return name.trim().toLowerCase();
}

interface CareerTimelineSource {
	kind: CareerEntryKind;
	id: string;
	title: string;
	subtitle: string;
	organization: string;
	url?: string;
	startDate: string;
	endDate?: string;
}

function overlaps(startA: MonthIndex, endA: MonthIndex, startB: MonthIndex, endB: MonthIndex): boolean {
	return startA <= endB && startB <= endA;
}

function organizationColor(organization: string, palette: Map<string, string>): string {
	const existing = palette.get(organization);
	if (existing) return existing;

	const brandColor = ORGANIZATION_BRAND_COLORS[normalizeOrganization(organization)];
	const color = brandColor ?? ORG_COLORS[palette.size % ORG_COLORS.length];
	palette.set(organization, color);
	return color;
}

function buildJanuaryGridLines(axisMinMonth: MonthIndex, axisMaxMonth: MonthIndex): MonthIndex[] {
	const lines: MonthIndex[] = [];
	const startYear = Math.floor(axisMinMonth / 12);
	const endYear = Math.floor(axisMaxMonth / 12);

	for (let year = startYear; year <= endYear; year++) {
		const january = parseCvDate(`${year}-01`);
		if (january >= axisMinMonth && january <= axisMaxMonth) {
			lines.push(january);
		}
	}

	return lines;
}

function buildRangeTicks(axisMinMonth: MonthIndex, axisMaxMonth: MonthIndex): TimelineTick[] {
	return buildJanuaryGridLines(axisMinMonth, axisMaxMonth).map((month) => ({
		month,
		label: String(Math.floor(month / 12)),
		// Newer time is to the left on the axis; most year labels extend left into their year.
		align: month >= axisMaxMonth ? ('start' as const) : ('end' as const)
	}));
}

export function buildTimelineWindows(
	presentMonth: MonthIndex = currentMonthIndex(),
	earliestMonth: MonthIndex = TIMELINE_EARLIEST_MONTH
): TimelineWindow[] {
	const windows: TimelineWindow[] = [];
	let maxMonth = presentMonth;

	while (maxMonth > earliestMonth) {
		let minMonth = maxMonth - TIMELINE_WINDOW_MONTHS;
		if (minMonth < earliestMonth) {
			minMonth = earliestMonth;
		}

		windows.push({ index: windows.length, minMonth, maxMonth });

		if (minMonth <= earliestMonth) break;
		maxMonth = minMonth;
	}

	return windows;
}

function timelineAxisRange(
	window: TimelineWindow,
	presentMonth: MonthIndex
): { axisMinMonth: MonthIndex; axisMaxMonth: MonthIndex; displayMaxMonth: MonthIndex } {
	const axisMinMonth = window.minMonth;
	const axisMaxMonth = window.minMonth + TIMELINE_WINDOW_MONTHS;
	const displayMaxMonth = Math.min(axisMaxMonth, presentMonth);
	return { axisMinMonth, axisMaxMonth, displayMaxMonth };
}

function entryOverlapsAxisRange(
	startMonth: MonthIndex,
	endMonth: MonthIndex,
	axisMinMonth: MonthIndex,
	displayMaxMonth: MonthIndex
): boolean {
	return overlaps(startMonth, endMonth, axisMinMonth, displayMaxMonth);
}

export function formatWindowLabel(
	window: TimelineWindow,
	presentMonth: MonthIndex = currentMonthIndex()
): string {
	const minYear = Math.floor(window.minMonth / 12);
	const { displayMaxMonth } = timelineAxisRange(window, presentMonth);
	const maxYear = Math.floor(displayMaxMonth / 12);
	return `${maxYear} – ${minYear}`;
}

function workSource(entry: WorkExperience, kind: CareerEntryKind): CareerTimelineSource {
	return {
		kind,
		id: `${kind}-${entry.company}-${entry.role}-${entry.startDate}`,
		title: entry.role,
		subtitle: entry.company,
		organization: entry.company,
		url: entry.companyUrl,
		startDate: entry.startDate,
		endDate: entry.endDate
	};
}

function educationSource(entry: Education): CareerTimelineSource {
	return {
		kind: 'education',
		id: `education-${entry.institution}-${entry.field}-${entry.startDate}`,
		title: entry.field,
		subtitle: `${entry.degree}, ${entry.institution}`,
		organization: entry.institution,
		startDate: entry.startDate,
		endDate: entry.endDate
	};
}

function assignLanes(
	sources: CareerTimelineSource[],
	presentMonth: MonthIndex,
	palette: Map<string, string>
): { items: CareerTimelineEntry[]; laneCount: number } {
	const sorted = [...sources].sort((a, b) => {
		const startDiff = parseCvDate(a.startDate) - parseCvDate(b.startDate);
		if (startDiff !== 0) return startDiff;

		const kindDiff = KIND_PRIORITY[a.kind] - KIND_PRIORITY[b.kind];
		if (kindDiff !== 0) return kindDiff;

		return endCvDate(a.endDate, presentMonth) - endCvDate(b.endDate, presentMonth);
	});

	const lanes: { start: MonthIndex; end: MonthIndex }[][] = [];
	const items: CareerTimelineEntry[] = [];

	for (const source of sorted) {
		const startMonth = parseCvDate(source.startDate);
		const endMonth = endCvDate(source.endDate, presentMonth);

		let lane = lanes.findIndex((laneRanges) =>
			laneRanges.every((range) => !overlaps(startMonth, endMonth, range.start, range.end))
		);
		if (lane === -1) {
			lane = lanes.length;
			lanes.push([]);
		}
		lanes[lane].push({ start: startMonth, end: endMonth });

		items.push({
			...source,
			startMonth,
			endMonth,
			lane,
			color: organizationColor(source.organization, palette)
		});
	}

	return {
		items,
		laneCount: Math.max(lanes.length, 1)
	};
}

export function buildCareerTimeline(
	experience: WorkExperience[],
	volunteer: WorkExperience[],
	education: Education[],
	window: TimelineWindow,
	presentMonth: MonthIndex = currentMonthIndex()
): CareerTimelineLayout {
	const palette = new Map<string, string>();

	const allSources: CareerTimelineSource[] = [
		...experience.map((entry) => workSource(entry, 'experience')),
		...education.map(educationSource),
		...volunteer.map((entry) => workSource(entry, 'volunteer'))
	];

	for (const source of allSources) {
		organizationColor(source.organization, palette);
	}

	const { axisMinMonth, axisMaxMonth, displayMaxMonth } = timelineAxisRange(window, presentMonth);

	const sources = allSources.filter((source) => {
		const startMonth = parseCvDate(source.startDate);
		const endMonth = endCvDate(source.endDate, presentMonth);
		return entryOverlapsAxisRange(startMonth, endMonth, axisMinMonth, displayMaxMonth);
	});

	const items: CareerTimelineEntry[] = [];
	for (const kind of KIND_PRIORITY_ORDER) {
		const kindSources = sources.filter((source) => source.kind === kind);
		const { items: kindItems } = assignLanes(kindSources, presentMonth, palette);
		items.push(...kindItems);
	}

	const gridLines = buildJanuaryGridLines(axisMinMonth, axisMaxMonth);

	return {
		items,
		laneCount: items.length > 0 ? Math.max(...items.map((item) => item.lane)) + 1 : 1,
		window,
		axisMinMonth,
		axisMaxMonth,
		displayMaxMonth,
		gridLines,
		ticks: buildRangeTicks(axisMinMonth, axisMaxMonth)
	};
}

export function earliestCareerMonth(
	experience: WorkExperience[],
	volunteer: WorkExperience[],
	education: Education[],
	presentMonth: MonthIndex = currentMonthIndex()
): MonthIndex {
	const allSources: CareerTimelineSource[] = [
		...experience.map((entry) => workSource(entry, 'experience')),
		...education.map(educationSource),
		...volunteer.map((entry) => workSource(entry, 'volunteer'))
	];

	if (allSources.length === 0) return presentMonth;

	let earliest = presentMonth;
	for (const source of allSources) {
		earliest = Math.min(earliest, parseCvDate(source.startDate));
	}

	return Math.floor(earliest / 12) * 12;
}

export function buildMobileCareerTimeline(
	experience: WorkExperience[],
	volunteer: WorkExperience[],
	education: Education[],
	presentMonth: MonthIndex = currentMonthIndex()
): CareerTimelineLayout {
	const palette = new Map<string, string>();
	const minMonth = earliestCareerMonth(experience, volunteer, education, presentMonth);
	const window: TimelineWindow = { index: 0, minMonth, maxMonth: presentMonth };

	const allSources: CareerTimelineSource[] = [
		...experience.map((entry) => workSource(entry, 'experience')),
		...education.map(educationSource),
		...volunteer.map((entry) => workSource(entry, 'volunteer'))
	];

	for (const source of allSources) {
		organizationColor(source.organization, palette);
	}

	const axisMinMonth = minMonth;
	const axisMaxMonth = presentMonth;

	const sources = allSources.filter((source) => {
		const startMonth = parseCvDate(source.startDate);
		const endMonth = endCvDate(source.endDate, presentMonth);
		return entryOverlapsAxisRange(startMonth, endMonth, axisMinMonth, axisMaxMonth);
	});

	const items: CareerTimelineEntry[] = [];
	for (const kind of KIND_PRIORITY_ORDER) {
		const kindSources = sources.filter((source) => source.kind === kind);
		const { items: kindItems } = assignLanes(kindSources, presentMonth, palette);
		items.push(...kindItems);
	}

	const gridLines = buildJanuaryGridLines(axisMinMonth, axisMaxMonth);

	return {
		items,
		laneCount: items.length > 0 ? Math.max(...items.map((item) => item.lane)) + 1 : 1,
		window,
		axisMinMonth,
		axisMaxMonth,
		displayMaxMonth: axisMaxMonth,
		gridLines,
		ticks: buildRangeTicks(axisMinMonth, axisMaxMonth)
	};
}

function blockContentHeightRem(item: CareerTimelineEntry): number {
	const labelChars = Math.max(item.organization.length, item.title.length);
	return Math.max(LANE_MIN_HEIGHT_REM, labelChars * 0.14);
}

function buildLaneLayoutsForItems(items: CareerTimelineEntry[]): CareerTimelineLaneLayout[] {
	if (items.length === 0) return [];

	const laneCount = Math.max(...items.map((item) => item.lane)) + 1;
	return Array.from({ length: laneCount }, (_, lane) => {
		const laneItems = items.filter((item) => item.lane === lane);
		const heightRem =
			laneItems.length === 0
				? LANE_MIN_HEIGHT_REM
				: Math.max(...laneItems.map(blockContentHeightRem));

		return { heightRem, items: laneItems };
	}).filter((lane) => lane.items.length > 0);
}

export function buildCategoryLayouts(layout: CareerTimelineLayout): CareerTimelineCategoryLayout[] {
	const categories: CareerTimelineCategoryLayout[] = [];

	for (const kind of KIND_PRIORITY_ORDER) {
		const kindItems = layout.items.filter((item) => item.kind === kind);
		if (kindItems.length === 0) continue;

		const lanes = buildLaneLayoutsForItems(kindItems);
		const laneHeightRem = plotHeightRem(lanes);
		const chromeRem = categories.length > 0 ? CATEGORY_CHROME_REM : 0;
		categories.push({ kind, lanes, heightRem: laneHeightRem + chromeRem });
	}

	return categories;
}

export function plotCategoryHeightRem(categories: CareerTimelineCategoryLayout[]): number {
	return (
		categories.reduce((sum, category) => sum + category.heightRem, 0) +
		Math.max(categories.length - 1, 0) * CATEGORY_GAP_REM
	);
}

export function plotTimeWidthRem(): number {
	return TIMELINE_WINDOW_MONTHS * TIME_SCALE_REM + PLOT_PADDING_REM;
}

export function monthPositionPadded(
	month: MonthIndex,
	minMonth: MonthIndex,
	maxMonth: MonthIndex,
	insetPercent: number = MOBILE_AXIS_INSET_PERCENT
): number {
	const span = Math.max(maxMonth - minMonth, 1);
	const raw = ((maxMonth - month) / span) * 100;
	const scale = (100 - insetPercent * 2) / 100;
	return insetPercent + raw * scale;
}

const MIN_BAR_SPAN_PERCENT = 2.5;

/** When min bar size applies, grow toward newer time unless that would cross the present buffer. */
function clampBarSpan(
	newerEdge: number,
	olderEdge: number,
	minSpan: number = MIN_BAR_SPAN_PERCENT,
	bufferEdge: number = PRESENT_BUFFER_PERCENT
): { newerEdge: number; olderEdge: number; span: number } {
	const clampedNewer = Math.max(bufferEdge, newerEdge);
	const naturalSpan = olderEdge - clampedNewer;

	if (naturalSpan >= minSpan) {
		return { newerEdge: clampedNewer, olderEdge, span: naturalSpan };
	}

	const deficit = minSpan - naturalSpan;
	const expandNewer = clampedNewer - deficit;

	if (expandNewer >= bufferEdge) {
		return { newerEdge: expandNewer, olderEdge, span: minSpan };
	}

	// At the buffer edge: grow toward older time instead of into the stripe zone.
	const expandOlder = clampedNewer + minSpan;
	return { newerEdge: clampedNewer, olderEdge: expandOlder, span: expandOlder - clampedNewer };
}
export function clippedBarPositionVertical(
	startMonth: MonthIndex,
	endMonth: MonthIndex,
	axisMinMonth: MonthIndex,
	axisMaxMonth: MonthIndex,
	displayMaxMonth: MonthIndex,
	padded = false
): { top: number; height: number } | null {
	const visibleStart = Math.max(startMonth, axisMinMonth);
	const visibleEndInclusive = Math.min(endMonth, displayMaxMonth);
	if (visibleStart > visibleEndInclusive) return null;

	// CV end dates are the last full month engaged; +1 is the exclusive boundary for bar extent.
	const visibleEndExclusive = visibleEndInclusive + 1;

	const position = padded ? monthPositionWithPresentBuffer : monthPosition;
	const newerEdge = position(visibleEndExclusive, axisMinMonth, axisMaxMonth);
	const olderEdge = position(visibleStart, axisMinMonth, axisMaxMonth);
	const { newerEdge: top, span: height } = clampBarSpan(newerEdge, olderEdge);
	return { top, height };
}

export function mobileLaneOffset(
	laneIndex: number,
	laneCount: number
): { left: number; width: number } {
	const width = 100 / laneCount;
	return { left: laneIndex * width, width };
}

export function mobilePlotHeightRem(axisMinMonth: MonthIndex, axisMaxMonth: MonthIndex): number {
	const monthSpan = Math.max(axisMaxMonth - axisMinMonth, 1);
	return monthSpan * MOBILE_TIME_SCALE_REM + PLOT_PADDING_REM;
}

export function mobileCategoryColumnWidthRem(category: CareerTimelineCategoryLayout): number {
	const laneCount = Math.max(category.lanes.length, 1);
	return Math.max(MOBILE_CATEGORY_MIN_WIDTH_REM, laneCount * MOBILE_LANE_WIDTH_REM);
}

export function mobilePlotWidthRem(categories: CareerTimelineCategoryLayout[]): number {
	if (categories.length === 0) return MOBILE_CATEGORY_MIN_WIDTH_REM;

	return (
		categories.reduce((sum, category) => sum + mobileCategoryColumnWidthRem(category), 0) +
		Math.max(categories.length - 1, 0) * MOBILE_CATEGORY_GAP_REM
	);
}

export function clippedBarPosition(
	startMonth: MonthIndex,
	endMonth: MonthIndex,
	axisMinMonth: MonthIndex,
	axisMaxMonth: MonthIndex,
	displayMaxMonth: MonthIndex
): { left: number; width: number } | null {
	const visibleStart = Math.max(startMonth, axisMinMonth);
	const visibleEndInclusive = Math.min(endMonth, displayMaxMonth);
	if (visibleStart > visibleEndInclusive) return null;

	// CV end dates are the last full month engaged; +1 is the exclusive boundary for bar extent.
	const visibleEndExclusive = visibleEndInclusive + 1;

	const newerEdge = monthPositionWithPresentBuffer(visibleEndExclusive, axisMinMonth, axisMaxMonth);
	const olderEdge = monthPositionWithPresentBuffer(visibleStart, axisMinMonth, axisMaxMonth);
	const { newerEdge: left, span: width } = clampBarSpan(newerEdge, olderEdge);
	return { left, width };
}

export function plotHeightRem(lanes: CareerTimelineLaneLayout[]): number {
	return (
		lanes.reduce((sum, lane) => sum + lane.heightRem, 0) +
		Math.max(lanes.length - 1, 0) * LANE_GAP_REM
	);
}

export function monthPosition(month: MonthIndex, minMonth: MonthIndex, maxMonth: MonthIndex): number {
	const span = Math.max(maxMonth - minMonth, 1);
	return ((maxMonth - month) / span) * 100;
}

/** Horizontal axis: present (left) ends at the buffer, older months extend right. */
export function monthPositionWithPresentBuffer(
	month: MonthIndex,
	minMonth: MonthIndex,
	maxMonth: MonthIndex,
	bufferPercent: number = PRESENT_BUFFER_PERCENT
): number {
	const span = Math.max(maxMonth - minMonth, 1);
	const raw = ((maxMonth - month) / span) * 100;
	const scale = (100 - bufferPercent) / 100;
	return Math.max(bufferPercent, bufferPercent + raw * scale);
}
