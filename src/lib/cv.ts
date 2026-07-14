import { prepareCv } from './education-credits';
import type { CvData } from '../types/cv.types';
import type { Lang } from './posts';

interface Filterable {
	profiles?: string[];
}

function byProfile<T extends Filterable>(entries: T[], profileId: string): T[] {
	return entries.filter((e) => !e.profiles || e.profiles.includes(profileId));
}

export function filterCvByProfile(cv: CvData, profileId: string, lang: Lang): CvData {
	const prepared = prepareCv(cv, lang);

	return {
		...prepared,
		experience: byProfile(prepared.experience, profileId),
		volunteer: byProfile(prepared.volunteer, profileId),
		education: byProfile(prepared.education, profileId),
		skills: byProfile(prepared.skills, profileId),
		certificates: byProfile(prepared.certificates, profileId),
		projects: byProfile(prepared.projects, profileId),
		qualities: byProfile(prepared.qualities, profileId)
	};
}

export { prepareCv } from './education-credits';
