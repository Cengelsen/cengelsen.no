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
	profiles?: string[];
}

export interface Education {
	institution: string;
	degree: string;
	field: string;
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
	profiles?: string[];
}

export interface ContactLink {
	platform: string;
	url: string;
	label: string;
}

export type CvSectionKey = 'experience' | 'volunteer' | 'education' | 'skills' | 'languages' | 'certificates' | 'projects' | 'contact';

export interface CvProfile {
	id: string;
	label: string;
	sections: CvSectionKey[];
	summary: CvSummary;
}

export interface CvData {
	summary: CvSummary;
	experience: WorkExperience[];
	volunteer: WorkExperience[];
	education: Education[];
	skills: SkillCategory[];
	languages: LanguageProficiency[];
	certificates: Certificate[];
	projects: Project[];
	contact: ContactLink[];
}

export type CvDataMap = Record<Lang, CvData>;
export type CvProfileMap = Record<Lang, Record<string, CvProfile>>;
