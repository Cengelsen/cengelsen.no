import type { CvProfileMap } from '../types/cv.types';

export const PROFILE_SLUGS = ['developer', 'administrator', 'community-builder'] as const;
export type ProfileSlug = (typeof PROFILE_SLUGS)[number];

export const cvProfiles: CvProfileMap = {
	no: {
		developer: {
			id: 'developer',
			label: 'Utvikler',
			sections: ['skills', 'experience', 'projects', 'education', 'volunteer', 'certificates', 'languages', 'contact'],
			summary: {
				title: 'Fullstack-utvikler',
				bio: 'Utvikler med erfaring i fullstack-utvikling, Django, SvelteKit og AI. Brenner for å bygge brukervennlige løsninger med moderne teknologi.',
				location: 'Bergen, Norge'
			},
			accentColor: 'oklch(55% 0.2 250)'
		},
		administrator: {
			id: 'administrator',
			label: 'Administrator',
			sections: ['experience', 'volunteer', 'skills', 'education', 'certificates', 'projects', 'languages', 'contact'],
			summary: {
				title: 'Daglig leder & administrator',
				bio: 'Daglig leder med erfaring innen organisasjonsledelse, økonomi og drift. Har ledet både frivillige organisasjoner og tekniske team.',
				location: 'Bergen, Norge'
			},
			accentColor: 'oklch(35% 0.10 260)'
		},
		'community-builder': {
			id: 'community-builder',
			label: 'Community-bygger',
			sections: ['experience', 'volunteer', 'skills', 'projects', 'education', 'languages', 'certificates', 'contact'],
			summary: {
				title: 'Community-bygger',
				bio: 'Brenner for å skape engasjement og vekst gjennom strategisk kommunikasjon, relasjonsbygging og rekruttering av frivillige.',
				location: 'Bergen, Norge'
			},
			accentColor: 'oklch(65% 0.18 50)'
		}
	},
	en: {
		developer: {
			id: 'developer',
			label: 'Developer',
			sections: ['skills', 'experience', 'projects', 'education', 'volunteer', 'certificates', 'languages', 'contact'],
			summary: {
				title: 'Full-Stack Developer',
				bio: 'Developer with experience in full-stack development, Django, SvelteKit and AI. Passionate about building user-friendly solutions with modern technology.',
				location: 'Bergen, Norway'
			},
			accentColor: 'oklch(55% 0.2 250)'
		},
		administrator: {
			id: 'administrator',
			label: 'Administrator',
			sections: ['experience', 'volunteer', 'skills', 'education', 'certificates', 'projects', 'languages', 'contact'],
			summary: {
				title: 'General Manager & Administrator',
				bio: 'General manager with experience in organizational leadership, finance and operations. Has led both volunteer organizations and technical teams.',
				location: 'Bergen, Norway'
			},
			accentColor: 'oklch(35% 0.10 260)'
		},
		'community-builder': {
			id: 'community-builder',
			label: 'Community Builder',
			sections: ['experience', 'volunteer', 'skills', 'projects', 'education', 'languages', 'certificates', 'contact'],
			summary: {
				title: 'Community Builder',
				bio: 'Passionate about creating engagement and growth through strategic communication, relationship building and volunteer recruitment.',
				location: 'Bergen, Norway'
			},
			accentColor: 'oklch(65% 0.18 50)'
		}
	}
};
