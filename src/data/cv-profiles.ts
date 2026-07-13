import type { CvProfileMap } from '../types/cv.types';

export const PROFILE_SLUGS = ['developer', 'administrator', 'organization-builder'] as const;
export type ProfileSlug = (typeof PROFILE_SLUGS)[number];

export const cvProfiles: CvProfileMap = {
	no: {
		developer: {
			id: 'developer',
			label: 'Utvikler',
			sections: ['skills', 'experience', 'projects', 'volunteer', 'education', 'languages', 'qualities', 'contact'],
			summary: {
				title: 'Fullstack-utvikler',
				bio: 'Fullstack-utvikler med erfaring innen Svelte, React, VueJS, Django, systemadministrasjon, skytjenester og KI. Har bygget B2B-plattformer og ledet IT-prosjekter for studentorganisasjoner. Bakgrunn fra kognitiv vitenskap, kunstig intelligens og informasjonsvitenskap.',
				location: 'Bergen, Norge'
			},
			accentColor: 'oklch(55% 0.2 250)'
		},
		administrator: {
			id: 'administrator',
			label: 'Administrator',
			sections: ['experience', 'volunteer', 'education', 'skills', 'certificates', 'languages', 'qualities', 'contact'],
			summary: {
				title: 'Daglig leder & administrator',
				bio: 'Daglig leder med erfaring innen organisasjonsledelse, økonomi, forvaltning, markedsføring og HR. Har ledet IT-avdelinger, planlagt og styrt budsjetter, holdt løpende dialog med ledelse, og bygget opp stabile lag som varer over lengre tid.',
				location: 'Bergen, Norge'
			},
			accentColor: 'oklch(35% 0.10 260)'
		},
		'organization-builder': {
			id: 'organization-builder',
			label: 'Organisasjonsutvikler',
			sections: ['volunteer', 'experience', 'skills', 'projects', 'education', 'languages', 'qualities', 'contact'],
			summary: {
				title: 'Organisasjonsutvikler',
				bio: 'Organisasjonsutvikler med bred erfaring fra studentorganisasjoner, konferanser og frivilligmiljøer i Bergen. Har rekruttert og ledet frivillige, organisert arrangementer og bygget nettverk på tvers av organisasjoner. Har også erfaring med å bygge opp og vedlikeholde organisasjonsstrukturer og prosedyrer.',
				location: 'Bergen, Norge'
			},
			accentColor: 'oklch(65% 0.18 50)'
		}
	},
	en: {
		developer: {
			id: 'developer',
			label: 'Developer',
			sections: ['skills', 'experience', 'projects', 'volunteer', 'education', 'languages', 'qualities', 'contact'],
			summary: {
				title: 'Full-Stack Developer',
				bio: 'Full-stack developer with experience in Svelte, React, VueJS, Django, system administration, cloud services and AI. Has built B2B platforms and led IT projects for student organizations. Background in cognitive science, artificial intelligence and information science.',
				location: 'Bergen, Norway'
			},
			accentColor: 'oklch(55% 0.2 250)'
		},
		administrator: {
			id: 'administrator',
			label: 'Administrator',
			sections: ['experience', 'volunteer', 'education', 'skills', 'certificates', 'languages', 'qualities', 'contact'],
			summary: {
				title: 'Managing Director & Administrator',
				bio: 'Managing director with experience in organizational leadership, finance, administration, marketing and HR. Has led IT departments, planned and managed budgets, maintained ongoing dialogue with leadership, and built stable teams that last over time.',
				location: 'Bergen, Norway'
			},
			accentColor: 'oklch(35% 0.10 260)'
		},
		'organization-builder': {
			id: 'organization-builder',
			label: 'Organization Developer',
			sections: ['volunteer', 'experience', 'skills', 'projects', 'education', 'languages', 'qualities', 'contact'],
			summary: {
				title: 'Organization Developer',
				bio: 'Organization developer with broad experience from student organizations, conferences and volunteer communities in Bergen. Has recruited and led volunteers, organized events and built networks across organizations. Also has experience building and maintaining organizational structures and procedures.',
				location: 'Bergen, Norway'
			},
			accentColor: 'oklch(65% 0.18 50)'
		}
	}
};
