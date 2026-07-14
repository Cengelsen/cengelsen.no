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
		careerViewList: string;
		careerViewTimeline: string;
		careerViewToggle: string;
		careerTimeline: string;
		careerKindExperience: string;
		careerKindVolunteer: string;
		careerKindEducation: string;
		careerTimelineNewer: string;
		careerTimelineOlder: string;
		careerTimelinePeriod: string;
		education: string;
		educationCreditsUnit: string;
		courseCreditsLabel: string;
		coursework: string;
		courseReplaces: string;
		courseReplacedBy: string;
		courseEssay: string;
		courseOverlap: string;
		courseReplacedSection: string;
		courseCreditsTotal: string;
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
