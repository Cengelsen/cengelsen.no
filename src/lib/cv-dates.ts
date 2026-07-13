/** Month index where 0 = Jan 2000 (i.e. year * 12 + month - 1). */
export type MonthIndex = number;

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
