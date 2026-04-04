import type { TranslationMap } from '../types/i18n.types';

export const translations: TranslationMap = {
	en: {
		nav: {
			home: 'Home',
			blog: 'Blog'
		},
		profile: {
			description: 'A passionate developer with a love for creating innovative solutions.'
		},
		recentPosts: {
			title: 'Recent Activity'
		},
		blog: {
			title: 'Blog Posts',
			empty: 'No posts available.'
		}
	},
	no: {
		nav: {
			home: 'Hjem',
			blog: 'Blogg'
		},
		profile: {
			description:
				'En lidenskapelig utvikler med et kjennetegn for å skape innovative løsninger.'
		},
		recentPosts: {
			title: 'Nylig aktivitet'
		},
		blog: {
			title: 'Blogginnlegg',
			empty: 'Ingen innlegg tilgjengelig.'
		}
	}
};
