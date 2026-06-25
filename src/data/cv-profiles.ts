import type { CvProfileMap } from '../types/cv.types';

export const PROFILE_SLUGS = ['developer', 'administrator', 'organization-builder'] as const;
export type ProfileSlug = (typeof PROFILE_SLUGS)[number];

export const cvProfiles: CvProfileMap = {
	no: {
		developer: {
			id: 'developer',
			label: 'Utvikler',
			sections: ['skills', 'experience', 'projects', 'volunteer', 'education', 'languages', 'contact'],
			summary: {
				title: 'Fullstack-utvikler',
				bio: 'Fullstack-utvikler med erfaring i SvelteKit, Django, Python og AI. Har bygget B2B-plattformer og ledet teknisk drift for studentorganisasjoner. Bakgrunn fra kognitiv vitenskap og kunstig intelligens.',
				location: 'Bergen, Norge'
			},
			accentColor: 'oklch(55% 0.2 250)'
		},
		administrator: {
			id: 'administrator',
			label: 'Administrator',
			sections: ['experience', 'volunteer', 'education', 'skills', 'certificates', 'languages', 'contact'],
			summary: {
				title: 'Daglig leder & administrator',
				bio: 'Daglig leder med erfaring innen organisasjonsledelse, økonomi, markedsføring og drift av frivillige organisasjoner. Har ledet IT-avdelinger, styrt budsjetter og bygget opp stabile team.',
				location: 'Bergen, Norge'
			},
			accentColor: 'oklch(35% 0.10 260)'
		},
		'organization-builder': {
			id: 'organization-builder',
			label: 'Organisasjonsbygger',
			sections: ['volunteer', 'experience', 'skills', 'projects', 'education', 'languages', 'contact'],
			summary: {
				title: 'Organisasjonsbygger',
				bio: 'Organisasjonsbygger med bred erfaring fra studentorganisasjoner, konferanser og frivilligmiljøer i Bergen. Har rekruttert og ledet frivillige, organisert arrangementer og bygget nettverk på tvers av organisasjoner.',
				location: 'Bergen, Norge'
			},
			accentColor: 'oklch(65% 0.18 50)'
		}
	},
	en: {
		developer: {
			id: 'developer',
			label: 'Developer',
			sections: ['skills', 'experience', 'projects', 'volunteer', 'education', 'languages', 'contact'],
			summary: {
				title: 'Full-Stack Developer',
				bio: 'Full-stack developer experienced in SvelteKit, Django, Python and AI. Has built B2B platforms and led technical operations for student organizations. Background in cognitive science and artificial intelligence.',
				location: 'Bergen, Norway'
			},
			accentColor: 'oklch(55% 0.2 250)'
		},
		administrator: {
			id: 'administrator',
			label: 'Administrator',
			sections: ['experience', 'volunteer', 'education', 'skills', 'certificates', 'languages', 'contact'],
			summary: {
				title: 'General Manager & Administrator',
				bio: 'General manager experienced in organizational leadership, finance, marketing and operations of volunteer organizations. Has led IT departments, managed budgets and built stable teams.',
				location: 'Bergen, Norway'
			},
			accentColor: 'oklch(35% 0.10 260)'
		},
		'organization-builder': {
			id: 'organization-builder',
			label: 'Organization Builder',
			sections: ['volunteer', 'experience', 'skills', 'projects', 'education', 'languages', 'contact'],
			summary: {
				title: 'Organization Builder',
				bio: 'Organization builder with broad experience from student organizations, conferences and volunteer communities in Bergen. Has recruited and led volunteers, organized events and built networks across organizations.',
				location: 'Bergen, Norway'
			},
			accentColor: 'oklch(65% 0.18 50)'
		}
	}
};
