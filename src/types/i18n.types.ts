import type { Lang } from '$lib/posts';

export interface Translations {
	nav: {
		home: string;
		blog: string;
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
}

export type TranslationMap = Record<Lang, Translations>;
