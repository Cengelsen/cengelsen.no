import { execSync } from 'child_process';
import { mkdirSync, writeFileSync, rmSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

import { cvData } from '../src/data/cv.ts';
import { cvProfiles, PROFILE_SLUGS } from '../src/data/cv-profiles.ts';
import { translations } from '../src/i18n/translations.ts';
import { prepareCv, computeDegreeCredits, sumCourseCredits } from '../src/lib/education-credits.ts';
import { groupCourseworkByDegree, groupCoursesByType, getStandaloneCourses } from '../src/lib/coursework.ts';
import { formatCourseSemester } from '../src/data/course-semesters.ts';
import type { Lang } from '../src/lib/posts.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, '..');
const STATIC_PDF_DIR = resolve(ROOT, 'static', 'pdf');
const TEMPLATE_PATH = resolve(__dirname, 'cv-template.typ');
const DATA_FILE = resolve(__dirname, '_cv-data.json');

const CV_NAME = 'Christian Kårbø Engelsen';

const ACCENT_HEX: Record<string, string> = {
	'oklch(55% 0.2 250)': '#2563eb',
	'oklch(50% 0.14 165)': '#2d7a6a',
	'oklch(35% 0.10 260)': '#1e3a5f',
	'oklch(65% 0.18 50)': '#c27832',
	'oklch(80% 0.16 75)': '#b89530'
};

const DEFAULT_ACCENT = 'oklch(80% 0.16 75)';
const DEFAULT_SECTIONS = [
	'qualities',
	'experience',
	'volunteer',
	'education',
	'coursework',
	'skills',
	'languages',
	'certificates',
	'projects',
	'contact'
];

function toHex(oklch: string): string {
	return ACCENT_HEX[oklch] ?? '#555555';
}

function filterByProfile<T extends { profiles?: string[] }>(
	entries: T[],
	profileId: string
): T[] {
	return entries.filter((e) => !e.profiles || e.profiles.includes(profileId));
}

interface SimpleCourse {
	name: string;
	code: string;
	credits: number | null;
	semester: string | null;
	description: string;
	skillTags: string[];
	replaces: string | null;
}

function simpleCourse(
	c: import('../src/types/cv.types.ts').Coursework,
	lang: Lang
): SimpleCourse {
	return {
		name: c.name,
		code: c.code,
		credits: c.credits && c.credits > 0 ? c.credits : null,
		semester: c.semester ? formatCourseSemester(c.semester, lang) : null,
		description: c.description,
		skillTags: c.skillTags || [],
		replaces: c.replaces || null
	};
}

function processCoursework(
	coursework: import('../src/types/cv.types.ts').Coursework[],
	typeLabels: Record<string, string>,
	lang: Lang
) {
	const grouped = groupCourseworkByDegree(coursework);
	const replacedByMap = coursework.reduce<Record<string, import('../src/types/cv.types.ts').Coursework>>(
		(acc, entry) => {
			if (entry.replaces) acc[entry.replaces] = entry;
			return acc;
		},
		{}
	);

	const groups = Object.entries(grouped).map(([degree, { primary, overlap }]) => ({
		degree,
		credits: computeDegreeCredits(coursework, degree),
		overlap: overlap.map((course) => ({
			name: course.name,
			code: course.semester
				? `${course.code} · ${formatCourseSemester(course.semester, lang)}`
				: course.code,
			credits: course.credits ?? null
		})),
		typeGroups: groupCoursesByType(primary, degree).map(({ type, courses: typedCourses }) => ({
			type,
			typeLabel: type ? typeLabels[type] || type : '',
			courses: typedCourses.map((course) => simpleCourse(course, lang))
		}))
	}));

	const replacedCourses = getStandaloneCourses(coursework).map((course) => ({
		name: course.name,
		code: course.semester
			? `${course.code} · ${formatCourseSemester(course.semester, lang)}`
			: course.code,
		credits: course.credits ?? null,
		replacedBy: replacedByMap[course.code]?.code ?? null
	}));

	return { groups, replacedCourses };
}

function main() {
	try {
		execSync('typst --version', { stdio: 'pipe' });
	} catch {
		console.error(
			'Error: typst is not installed.\nInstall it: https://typst.app/docs/guides/install/'
		);
		process.exit(1);
	}

	mkdirSync(STATIC_PDF_DIR, { recursive: true });

	const langs = ['no', 'en'] as const;
	const profileIds = ['all', ...PROFILE_SLUGS] as const;
	let count = 0;

	for (const lang of langs) {
		const t = translations[lang];
		const cv = prepareCv(cvData[lang], lang);
		const typeLabels: Record<string, string> = {
			mandatory: t.cv.courseMandatory,
			specialization: t.cv.courseSpecialization,
			elective: t.cv.courseElective
		};

		for (const profileId of profileIds) {
			const isAll = profileId === 'all';
			const profile = isAll ? null : cvProfiles[lang][profileId];

			const filtered = isAll
				? cv
				: {
						summary: cv.summary,
						experience: filterByProfile(cv.experience, profileId),
						volunteer: filterByProfile(cv.volunteer, profileId),
						education: filterByProfile(cv.education, profileId),
						coursework: cv.coursework,
						skills: filterByProfile(cv.skills, profileId),
						languages: cv.languages,
						certificates: filterByProfile(cv.certificates, profileId),
						projects: filterByProfile(cv.projects, profileId),
						qualities: filterByProfile(cv.qualities, profileId),
						contact: cv.contact
					};

			const summary = profile ? profile.summary : cv.summary;
			const sections = profile ? profile.sections : DEFAULT_SECTIONS;
			const accentColor = profile ? toHex(profile.accentColor) : toHex(DEFAULT_ACCENT);

			const coursework = processCoursework(filtered.coursework, typeLabels, lang);

			const payload = {
				name: CV_NAME,
				accentColor,
				profileId,
				summary,
				sections,
				labels: {
					experience: t.cv.experience,
					volunteer: t.cv.volunteer,
					education: t.cv.education,
					educationCreditsUnit: t.cv.educationCreditsUnit,
					courseCreditsLabel: t.cv.courseCreditsLabel,
					coursework: t.cv.coursework,
					skills: t.cv.skills,
					languages: t.cv.languages,
					certificates: t.cv.certificates,
					projects: t.cv.projects,
					qualities: t.cv.qualities,
					contact: t.cv.contact,
					present: t.cv.present,
					courseReplaces: t.cv.courseReplaces,
					courseReplacedBy: t.cv.courseReplacedBy,
					courseOverlap: t.cv.courseOverlap,
					courseReplacedSection: t.cv.courseReplacedSection,
					courseCreditsTotal: t.cv.courseCreditsTotal,
					viewCredential: t.cv.viewCredential,
					viewProject: t.cv.viewProject,
					liveDemo: t.cv.liveDemo
				},
				experience: filtered.experience.map((e) => ({
					role: e.role,
					company: e.company,
					startDate: e.startDate,
					endDate: e.endDate || null,
					description: e.description,
					skillTags: e.skillTags || []
				})),
				volunteer: filtered.volunteer.map((e) => ({
					role: e.role,
					company: e.company,
					startDate: e.startDate,
					endDate: e.endDate || null,
					description: e.description,
					skillTags: e.skillTags || []
				})),
				education: filtered.education.map((e) => ({
					degree: e.degree,
					field: e.field,
					institution: e.institution,
					credits: e.credits ?? null,
					startDate: e.startDate,
					endDate: e.endDate || null,
					description: e.description || null
				})),
				courseworkGroups: coursework.groups,
				courseworkReplaced: coursework.replacedCourses,
				courseworkTotalCredits: sumCourseCredits(filtered.coursework),
				skills: filtered.skills.map((s) => ({
					category: s.category,
					skills: s.skills
				})),
				languages: filtered.languages,
				certificates: filtered.certificates.map((c) => ({
					name: c.name,
					issuer: c.issuer,
					date: c.date,
					credentialUrl: c.credentialUrl || null
				})),
				projects: filtered.projects.map((p) => ({
					name: p.name,
					description: p.description,
					techStack: p.techStack,
					githubUrl: p.githubUrl || null,
					liveUrl: p.liveUrl || null,
					skillTags: p.skillTags || []
				})),
				qualities: filtered.qualities.map((q) => ({
					name: q.name,
					description: q.description
				})),
				contact: filtered.contact
			};

			writeFileSync(DATA_FILE, JSON.stringify(payload, null, 2));

			const outputFile = `cv-${profileId}-${lang}.pdf`;
			const outputPath = resolve(STATIC_PDF_DIR, outputFile);

			try {
				execSync(`typst compile "${TEMPLATE_PATH}" "${outputPath}"`, {
					cwd: ROOT,
					stdio: 'pipe'
				});
				console.log(`  ✓ ${outputFile}`);
				count++;
			} catch (err: unknown) {
				const msg =
					err instanceof Error && 'stderr' in err
						? (err as Error & { stderr: Buffer }).stderr?.toString()
						: (err as Error).message;
				console.error(`  ✗ ${outputFile}: ${msg}`);
			}
		}
	}

	if (existsSync(DATA_FILE)) rmSync(DATA_FILE);

	console.log(`\nGenerated ${count} PDFs in static/pdf/`);
}

main();
