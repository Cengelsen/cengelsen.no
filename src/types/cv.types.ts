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
}

export interface Education {
	institution: string;
	degree: string;
	field: string;
	startDate: string;
	endDate?: string;
	description?: string;
}

export interface SkillCategory {
	category: string;
	skills: string[];
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
}

export interface Project {
	name: string;
	description: string;
	techStack: string[];
	githubUrl?: string;
	liveUrl?: string;
}

export interface ContactLink {
	platform: string;
	url: string;
	label: string;
}

export interface CvData {
	summary: CvSummary;
	experience: WorkExperience[];
	education: Education[];
	skills: SkillCategory[];
	languages: LanguageProficiency[];
	certificates: Certificate[];
	projects: Project[];
	contact: ContactLink[];
}

export type CvDataMap = Record<Lang, CvData>;
