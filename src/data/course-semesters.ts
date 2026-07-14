import type { Lang } from '../lib/posts';

/** UiB semester codes when each course was passed (H = autumn, V = spring). */
export const courseSemestersByCode: Record<string, string> = {
	AIKI100: 'H22',
	AIKI110: 'V23',
	AIKI210: 'H23',
	DASPSTAT: 'H19',
	EXFAC00SK: 'H19',
	'EXPHIL-MNSEM': 'H18',
	FIL105: 'V22',
	INF100: 'H18',
	INF101: 'V21',
	INF122: 'H23',
	INF218: 'H24',
	INF319: 'H23',
	INFO102: 'V29',
	INFO104: 'V23',
	INFO125: 'H20',
	INFO135: 'V23',
	INFO180: 'H20',
	INFO381: 'V25',
	INFO282: 'H19',
	INFO283: 'H19',
	INFO284: 'V21',
	INFO361: 'H24',
	INFO371: 'V25',
	INFO382: 'H24',
	INFO390: 'V26',
	KOGVIT101: 'H18',
	LING122: 'H19',
	LOG110: 'V19',
	LOG111: 'V19',
	MCB201: 'V20',
	PSYK120: 'V20'
};

const SEMESTER_CODE_PATTERN = /^([HV])(\d{2})$/;

/** H23 → H23 (no) or Autumn 2023 (en); V23 → V23 (no) or Spring 2023 (en). */
export function formatCourseSemester(code: string, lang: Lang): string {
	const match = code.match(SEMESTER_CODE_PATTERN);
	if (!match) return code;

	const [, season, yearSuffix] = match;
	const year = 2000 + Number(yearSuffix);

	if (lang === 'no') return code;

	return season === 'H' ? `Autumn ${year}` : `Spring ${year}`;
}
