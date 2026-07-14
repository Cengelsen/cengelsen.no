import type { Lang } from '$lib/posts';

export interface CvSummary {
	title: string;
	bio: string;
	location: string;
}

export interface WorkExperience {
	company: string;
	companyUrl?: string;
	role: string;
	startDate: string;
	endDate?: string;
	description: string[];
	skillTags?: string[];
	profiles?: string[];
}

export interface Education {
	institution: string;
	degree: string;
	field: string;
	credits?: number;
	startDate: string;
	endDate?: string;
	description?: string;
	profiles?: string[];
}

export interface SkillCategory {
	category: string;
	skills: string[];
	profiles?: string[];
}

export interface LanguageProficiency {
	language: string;
	proficiency: string;
}

export interface QualityValue {
	name: string;
	description: string;
	profiles?: string[];
}

export interface Certificate {
	name: string;
	issuer: string;
	date: string;
	credentialUrl?: string;
	profiles?: string[];
}

export interface Project {
	name: string;
	description: string;
	techStack: string[];
	githubUrl?: string;
	liveUrl?: string;
	skillTags?: string[];
	profiles?: string[];
}

export interface ContactLink {
	platform: string;
	url: string;
	label: string;
}

export interface Coursework {
	name: string;
	code: string;
	institution: string;
	degrees: string[];
	credits?: number;
	semester?: string;
	description: string;
	replaces?: string;
	blogSlug?: string;
	skillTags?: string[];
	courseType?: 'mandatory' | 'specialization' | 'elective';
	courseTypesByDegree?: Partial<Record<string, 'mandatory' | 'specialization' | 'elective'>>;
}

export type CvSectionKey = 'experience' | 'volunteer' | 'education' | 'coursework' | 'skills' | 'languages' | 'certificates' | 'projects' | 'qualities' | 'contact';

export interface CvProfile {
	id: string;
	label: string;
	sections: CvSectionKey[];
	summary: CvSummary;
	accentColor: string;
}

export interface CvData {
	summary: CvSummary;
	experience: WorkExperience[];
	volunteer: WorkExperience[];
	education: Education[];
	coursework: Coursework[];
	skills: SkillCategory[];
	languages: LanguageProficiency[];
	certificates: Certificate[];
	projects: Project[];
	qualities: QualityValue[];
	contact: ContactLink[];
}

export type CvDataMap = Record<Lang, CvData>;
export type CvProfileMap = Record<Lang, Record<string, CvProfile>>;
