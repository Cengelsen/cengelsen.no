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

export interface CareerTimelineLayout {
	items: CareerTimelineEntry[];
	laneCount: number;
	window: TimelineWindow;
	axisMinMonth: MonthIndex;
	axisMaxMonth: MonthIndex;
	ticks: { month: MonthIndex; label: string }[];
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
const LANE_GAP_REM = 0.25;
const CATEGORY_GAP_REM = 0.5;
/** padding-top + border-top on non-first category rows (must match CareerTimeline.svelte). */
const CATEGORY_CHROME_REM = 0.15 + 1 / 16;
const TIME_SCALE_REM = 0.45;
const PLOT_PADDING_REM = 0.5;

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

function buildWindowTicks(axisMinMonth: MonthIndex): { month: MonthIndex; label: string }[] {
	const ticks: { month: MonthIndex; label: string }[] = [];
	const startYear = Math.floor(axisMinMonth / 12);
	const endYear = Math.floor((axisMinMonth + TIMELINE_WINDOW_MONTHS) / 12);

	for (let year = startYear; year <= endYear; year++) {
		ticks.push({ month: year * 12, label: String(year) });
	}

	return ticks;
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

export function formatWindowLabel(window: TimelineWindow): string {
	const minYear = Math.floor(window.minMonth / 12);
	const maxYear = Math.floor(window.maxMonth / 12);
	return `${maxYear} – ${minYear}`;
}

function entryOverlapsWindow(
	startMonth: MonthIndex,
	endMonth: MonthIndex,
	window: TimelineWindow
): boolean {
	return overlaps(startMonth, endMonth, window.minMonth, window.maxMonth);
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

	const sources = allSources.filter((source) => {
		const startMonth = parseCvDate(source.startDate);
		const endMonth = endCvDate(source.endDate, presentMonth);
		return entryOverlapsWindow(startMonth, endMonth, window);
	});

	const items: CareerTimelineEntry[] = [];
	for (const kind of KIND_PRIORITY_ORDER) {
		const kindSources = sources.filter((source) => source.kind === kind);
		const { items: kindItems } = assignLanes(kindSources, presentMonth, palette);
		items.push(...kindItems);
	}

	const axisMinMonth = window.minMonth;
	const axisMaxMonth = window.minMonth + TIMELINE_WINDOW_MONTHS;

	return {
		items,
		laneCount: items.length > 0 ? Math.max(...items.map((item) => item.lane)) + 1 : 1,
		window,
		axisMinMonth,
		axisMaxMonth,
		ticks: buildWindowTicks(axisMinMonth)
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

export function clippedBarPosition(
	startMonth: MonthIndex,
	endMonth: MonthIndex,
	window: TimelineWindow,
	axisMinMonth: MonthIndex,
	axisMaxMonth: MonthIndex
): { left: number; width: number } | null {
	const visibleStart = Math.max(startMonth, window.minMonth);
	const visibleEnd = Math.min(endMonth, window.maxMonth);
	if (visibleStart > visibleEnd) return null;

	const left = monthPosition(visibleEnd, axisMinMonth, axisMaxMonth);
	const right = monthPosition(visibleStart, axisMinMonth, axisMaxMonth);
	return { left, width: Math.max(right - left, 2.5) };
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
