import type { Lang } from './posts';

/** Month index where 0 = Jan 2000 (i.e. year * 12 + month - 1). */
export type MonthIndex = number;

const CV_DATE_LOCALES: Record<Lang, string> = {
	en: 'en-GB',
	no: 'nb-NO'
};

export function parseCvDate(date: string): MonthIndex {
	const [yearPart, monthPart] = date.split('-');
	const year = Number(yearPart);
	const month = monthPart ? Number(monthPart) : 1;
	return year * 12 + (month - 1);
}

export function endCvDate(date: string | undefined, presentMonth: MonthIndex): MonthIndex {
	if (!date) return presentMonth;
	const [yearPart, monthPart] = date.split('-');
	const year = Number(yearPart);
	const month = monthPart ? Number(monthPart) : 12;
	return year * 12 + (month - 1);
}

export function formatCvMonth(monthIndex: MonthIndex): string {
	const year = Math.floor(monthIndex / 12);
	const month = (monthIndex % 12) + 1;
	return month === 1 ? String(year) : `${year}-${String(month).padStart(2, '0')}`;
}

export function currentMonthIndex(): MonthIndex {
	const now = new Date();
	return now.getFullYear() * 12 + now.getMonth();
}

export function formatCvDateDisplay(date: string, lang: Lang = 'no'): string {
	const [yearPart, monthPart] = date.split('-');
	const year = Number(yearPart);
	if (!monthPart) return String(year);

	const month = Number(monthPart);
	return new Intl.DateTimeFormat(CV_DATE_LOCALES[lang], {
		month: 'long',
		year: 'numeric'
	}).format(new Date(year, month - 1, 1));
}

export function formatCvRange(
	startDate: string,
	endDate: string | undefined,
	presentLabel: string,
	lang: Lang = 'no'
): string {
	const start = formatCvDateDisplay(startDate, lang);
	if (!endDate) return `${start} — ${presentLabel}`;
	return `${start} — ${formatCvDateDisplay(endDate, lang)}`;
}
