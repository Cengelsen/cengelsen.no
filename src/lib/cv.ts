import type { CvData } from '../types/cv.types';

interface Filterable {
	profiles?: string[];
}

function byProfile<T extends Filterable>(entries: T[], profileId: string): T[] {
	return entries.filter((e) => !e.profiles || e.profiles.includes(profileId));
}

export function filterCvByProfile(cv: CvData, profileId: string): CvData {
	return {
		summary: cv.summary,
		experience: byProfile(cv.experience, profileId),
		volunteer: byProfile(cv.volunteer, profileId),
		education: byProfile(cv.education, profileId),
		skills: byProfile(cv.skills, profileId),
		languages: cv.languages,
		certificates: byProfile(cv.certificates, profileId),
		projects: byProfile(cv.projects, profileId),
		contact: cv.contact
	};
}
