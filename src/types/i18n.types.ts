import type { Lang } from '$lib/posts';

export interface Translations {
	nav: {
		home: string;
		blog: string;
		cv: string;
	};

	profile: {
		description: string;
	};

	recentPosts: {
		title: string;
	};

	blog: {
		title: string;
		empty: string;
	};

	cv: {
		pageTitle: string;
		experience: string;
		volunteer: string;
		education: string;
		educationCreditsUnit: string;
		courseCreditsLabel: string;
		coursework: string;
		courseReplaces: string;
		courseReplacedBy: string;
		courseEssay: string;
		courseOverlap: string;
		courseMandatory: string;
		courseSpecialization: string;
		courseElective: string;
		skills: string;
		languages: string;
		certificates: string;
		projects: string;
		qualities: string;
		contact: string;
		present: string;
		viewCredential: string;
		viewProject: string;
		liveDemo: string;
		allProfiles: string;
		download: string;
	};
}

export type TranslationMap = Record<Lang, Translations>;
