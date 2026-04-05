import type { CvDataMap } from '../types/cv.types';

export const cvData: CvDataMap = {
	no: {
		summary: {
			title: 'Programvareutvikler',
			bio: 'En lidenskapelig utvikler med et kjennetegn for å skape innovative løsninger.',
			location: 'Norge'
		},
		experience: [
			{
				company: 'Firmanavn',
				companyUrl: 'https://example.com',
				role: 'Programvareutvikler',
				startDate: '2023-01',
				description: [
					'Utviklet og vedlikeholdt webapplikasjoner med moderne teknologier.',
					'Samarbeidet med tverrfaglige team for å levere prosjekter i tide.'
				]
			},
			{
				company: 'Annet Firma',
				role: 'Juniorutvikler',
				startDate: '2021-06',
				endDate: '2022-12',
				description: [
					'Bidro til utvikling av interne verktøy og tjenester.',
					'Deltok i kodegjennomganger og tekniske diskusjoner.'
				]
			}
		],
		education: [
			{
				institution: 'Universitetet',
				degree: 'Bachelorgrad',
				field: 'Informatikk',
				startDate: '2018',
				endDate: '2021',
				description: 'Fokus på programvareutvikling og databaser.'
			}
		],
		skills: [
			{
				category: 'Programmeringsspråk',
				skills: ['TypeScript', 'JavaScript', 'Python', 'Java']
			},
			{
				category: 'Rammeverk & biblioteker',
				skills: ['Svelte', 'SvelteKit', 'React', 'Node.js']
			},
			{
				category: 'Verktøy & plattformer',
				skills: ['Git', 'Docker', 'Linux', 'VS Code']
			}
		],
		languages: [
			{ language: 'Norsk', proficiency: 'Morsmål' },
			{ language: 'Engelsk', proficiency: 'Flytende' }
		],
		certificates: [
			{
				name: 'Eksempelsertifisering',
				issuer: 'Sertifiseringsorganet',
				date: '2023-05',
				credentialUrl: 'https://example.com/credential'
			}
		],
		projects: [
			{
				name: 'Personlig nettside',
				description: 'Min personlige nettside og blogg, bygget med SvelteKit.',
				techStack: ['SvelteKit', 'TypeScript', 'CSS'],
				githubUrl: 'https://github.com/Cengelsen',
				liveUrl: 'https://cengelsen.no'
			}
		],
		contact: [
			{
				platform: 'LinkedIn',
				url: 'https://www.linkedin.com/in/christian-kårbø-engelsen-7a07941aa',
				label: 'Christian Kårbø Engelsen'
			},
			{
				platform: 'GitHub',
				url: 'https://github.com/Cengelsen',
				label: 'Cengelsen'
			},
			{
				platform: 'Epost',
				url: 'mailto:ckengelsen97@gmail.com',
				label: 'ckengelsen97@gmail.com'
			}
		]
	},
	en: {
		summary: {
			title: 'Software Developer',
			bio: 'A passionate developer with a love for creating innovative solutions.',
			location: 'Norway'
		},
		experience: [
			{
				company: 'Company Name',
				companyUrl: 'https://example.com',
				role: 'Software Developer',
				startDate: '2023-01',
				description: [
					'Developed and maintained web applications using modern technologies.',
					'Collaborated with cross-functional teams to deliver projects on time.'
				]
			},
			{
				company: 'Other Company',
				role: 'Junior Developer',
				startDate: '2021-06',
				endDate: '2022-12',
				description: [
					'Contributed to the development of internal tools and services.',
					'Participated in code reviews and technical discussions.'
				]
			}
		],
		education: [
			{
				institution: 'The University',
				degree: 'Bachelor\'s Degree',
				field: 'Computer Science',
				startDate: '2018',
				endDate: '2021',
				description: 'Focus on software development and databases.'
			}
		],
		skills: [
			{
				category: 'Programming Languages',
				skills: ['TypeScript', 'JavaScript', 'Python', 'Java']
			},
			{
				category: 'Frameworks & Libraries',
				skills: ['Svelte', 'SvelteKit', 'React', 'Node.js']
			},
			{
				category: 'Tools & Platforms',
				skills: ['Git', 'Docker', 'Linux', 'VS Code']
			}
		],
		languages: [
			{ language: 'Norwegian', proficiency: 'Native' },
			{ language: 'English', proficiency: 'Fluent' }
		],
		certificates: [
			{
				name: 'Example Certification',
				issuer: 'Certification Body',
				date: '2023-05',
				credentialUrl: 'https://example.com/credential'
			}
		],
		projects: [
			{
				name: 'Personal Website',
				description: 'My personal website and blog, built with SvelteKit.',
				techStack: ['SvelteKit', 'TypeScript', 'CSS'],
				githubUrl: 'https://github.com/Cengelsen',
				liveUrl: 'https://cengelsen.no'
			}
		],
		contact: [
			{
				platform: 'LinkedIn',
				url: 'https://www.linkedin.com/in/christian-kårbø-engelsen-7a07941aa',
				label: 'Christian Kårbø Engelsen'
			},
			{
				platform: 'GitHub',
				url: 'https://github.com/Cengelsen',
				label: 'Cengelsen'
			},
			{
				platform: 'Email',
				url: 'mailto:ckengelsen97@gmail.com',
				label: 'ckengelsen97@gmail.com'
			}
		]
	}
};
