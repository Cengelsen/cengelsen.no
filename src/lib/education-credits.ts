import { courseCreditsByCode } from '../data/course-credits';
import type { Coursework, CvData, Education } from '../types/cv.types';
import type { Lang } from './posts';

export function educationDegreeKey(degree: string, field: string, lang: Lang): string {
	if (lang === 'no') {
		return `${degree} i ${field.toLowerCase()}`;
	}

	return `${degree.replace(/'s Degree$/, "'s in")} ${field}`;
}

export function enrichCoursework(coursework: Coursework[]): Coursework[] {
	return coursework.map((course) => ({
		...course,
		credits: course.credits ?? courseCreditsByCode[course.code] ?? 0
	}));
}

export function coursesForDegree(coursework: Coursework[], degreeKey: string): Coursework[] {
	return coursework.filter((course) => course.degrees.includes(degreeKey));
}

export function sumCourseCredits(courses: Coursework[]): number {
	const replacedCodes = new Set(
		courses.filter((course) => course.replaces).map((course) => course.replaces!)
	);

	return courses
		.filter((course) => !replacedCodes.has(course.code))
		.reduce((sum, course) => sum + (course.credits ?? 0), 0);
}

export function computeDegreeCredits(coursework: Coursework[], degreeKey: string): number {
	return sumCourseCredits(coursesForDegree(coursework, degreeKey));
}

export function enrichEducation(
	education: Education[],
	coursework: Coursework[],
	lang: Lang
): Education[] {
	return education.map((entry) => ({
		...entry,
		credits: computeDegreeCredits(coursework, educationDegreeKey(entry.degree, entry.field, lang))
	}));
}

export function prepareCv(cv: CvData, lang: Lang): CvData {
	const coursework = enrichCoursework(cv.coursework);
	const education = enrichEducation(cv.education, coursework, lang);

	return {
		...cv,
		coursework,
		education
	};
}
