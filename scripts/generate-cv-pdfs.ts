import { execSync } from 'child_process';
import { mkdirSync, writeFileSync, rmSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

import { cvData } from '../src/data/cv.ts';
import { cvProfiles, PROFILE_SLUGS } from '../src/data/cv-profiles.ts';
import { translations } from '../src/i18n/translations.ts';

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
	description: string;
	skillTags: string[];
	replaces: string | null;
}

function simpleCourse(c: Record<string, unknown>): SimpleCourse {
	return {
		name: c.name as string,
		code: c.code as string,
		description: c.description as string,
		skillTags: (c.skillTags as string[]) || [],
		replaces: (c.replaces as string) || null
	};
}

function processCoursework(
	coursework: Record<string, unknown>[],
	typeLabels: Record<string, string>
) {
	const grouped: Record<string, { primary: Record<string, unknown>[]; overlap: Record<string, unknown>[] }> = {};

	for (const entry of coursework) {
		const degrees = entry.degrees as string[];
		const primary = degrees[0];
		if (!grouped[primary]) grouped[primary] = { primary: [], overlap: [] };
		grouped[primary].primary.push(entry);

		for (const deg of degrees.slice(1)) {
			if (!grouped[deg]) grouped[deg] = { primary: [], overlap: [] };
			grouped[deg].overlap.push(entry);
		}
	}

	const typeOrder = ['mandatory', 'specialization', 'elective'];

	return Object.entries(grouped).map(([degree, { primary, overlap }]) => {
		const typeGroups: { type: string | null; typeLabel: string; courses: SimpleCourse[] }[] = [];
		const hasTypes = primary.some((c) => c.courseType);

		if (hasTypes) {
			for (const t of typeOrder) {
				const matching = primary.filter((c) => c.courseType === t);
				if (matching.length > 0) {
					typeGroups.push({
						type: t,
						typeLabel: typeLabels[t] || t,
						courses: matching.map(simpleCourse)
					});
				}
			}
			const untyped = primary.filter((c) => !c.courseType);
			if (untyped.length > 0) {
				typeGroups.push({ type: null, typeLabel: '', courses: untyped.map(simpleCourse) });
			}
		} else {
			typeGroups.push({ type: null, typeLabel: '', courses: primary.map(simpleCourse) });
		}

		return {
			degree,
			overlap: overlap.map((c) => ({ name: c.name as string, code: c.code as string })),
			typeGroups
		};
	});
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
		const cv = cvData[lang];
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
					coursework: t.cv.coursework,
					skills: t.cv.skills,
					languages: t.cv.languages,
					certificates: t.cv.certificates,
					projects: t.cv.projects,
					qualities: t.cv.qualities,
					contact: t.cv.contact,
					present: t.cv.present,
					courseReplaces: t.cv.courseReplaces,
					courseOverlap: t.cv.courseOverlap,
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
					startDate: e.startDate,
					endDate: e.endDate || null,
					description: e.description || null
				})),
				courseworkGroups: processCoursework(
					filtered.coursework as unknown as Record<string, unknown>[],
					typeLabels
				),
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
