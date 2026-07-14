import type { Coursework } from '../types/cv.types';

export interface DegreeCourseworkGroups {
	primary: Coursework[];
	overlap: Coursework[];
}

export function courseTypeForDegree(
	course: Coursework,
	degree: string
): Coursework['courseType'] {
	return course.courseTypesByDegree?.[degree] ?? course.courseType;
}

/** Primary courses are listed in full; overlap courses use the compact listing. */
export function groupCourseworkByDegree(
	coursework: Coursework[]
): Record<string, DegreeCourseworkGroups> {
	return coursework.reduce<Record<string, DegreeCourseworkGroups>>((acc, entry) => {
		if (entry.degrees.length === 0) return acc;

		const primaryDegree = entry.degrees[0];
		(acc[primaryDegree] ??= { primary: [], overlap: [] }).primary.push(entry);

		for (const degree of entry.degrees.slice(1)) {
			(acc[degree] ??= { primary: [], overlap: [] }).overlap.push(entry);
		}

		return acc;
	}, {});
}

export function getStandaloneCourses(coursework: Coursework[]): Coursework[] {
	return coursework.filter((entry) => entry.degrees.length === 0);
}

export function groupCoursesByType(
	courses: Coursework[],
	degree: string
): { type: string | null; courses: Coursework[] }[] {
	const typeOrder = ['mandatory', 'specialization', 'elective'] as const;
	const hasTypes = courses.some((course) => courseTypeForDegree(course, degree));

	if (!hasTypes) return [{ type: null, courses }];

	const groups: { type: string | null; courses: Coursework[] }[] = [];
	for (const type of typeOrder) {
		const matching = courses.filter((course) => courseTypeForDegree(course, degree) === type);
		if (matching.length > 0) groups.push({ type, courses: matching });
	}

	const untyped = courses.filter((course) => !courseTypeForDegree(course, degree));
	if (untyped.length > 0) groups.push({ type: null, courses: untyped });

	return groups;
}
