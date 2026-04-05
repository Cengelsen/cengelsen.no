import type { CvDataMap } from '../types/cv.types';

export const cvData: CvDataMap = {
	no: {
		summary: {
			title: 'Fullstack-utvikler & daglig leder',
			bio: 'Daglig leder med erfaring innen organisasjonsledelse, markedsføring og community-bygging. Brenner for å skape engasjement og vekst gjennom strategisk kommunikasjon og relasjonsbygging.',
			location: 'Bergen, Norge'
		},
		experience: [
			{
				company: 'Studentradioen i Bergen',
				companyUrl: 'https://srib.no',
				role: 'Daglig leder (50%)',
				startDate: '2025-08',
				description: [
					'Ansvarlig for markedsføring, økonomi, regnskap og kundeforhold.',
					'Driver aktivt merkevarebygging og rekruttering av frivillige.',
					'Planlegger og gjennomfører sosiale aktiviteter for et stort frivilligmiljø.'
				]
			},
			{
				company: 'Nordic USV AS',
				companyUrl: 'https://nordicusv.com',
				role: 'Fullstack-utvikler (15%)',
				startDate: '2023-07',
				endDate: '2024-09',
				description: [
					'Utviklet frontend og backend i Django for en B2B-nettplattform.',
					'Bidro til produktstrategi og brukeropplevelse for en ny tjeneste innen ubemannede fartøy og miljødata.'
				]
			},
			{
				company: 'Studentradioen i Bergen',
				companyUrl: 'https://srib.no',
				role: 'Teknisk sjef (40%)',
				startDate: '2018-08',
				endDate: '2022-12',
				description: [
					'Ledet teknisk drift og koordinerte frivillige.',
					'Sikret stabil plattform for sendinger, arrangementer og ekstern kommunikasjon.'
				]
			},
			{
				company: 'Forsvaret',
				role: 'Radiooperatør (100%)',
				startDate: '2017-01',
				endDate: '2018-06',
				description: [
					'Taktisk kommunikasjon og samband i krevende omgivelser.',
					'Veiledet medarbeidere i kommunikasjonsprosedyrer.'
				]
			}
		],
		volunteer: [
			{
				company: 'Det Akademiske Kvarter',
				companyUrl: 'https://kvarteret.no',
				role: 'IT-leder',
				startDate: '2022-02',
				endDate: '2026-01',
				description: [
					'Ledet IT-avdelingen og hadde ansvar for teknisk infrastruktur.'
				]
			},
			{
				company: 'friByte',
				companyUrl: 'https://fribyte.no',
				role: 'Leder',
				startDate: '2021-12',
				endDate: '2022-12',
				description: [
					'Ledet studentorganisasjonen som drifter IT-tjenester for studentforeninger i Bergen.'
				]
			},
			{
				company: 'friByte',
				companyUrl: 'https://fribyte.no',
				role: 'Nestleder',
				startDate: '2021-01',
				endDate: '2021-12',
				description: [
					'Assisterte leder med daglig drift og organisering av aktiviteter.'
				]
			},
			{
				company: 'friByte',
				companyUrl: 'https://fribyte.no',
				role: 'Sosialansvarlig',
				startDate: '2023-12',
				endDate: '2024-06',
				description: [
					'Organiserte sosiale arrangementer for medlemmene.'
				]
			}
		],
		education: [
			{
				institution: 'Universitetet i Bergen',
				degree: 'Mastergrad',
				field: 'Informasjonsvitenskap',
				startDate: '2024',
				description: '120 studiepoeng. Fordypning i informasjonsarkitektur, brukeratferd og digital kommunikasjon.'
			},
			{
				institution: 'Universitetet i Bergen',
				degree: 'Bachelorgrad',
				field: 'Kognitiv vitenskap',
				startDate: '2018',
				endDate: '2025',
				description: 'Bevissthet, kognitive evner og filosofi rundt KI. Fordypning i informatikk, filosofi og informasjonsvitenskap. 180 studiepoeng.'
			},
			{
				institution: 'Universitetet i Bergen',
				degree: 'Årsstudium',
				field: 'Kunstig intelligens',
				startDate: '2022',
				endDate: '2024',
				description: 'Kunstige agenter, maskinlæring og utvikling av AI-løsninger. Kombinerer informatikk og informasjonsvitenskap.'
			}
		],
		skills: [
			{
				category: 'Programmeringsspråk',
				skills: ['TypeScript', 'JavaScript', 'Python', 'Java']
			},
			{
				category: 'Rammeverk & biblioteker',
				skills: ['Svelte', 'SvelteKit', 'Django', 'React', 'Node.js']
			},
			{
				category: 'Verktøy & plattformer',
				skills: ['Git', 'Docker', 'Linux', 'VS Code']
			},
			{
				category: 'Ledelse & forretning',
				skills: ['Markedsføring', 'Merkevarebygging', 'Community-bygging', 'Vekststrategi', 'Prosjektledelse', 'Budsjett', 'CRM']
			},
			{
				category: 'Fagområder',
				skills: ['Fullstack-utvikling', 'KI / Dataanalyse']
			}
		],
		languages: [
			{ language: 'Norsk (bokmål)', proficiency: 'Morsmål' },
			{ language: 'Engelsk', proficiency: 'Flytende' },
			{ language: 'Tysk', proficiency: 'Grunnleggende' }
		],
		certificates: [
			{
				name: 'Truckførerkurs',
				issuer: 'Forsvaret',
				date: '2017-10'
			},
			{
				name: 'Førerkort klasse B',
				issuer: 'Statens vegvesen',
				date: '2017-01'
			}
		],
		projects: [
			{
				name: 'Personlig nettside',
				description: 'Min personlige nettside og blogg, bygget med SvelteKit.',
				techStack: ['SvelteKit', 'TypeScript', 'CSS'],
				githubUrl: 'https://github.com/Cengelsen',
				liveUrl: 'https://cengelsen.no'
			},
			{
				name: 'Bergen Open Source',
				description: 'Nettside for Bergen Open Source-konferansen.',
				techStack: ['Webteknologi'],
				liveUrl: 'https://boskonf.no'
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
			title: 'Full-Stack Developer & General Manager',
			bio: 'General manager with experience in organizational leadership, marketing and community building. Passionate about creating engagement and growth through strategic communication and relationship building.',
			location: 'Bergen, Norway'
		},
		experience: [
			{
				company: 'Studentradioen i Bergen',
				companyUrl: 'https://srib.no',
				role: 'General Manager (50%)',
				startDate: '2025-08',
				description: [
					'Responsible for marketing, finances, accounting and customer relations.',
					'Actively driving brand building and recruitment of volunteers.',
					'Planning and executing social activities for a large volunteer community.'
				]
			},
			{
				company: 'Nordic USV AS',
				companyUrl: 'https://nordicusv.com',
				role: 'Full-Stack Developer (15%)',
				startDate: '2023-07',
				endDate: '2024-09',
				description: [
					'Developed frontend and backend in Django for a B2B web platform.',
					'Contributed to product strategy and user experience for a new service in unmanned vessels and environmental data.'
				]
			},
			{
				company: 'Studentradioen i Bergen',
				companyUrl: 'https://srib.no',
				role: 'Technical Director (40%)',
				startDate: '2018-08',
				endDate: '2022-12',
				description: [
					'Led technical operations and coordinated volunteers.',
					'Ensured a stable platform for broadcasts, events and external communication.'
				]
			},
			{
				company: 'Norwegian Armed Forces',
				role: 'Radio Operator (100%)',
				startDate: '2017-01',
				endDate: '2018-06',
				description: [
					'Tactical communication and signals in demanding environments.',
					'Mentored colleagues in communication procedures.'
				]
			}
		],
		volunteer: [
			{
				company: 'Det Akademiske Kvarter',
				companyUrl: 'https://kvarteret.no',
				role: 'IT Manager',
				startDate: '2022-02',
				endDate: '2026-01',
				description: [
					'Led the IT department and was responsible for technical infrastructure.'
				]
			},
			{
				company: 'friByte',
				companyUrl: 'https://fribyte.no',
				role: 'President',
				startDate: '2021-12',
				endDate: '2022-12',
				description: [
					'Led the student organization that operates IT services for student associations in Bergen.'
				]
			},
			{
				company: 'friByte',
				companyUrl: 'https://fribyte.no',
				role: 'Vice President',
				startDate: '2021-01',
				endDate: '2021-12',
				description: [
					'Assisted the president with daily operations and activity planning.'
				]
			},
			{
				company: 'friByte',
				companyUrl: 'https://fribyte.no',
				role: 'Social Coordinator',
				startDate: '2023-12',
				endDate: '2024-06',
				description: [
					'Organized social events for members.'
				]
			}
		],
		education: [
			{
				institution: 'University of Bergen',
				degree: 'Master\'s Degree',
				field: 'Information Science',
				startDate: '2024',
				description: '120 ECTS credits. Specialization in information architecture, user behaviour and digital communication.'
			},
			{
				institution: 'University of Bergen',
				degree: 'Bachelor\'s Degree',
				field: 'Cognitive Science',
				startDate: '2018',
				endDate: '2025',
				description: 'Consciousness, cognitive abilities and philosophy of AI. Specialization in computer science, philosophy and information science. 180 ECTS credits.'
			},
			{
				institution: 'University of Bergen',
				degree: 'Annual Programme',
				field: 'Artificial Intelligence',
				startDate: '2022',
				endDate: '2024',
				description: 'Artificial agents, machine learning and development of AI solutions. Combines computer science and information science.'
			}
		],
		skills: [
			{
				category: 'Programming Languages',
				skills: ['TypeScript', 'JavaScript', 'Python', 'Java']
			},
			{
				category: 'Frameworks & Libraries',
				skills: ['Svelte', 'SvelteKit', 'Django', 'React', 'Node.js']
			},
			{
				category: 'Tools & Platforms',
				skills: ['Git', 'Docker', 'Linux', 'VS Code']
			},
			{
				category: 'Leadership & Business',
				skills: ['Marketing', 'Brand Building', 'Community Building', 'Growth Strategy', 'Project Management', 'Budgeting', 'CRM']
			},
			{
				category: 'Domains',
				skills: ['Full-Stack Development', 'AI / Data Analysis']
			}
		],
		languages: [
			{ language: 'Norwegian (Bokmål)', proficiency: 'Native' },
			{ language: 'English', proficiency: 'Fluent' },
			{ language: 'German', proficiency: 'Basic' }
		],
		certificates: [
			{
				name: 'Forklift Operator Certificate',
				issuer: 'Norwegian Armed Forces',
				date: '2017-10'
			},
			{
				name: 'Driver\'s License, Class B',
				issuer: 'Norwegian Public Roads Administration',
				date: '2017-01'
			}
		],
		projects: [
			{
				name: 'Personal Website',
				description: 'My personal website and blog, built with SvelteKit.',
				techStack: ['SvelteKit', 'TypeScript', 'CSS'],
				githubUrl: 'https://github.com/Cengelsen',
				liveUrl: 'https://cengelsen.no'
			},
			{
				name: 'Bergen Open Source',
				description: 'Website for the Bergen Open Source conference.',
				techStack: ['Web Technologies'],
				liveUrl: 'https://boskonf.no'
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
