import type { CvDataMap } from '../types/cv.types';

export const cvData: CvDataMap = {
	no: {
		summary: {
			title: 'Organisasjonsutvikler || teknologientusiast || systemadministrator || ÅKK-forkjemper',
			bio: 'Teknologientusiast med erfaring innen organisasjonsledelse, programvareutvikling og systemadministrasjon. Brenner for å skape engasjement og vekst gjennom strategisk kommunikasjon og relasjonsbygging, med fokus på IT-prosjekter og åpen kildekode (ÅKK). Elsker å forme, vedlikeholde og effektivisere organisasjonsstrukturer og prosedyrer.',
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
				],
				skillTags: ['Regnskap', 'Budsjett', 'Vekststrategi', 'Merkevarebygging', 'Rekruttering', 'Prosjektledelse', 'Organisasjonsutvikling'],
				profiles: ['administrator', 'organization-builder']
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
				],
				skillTags: ['Svelte', 'Django', 'Supabase', 'Cloudflare', 'Git'],
				profiles: ['developer']
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
				],
				skillTags: ['IT-ledelse', 'Rekruttering'],
				profiles: ['developer', 'systemadministrator']
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
			company: 'Bergen Open Source',
			companyUrl: 'https://boskonf.no',
			role: 'Leder',
			startDate: '2025-02',
			description: [
				'Leder for Bergen Open Source-fellesskapet og konferansen.'
			],
			skillTags: ['Non-profit-ledelse', 'Prosjektledelse', 'Organisasjonsbygging', 'Git'],
			profiles: ['administrator', 'organization-builder']
		},
		{
			company: 'AI Safety Bergen',
			role: 'Teknologidirektør',
			startDate: '2025-02',
			endDate: '2026-01',
			description: [
				'Teknologiansvarlig for AI Safety Bergen.'
			],
			skillTags: ['Git'],
			profiles: ['developer']
		},
		{
			company: 'Hulen Bergen',
			companyUrl: 'https://hulen.no',
			role: 'IT-medlem',
			startDate: '2025-02',
			endDate: '2025-09',
			description: [
				'Bidro til IT-drift og teknisk støtte for Hulen.'
			],
			skillTags: ['Git'],
			profiles: ['developer', 'systemadministrator']
		},
		{
			company: 'AI Safety Bergen',
			role: 'Medlem',
			startDate: '2024-01',
			endDate: '2026-01',
			description: [
				'Aktivt medlem i AI Safety Bergen.'
			],
			skillTags: ['Git'],
			profiles: ['organization-builder']
		},
		{
			company: 'AI Safety Bergen',
			role: 'Kurstilrettelegger',
			startDate: '2024-01',
			endDate: '2024-06',
			description: [
				'Tilrettela kurs om AI-sikkerhet og AI-alignment.'
			],
			skillTags: ['Git'],
			profiles: ['organization-builder']
		},
		{
			company: 'friByte',
			companyUrl: 'https://fribyte.no',
			role: 'Sosialansvarlig',
			startDate: '2023-08',
			endDate: '2024-03',
			description: [
				'Organiserte sosiale arrangementer for medlemmene.'
			],
			skillTags: ['Git', 'Linux', 'Systemadministrasjon'],
			profiles: ['organization-builder', 'systemadministrator']
		},
		{
			company: 'Det Akademiske Kvarter',
			companyUrl: 'https://kvarteret.no',
			role: 'IT-leder',
			startDate: '2022-02',
			endDate: '2026-01',
			description: [
				'Ledet IT-avdelingen og hadde ansvar for teknisk infrastruktur.'
			],
			skillTags: ['IT-ledelse', 'Prosjektledelse', 'Rekruttering', 'Organisasjonsbygging', 'Azure', 'Git'],
			profiles: ['developer', 'administrator', 'systemadministrator']
		},
		{
			company: 'friByte',
			companyUrl: 'https://fribyte.no',
			role: 'Leder',
			startDate: '2021-12',
			endDate: '2022-12',
			description: [
				'Ledet studentorganisasjonen som drifter IT-tjenester for studentforeninger i Bergen.'
			],
			skillTags: ['Non-profit-ledelse', 'Prosjektledelse', 'Rekruttering', 'Organisasjonsbygging', 'Git', 'Linux', 'Systemadministrasjon'],
			profiles: ['administrator', 'organization-builder', 'systemadministrator']
		},
		{
			company: 'Phonofestivalen',
			role: 'Produksjonsansvarlig',
			startDate: '2021-09',
			endDate: '2022-02',
			description: [
				'Ansvarlig for produksjon og logistikk under festivalen.'
			],
			profiles: ['administrator']
		},
		{
			company: 'friByte',
			companyUrl: 'https://fribyte.no',
			role: 'Nestleder',
			startDate: '2021-01',
			endDate: '2021-12',
			description: [
				'Assisterte leder med daglig drift og organisering av aktiviteter.'
			],
			skillTags: ['Git', 'Linux', 'Systemadministrasjon'],
			profiles: ['administrator', 'organization-builder', 'systemadministrator']
		},
		{
			company: 'Studentersamfunnet i Bergen',
			role: 'IT-ansvarlig',
			startDate: '2018-08',
			endDate: '2020-06',
			description: [
				'Ansvarlig for IT-drift og teknisk infrastruktur for Studentersamfunnet.'
			],
			skillTags: ['IT-ledelse'],
			profiles: ['developer', 'administrator', 'systemadministrator']
		}
	],
	education: [
		{
			institution: 'Universitetet i Bergen',
				degree: 'Mastergrad',
				field: 'Informasjonsvitenskap',
				startDate: '2024-08',
				endDate: '2026-07',
				description: 'Fordypning i informasjonsarkitektur, brukeratferd og digital kommunikasjon.'
			},
			{
				institution: 'Universitetet i Bergen',
				degree: 'Bachelorgrad',
				field: 'Kognitiv vitenskap',
				startDate: '2018-08',
				endDate: '2024-07',
				description: 'Bevissthet, kognitive evner og filosofi rundt KI. Fordypning i informatikk, filosofi og informasjonsvitenskap.'
			},
			{
				institution: 'Universitetet i Bergen',
				degree: 'Bachelorgrad',
				field: 'Kunstig intelligens',
				startDate: '2022-08',
				endDate: '2024-07',
				description: 'Kunstige agenter, maskinlæring og utvikling av AI-løsninger. Kombinerer informatikk og informasjonsvitenskap.'
			}
		],
		coursework: [
			{ name: 'Avansert Programmering', code: 'INFO135', institution: 'Universitetet i Bergen', degrees: ['Bachelorgrad i kognitiv vitenskap'], description: 'Datastrukturer, algoritmer, objektorientering, tråd-programmering og effektivitetsanalyse. Dekker også standarder for strukturerte data som JSON, RDF og XML.', skillTags: ['Python'], courseType: 'specialization' },
			{ name: 'Biologisk og Kognitiv Psykologi', code: 'PSYK120', institution: 'Universitetet i Bergen', degrees: ['Bachelorgrad i kognitiv vitenskap'], description: 'Det biologiske grunnlaget for nervesystemet, emosjonar og læring, kombinert med kognitive teoriar om persepsjon, hukommelse og resonnering.', courseType: 'mandatory' },
			{ name: 'Datahåndtering', code: 'INFO125', institution: 'Universitetet i Bergen', degrees: ['Bachelorgrad i kognitiv vitenskap'], description: 'Teori og praksis knytt til utforming og bruk av relasjons- og NoSQL-databasar. Dekker datamodellering, normalisering, spørjespråk og prinsipp for indeksering.', skillTags: ['SQL'], courseType: 'specialization' },
			{ name: 'Deduksjon og Metalogikk', code: 'LOG111', institution: 'Universitetet i Bergen', degrees: ['Bachelorgrad i kognitiv vitenskap'], description: 'Naturleg deduksjon for setnings- og predikatlogikk med identitet, modellteori og mengdeteori. Inkluderer metalogikk og bevis for eigenskapar ved formelle bevissystem.', courseType: 'mandatory' },
			{ name: 'Examen Facultatum, Grunnleggende Lingvistikk', code: 'EXFAC00SK', institution: 'Universitetet i Bergen', degrees: ['Bachelorgrad i kognitiv vitenskap'], description: 'Innføring i fonetikk, fonologi, morfologi, syntaks og semantikk. Gir eit teoretisk og praktisk grunnlag for studium innan språkrelaterte fag.', courseType: 'mandatory' },
			{ name: 'Examen Philosophicum', code: 'EXPHIL-MNSEM', institution: 'Universitetet i Bergen', degrees: ['Bachelorgrad i kognitiv vitenskap'], description: 'Kunnskaps- og vitskapsteori, etikk og grunnprinsipp for logikk og argumentasjonsteori. Utviklar kritisk og analytisk kompetanse relevant for eige fagområde.', blogSlug: 'et-innblikk-i-bevissthetsfilosofi', courseType: 'mandatory' },
			{ name: 'Formelle metoder for informasjonsvitenskap', code: 'INFO102', institution: 'Universitetet i Bergen', degrees: [], description: 'Grunnleggjande formelle omgrep og metodar innan informasjonsvitskap, inkludert logikk, mengdelære, relasjonar og funksjonar.' },
			{ name: 'Formelle Metoder for Informasjonsvitenskap', code: 'INFO104', institution: 'Universitetet i Bergen', degrees: ['Bachelorgrad i kognitiv vitenskap', 'Bachelorgrad i kunstig intelligens'], description: 'Elementær logikk og mengdelære, relasjonar, funksjonar, grafar og tre. Dekker kombinatorikk, sannsyn, informasjonsteori og bereknelegheit.', replaces: 'INFO102', courseType: 'specialization', courseTypesByDegree: { 'Bachelorgrad i kunstig intelligens': 'mandatory' } },
			{ name: 'Funksjonell Programmering', code: 'INF122', institution: 'Universitetet i Bergen', degrees: ['Bachelorgrad i kognitiv vitenskap'], description: 'Det funksjonelle paradigmet med rekursjon, høgare ordens funksjonar og ikkje-muterbare datastrukturar. Programmering i eit funksjonelt språk som Haskell.', skillTags: ['Haskell'], courseType: 'mandatory' },
			{ name: 'Introduksjon til Innovasjon og Entreprenørskap', code: 'MCB201', institution: 'Universitetet i Bergen', degrees: ['Bachelorgrad i kognitiv vitenskap'], description: 'Innovasjons- og entreprenørskapsteori med praktisk metodearbeid. Utvikling av forretningsmodellar gjennom deltakarbasert design og konseptutvikling.', blogSlug: 'en-vurdering-av-oculus-rift-sin-innovative-kraft', courseType: 'elective' },
			{ name: 'Introduksjon til Kognitiv Vitenskap', code: 'KOGVIT101', institution: 'Universitetet i Bergen', degrees: ['Bachelorgrad i kognitiv vitenskap'], description: 'Tverrfagleg oversikt over kognisjon frå informatikk, lingvistikk, psykologi og filosofi. Dekker kunnskapsrepresentasjon, resonnering, læring, språk, persepsjon og medvit.', blogSlug: 'kan-en-maskin-forstå-språk', courseType: 'mandatory' },
			{ name: 'Introduksjon til Kunstig Intelligens', code: 'INFO180', institution: 'Universitetet i Bergen', degrees: ['Bachelorgrad i kognitiv vitenskap', 'Bachelorgrad i kunstig intelligens'], description: 'Teoretisk og praktisk grunnlag for kunstig intelligens, inkludert søk i tilstandsrom, kunnskapsrepresentasjon, inferens og maskinlæring.', skillTags: ['Python', 'Søkealgoritmer'], courseType: 'specialization', courseTypesByDegree: { 'Bachelorgrad i kunstig intelligens': 'mandatory' } },
			{ name: 'Introduksjon til Sinnsfilosofi', code: 'FIL105', institution: 'Universitetet i Bergen', degrees: ['Bachelorgrad i kognitiv vitenskap'], description: 'Moderne sinnsfilosofi og tilhøvet mellom mentale og kroppslege eigenskapar. Dekker behaviorisme, identitetsteori, funksjonalisme og medvitsproblematikken.', courseType: 'mandatory' },
			{ name: 'Introduksjon til formallogikk', code: 'LOG110', institution: 'Universitetet i Bergen', degrees: ['Bachelorgrad i kognitiv vitenskap'], description: 'Innføring i setningslogikk og førsteordens predikatlogikk. Vekt på omsetting frå naturleg språk til formallogisk språk, sanningstabellar som bevissystem i setningslogikken og tre-metoden i setnings- og predikatlogikk. Gir grunnlag for vidare studium i kognitiv vitenskap.', courseType: 'mandatory' },
			{ name: 'Introduksjon til programmering', code: 'INF100', institution: 'Universitetet i Bergen', degrees: ['Bachelorgrad i kognitiv vitenskap', 'Bachelorgrad i kunstig intelligens'], description: 'Praktisk innføring i programmering med eit moderne språk. Dekker variablar, uttrykk, kontrollflyt, tabellar og filhandtering.', skillTags: ['Python'], courseType: 'mandatory' },
			{ name: 'Kunnskapsrepresentasjon og Resonnering', code: 'INFO282', institution: 'Universitetet i Bergen', degrees: ['Bachelorgrad i kognitiv vitenskap', 'Bachelorgrad i kunstig intelligens'], description: 'Logikkbasert kunnskapsrepresentasjon og ulike former for resonnering, inkludert deduktiv, standard- og abduktiv resonnering. Dekker også resonnering om kunnskap, handling og endring i multi-agentsystem.', skillTags: ['Prolog'], courseType: 'mandatory' },
			{ name: 'Maskinlæring', code: 'INFO283', institution: 'Universitetet i Bergen', degrees: [], description: 'Innføring i maskinlæring og dataanalyse. Dekker grunnleggjande metodar for vegleia og ikkje-vegleia læring.', skillTags: ['Python'] },
			{ name: 'Maskinlæring', code: 'INFO284', institution: 'Universitetet i Bergen', degrees: ['Bachelorgrad i kognitiv vitenskap', 'Bachelorgrad i kunstig intelligens'], description: 'Vegleia læring med djupnelæring, ikkje-vegleia læring inkludert klustring og forsterkingslæring. Praktiske anvendingar i dataanalyse.', skillTags: ['Python', 'Maskinlæring'], replaces: 'INFO283', courseType: 'specialization', courseTypesByDegree: { 'Bachelorgrad i kunstig intelligens': 'mandatory' } },
			{ name: 'Objekt-orientert Programmering', code: 'INF101', institution: 'Universitetet i Bergen', degrees: ['Bachelorgrad i kognitiv vitenskap'], description: 'Vidareføring av programmering med fokus på kodekvalitet. Dekker abstraksjonar, objektorientert design, arv, polymorfi, generiske typar og testing.', skillTags: ['Java'], courseType: 'mandatory' },
			{ name: 'Språk og Kognisjon', code: 'LING122', institution: 'Universitetet i Bergen', degrees: ['Bachelorgrad i kognitiv vitenskap'], description: 'Kognisjonsvitskap relatert til språkleg kunnskap, språktileigning og bruk av språk. Utforskar psykologiske og kognitive aspekt ved språk.', courseType: 'mandatory' },
			{ name: 'Statistikk for Kognitiv Vitenskap', code: 'DASPSTAT', institution: 'Universitetet i Bergen', degrees: ['Bachelorgrad i kognitiv vitenskap'], description: 'Statistiske metodar og analyse retta mot kognitiv vitenskap. Dekker deskriptiv statistikk, hypotesetesting og dataanalyse for kognitive eksperiment.', skillTags: ['R'], courseType: 'mandatory' },
			{ name: 'Etikk i Kunstig Intelligens', code: 'AIKI210', institution: 'Universitetet i Bergen', degrees: ['Bachelorgrad i kunstig intelligens'], description: 'Forklarbar KI (XAI), rettferd, algoritmisk ansvarlighet og tillit, kunstig moral og ansvarleg bruk av KI. Inkluderer øving i populærvitskapleg formidling av KI.', skillTags: ['KI-etikk'], blogSlug: 'en-vurdering-av-den-etiske-bruken-av-ki-i-sosiale-medier', courseType: 'mandatory' },
			{ name: 'Innføring i kunstig intelligens', code: 'AIKI100', institution: 'Universitetet i Bergen', degrees: ['Bachelorgrad i kunstig intelligens'], description: 'Brei introduksjon til kunstig intelligens som disiplin, inkludert historisk utvikling, etiske implikasjonar og sentrale delområde som maskinlæring, robotikk og naturleg språkforståing.', courseType: 'mandatory' },
			{ name: 'Kunstige Agenter', code: 'AIKI110', institution: 'Universitetet i Bergen', degrees: ['Bachelorgrad i kunstig intelligens'], description: 'Innføring i kunstige agentar og multi-agentsystem, inkludert agentmodellering, autonom agentarkitektur, kontrollsystem og grunnleggjande robotikk.', skillTags: ['Python', 'ROS2'], courseType: 'mandatory' },
			{ name: 'Forskningsemne innen Kunstig Intelligens', code: 'INFO381', institution: 'Universitetet i Bergen', degrees: ['Mastergrad i informasjonsvitenskap'], description: 'Avanserte tema innan KI, inkludert kunstig liv, multi-agentsystem, maskinlæring, nevrale nettverk, genetiske algoritmer og naturleg språkprosessering.', skillTags: ['Python', 'Maskinlæring'], courseType: 'elective' },
			{ name: 'Forskningsemne innen Nettverk og Tekst-analyse', code: 'INFO371', institution: 'Universitetet i Bergen', degrees: ['Mastergrad i informasjonsvitenskap'], description: 'Metodar for analyse av tekst- og nettverksdata, inkludert språkmodellar, dokumentklustring, vegleia maskinlæring og nettverksmodellar.', skillTags: ['Python', 'NLP'], courseType: 'elective' },
			{ name: 'Forskingstema i menneske-maskin interaksjon (HCI)', code: 'INFO361', institution: 'Universitetet i Bergen', degrees: ['Mastergrad i informasjonsvitenskap'], description: 'Innføring i forskingsfeltet menneske-maskin-interaksjon (HCI). Dekker avanserte konsept og tilnærmingar til analyse og design av interaktive system.', courseType: 'elective' },
			{ name: 'Logikk for Multi-Agent Systemer', code: 'INFO382', institution: 'Universitetet i Bergen', degrees: ['Mastergrad i informasjonsvitenskap'], description: 'Formelle logikkar for resonnering om multi-agent-interaksjon, inkludert epistemisk logikk, temporallogikk, koalisjonslogikk og alternating-time temporal logic.', courseType: 'elective' },
			{ name: 'Masteroppgåve i Informasjonsvitskap', code: 'INFO390', institution: 'Universitetet i Bergen', degrees: ['Mastergrad i informasjonsvitenskap'], description: 'Sjølvstendig forskingsarbeid under rettleiing om eit relevant tema innanfor informasjonsvitskap. Studenten skal vise avansert kunnskap og vitskapleg metode, meistre bruk av kjelder, og gjere greie for problemstilling, metode og resultat.', courseType: 'mandatory' },
			{ name: 'Informatikkprosjekt I', code: 'INF218', institution: 'Universitetet i Bergen', degrees: ['Tilleggsemner'], description: 'Sjølvvalgt prosjektarbeid i informatikk gjennomført i samråd med ein rettleiar. Analyse av standardiserings- og evolusjonsprosessar for programmeringsspråk. Inkluderer programmering, dokumentasjon i form av teknisk rapport og munnleg presentasjon.' },
			{ name: 'Informatikkprosjekt II', code: 'INF319', institution: 'Universitetet i Bergen', degrees: ['Tilleggsemner'], description: 'Avansert prosjektarbeid i informatikk gjennomført i samråd med ein rettleiar. Inkluderer programmering, dokumentasjon i form av teknisk rapport og munnleg presentasjon.', skillTags: ['Python', 'NLP'], blogSlug: 'anvendelse-av-nlp-teknikker-på-tc39s-møtereferater' }
		],
		skills: [
			{
				category: 'Programmeringsspråk',
				skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'R', 'Prolog', 'Haskell'],
				profiles: ['developer']
			},
			{
				category: 'Rammeverk & biblioteker',
				skills: ['Svelte', 'Django', 'Flask', 'Hugo', 'Zola', 'React', 'ROS2'],
				profiles: ['developer']
			},
			{
				category: 'Databaser & sky',
				skills: ['PostgreSQL', 'Supabase', 'Cloudflare', 'Azure'],
				profiles: ['developer', 'systemadministrator']
			},
			{
				category: 'Verktøy & systemer',
				skills: ['Git', 'GitHub', 'Docker', 'Nginx', 'Linux', 'Shell-skripting', 'LaTeX', 'Markdown', 'Webhooks'],
				profiles: ['developer', 'systemadministrator']
			},
			{
				category: 'KI & datavitenskap',
				skills: ['Maskinlæring', 'NLP', 'Robotikk', 'Søkealgoritmer', 'KI-etikk'],
				profiles: ['developer']
			},
			{
				category: 'Ledelse & forretning',
				skills: ['Non-profit-ledelse', 'IT-ledelse', 'Prosjektledelse', 'Rekruttering', 'Regnskap', 'Budsjett', 'Merkevarebygging', 'Organisasjonsbygging', 'Vekststrategi'],
				profiles: ['administrator', 'organization-builder']
			},
			{
				category: 'Teknisk drift',
				skills: ['Systemadministrasjon', 'Teknisk brukerstøtte', 'Teknisk opplæring'],
				profiles: ['systemadministrator']
			},
			{
				category: 'Generelt',
				skills: ['Teamarbeid', 'Akademisk skriving']
			}
		],
		languages: [
			{ language: 'Norsk (bokmål)', proficiency: 'Morsmål' },
			{ language: 'Engelsk', proficiency: 'Flytende' },
			{ language: 'Tysk', proficiency: 'Grunnleggende' }
		],
		qualities: [
			{
				name: 'Åpenhet',
				description: 'Tror på åpen kildekode, deling av kunnskap og transparent kommunikasjon.'
			},
			{
				name: 'Engasjement',
				description: 'Motiveres av å skape engasjement og vekst i team og organisasjoner.'
			},
			{
				name: 'Relasjonsbygging',
				description: 'Bygger tillit og nettverk på tvers av fagmiljøer og organisasjoner.'
			},
			{
				name: 'Struktur og effektivitet',
				description: 'Forme og vedlikeholde organisasjonsstrukturer og prosedyrer som skalerer.'
			}
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
				liveUrl: 'https://cengelsen.no',
				skillTags: ['Hugo']
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
			title: 'Organization Developer || Technology Enthusiast || System Administrator || Open Source Advocate',
			bio: 'Technology enthusiast with experience in organizational leadership, software development and system administration. Passionate about creating engagement and growth through strategic communication and relationship building, with a focus on IT projects and open source. Loves shaping, maintaining and streamlining organizational structures and procedures.',
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
				],
				skillTags: ['Accounting', 'Budgeting', 'Growth Strategy', 'Brand Building', 'Recruitment', 'Project Management', 'Organization Development'],
				profiles: ['administrator', 'organization-builder']
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
				],
				skillTags: ['Svelte', 'Django', 'Supabase', 'Cloudflare', 'Git'],
				profiles: ['developer']
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
				],
				skillTags: ['IT Management', 'Recruitment'],
				profiles: ['developer', 'systemadministrator']
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
			company: 'Bergen Open Source',
			companyUrl: 'https://boskonf.no',
			role: 'Leader',
			startDate: '2025-02',
			description: [
				'Leader of the Bergen Open Source community and conference.'
			],
			skillTags: ['Non-Profit Management', 'Project Management', 'Organization Building', 'Git'],
			profiles: ['administrator', 'organization-builder']
		},
		{
			company: 'AI Safety Bergen',
			role: 'Chief Technology Developer',
			startDate: '2025-02',
			endDate: '2026-01',
			description: [
				'Technology lead for AI Safety Bergen.'
			],
			skillTags: ['Git'],
			profiles: ['developer']
		},
		{
			company: 'Hulen Bergen',
			companyUrl: 'https://hulen.no',
			role: 'IT Member',
			startDate: '2025-02',
			endDate: '2025-09',
			description: [
				'Contributed to IT operations and technical support for Hulen.'
			],
			skillTags: ['Git'],
			profiles: ['developer', 'systemadministrator']
		},
		{
			company: 'AI Safety Bergen',
			role: 'Member',
			startDate: '2024-01',
			endDate: '2026-01',
			description: [
				'Active member of AI Safety Bergen.'
			],
			skillTags: ['Git'],
			profiles: ['organization-builder']
		},
		{
			company: 'AI Safety Bergen',
			role: 'Course Facilitator',
			startDate: '2024-01',
			endDate: '2024-06',
			description: [
				'Facilitated courses on AI safety and AI alignment.'
			],
			skillTags: ['Git'],
			profiles: ['organization-builder']
		},
		{
			company: 'friByte',
			companyUrl: 'https://fribyte.no',
			role: 'Social Coordinator',
			startDate: '2023-08',
			endDate: '2024-03',
			description: [
				'Organized social events for members.'
			],
			skillTags: ['Git', 'Linux', 'System Administration'],
			profiles: ['organization-builder', 'systemadministrator']
		},
		{
			company: 'Det Akademiske Kvarter',
			companyUrl: 'https://kvarteret.no',
			role: 'IT Manager',
			startDate: '2022-02',
			endDate: '2026-01',
			description: [
				'Led the IT department and was responsible for technical infrastructure.'
			],
			skillTags: ['IT Management', 'Project Management', 'Recruitment', 'Organization Building', 'Azure', 'Git'],
			profiles: ['developer', 'administrator', 'systemadministrator']
		},
		{
			company: 'friByte',
			companyUrl: 'https://fribyte.no',
			role: 'President',
			startDate: '2021-12',
			endDate: '2022-12',
			description: [
				'Led the student organization that operates IT services for student associations in Bergen.'
			],
			skillTags: ['Non-Profit Management', 'Project Management', 'Recruitment', 'Organization Building', 'Git', 'Linux', 'System Administration'],
			profiles: ['administrator', 'organization-builder', 'systemadministrator']
		},
		{
			company: 'Phonofestivalen',
			role: 'Production Manager',
			startDate: '2021-09',
			endDate: '2022-02',
			description: [
				'Responsible for production and logistics during the festival.'
			],
			profiles: ['administrator']
		},
		{
			company: 'friByte',
			companyUrl: 'https://fribyte.no',
			role: 'Vice President',
			startDate: '2021-01',
			endDate: '2021-12',
			description: [
				'Assisted the president with daily operations and activity planning.'
			],
			skillTags: ['Git', 'Linux', 'System Administration'],
			profiles: ['administrator', 'organization-builder', 'systemadministrator']
		},
		{
			company: 'Studentersamfunnet i Bergen',
			role: 'IT Manager',
			startDate: '2018-08',
			endDate: '2020-06',
			description: [
				'Responsible for IT operations and technical infrastructure for Studentersamfunnet.'
			],
			skillTags: ['IT Management'],
			profiles: ['developer', 'administrator', 'systemadministrator']
		}
	],
	education: [
		{
			institution: 'University of Bergen',
				degree: 'Master\'s Degree',
				field: 'Information Science',
				startDate: '2024-08',
				endDate: '2026-07',
				description: 'Specialization in information architecture, user behaviour and digital communication.'
			},
			{
				institution: 'University of Bergen',
				degree: 'Bachelor\'s Degree',
				field: 'Cognitive Science',
				startDate: '2018-08',
				endDate: '2024-07',
				description: 'Consciousness, cognitive abilities and philosophy of AI. Specialization in computer science, philosophy and information science.'
			},
			{
				institution: 'University of Bergen',
				degree: 'Bachelor\'s Degree',
				field: 'Artificial Intelligence',
				startDate: '2022-08',
				endDate: '2024-07',
				description: 'Artificial agents, machine learning and development of AI solutions. Combines computer science and information science.'
			}
		],
		coursework: [
			{ name: 'Advanced Programming', code: 'INFO135', institution: 'University of Bergen', degrees: ['Bachelor\'s in Cognitive Science'], description: 'Data structures, algorithms, object-orientation, thread programming, and efficiency analysis. Also covers standards for structured data such as JSON, RDF, and XML.', skillTags: ['Python'], courseType: 'specialization' },
			{ name: 'Biological and Cognitive Psychology', code: 'PSYK120', institution: 'University of Bergen', degrees: ['Bachelor\'s in Cognitive Science'], description: 'The biological foundations of the nervous system, emotions, and learning, combined with cognitive theories of perception, memory, and reasoning.', courseType: 'mandatory' },
			{ name: 'Data Management', code: 'INFO125', institution: 'University of Bergen', degrees: ['Bachelor\'s in Cognitive Science'], description: 'Theory and practice of relational and NoSQL databases. Covers data modeling, normalization, query languages, and indexing principles.', skillTags: ['SQL'], courseType: 'specialization' },
			{ name: 'Deduction and Metalogic', code: 'LOG111', institution: 'University of Bergen', degrees: ['Bachelor\'s in Cognitive Science'], description: 'Natural deduction for propositional and first-order predicate logic with identity, model theory, and set theory. Includes metalogic and proofs of properties of formal proof systems.', courseType: 'mandatory' },
			{ name: 'Examen Facultatum, Basic Linguistics', code: 'EXFAC00SK', institution: 'University of Bergen', degrees: ['Bachelor\'s in Cognitive Science'], description: 'Introduction to phonetics, phonology, morphology, syntax, and semantics. Provides a theoretical and practical foundation for language-related studies.', courseType: 'mandatory' },
			{ name: 'Examen Philosophicum', code: 'EXPHIL-MNSEM', institution: 'University of Bergen', degrees: ['Bachelor\'s in Cognitive Science'], description: 'Philosophy of science, ethics, and fundamentals of logic and argumentation theory. Develops critical and analytical competence relevant to one\'s own field of study.', blogSlug: 'a-short-insight-into-the-philosophy-of-mind', courseType: 'mandatory' },
			{ name: 'Formal Methods for Information Science', code: 'INFO102', institution: 'University of Bergen', degrees: [], description: 'Fundamental formal concepts and methods in information science, including logic, set theory, relations, and functions.' },
			{ name: 'Formal Methods for Information Science', code: 'INFO104', institution: 'University of Bergen', degrees: ['Bachelor\'s in Cognitive Science', 'Bachelor\'s in Artificial Intelligence'], description: 'Elementary logic and set theory, relations, functions, graphs, and trees. Covers combinatorics, probability, information theory, and computability.', replaces: 'INFO102', courseType: 'specialization', courseTypesByDegree: { 'Bachelor\'s in Artificial Intelligence': 'mandatory' } },
			{ name: 'Functional Programming', code: 'INF122', institution: 'University of Bergen', degrees: ['Bachelor\'s in Cognitive Science'], description: 'The functional paradigm with recursion, higher-order functions, and immutable data structures. Programming in a functional language such as Haskell.', skillTags: ['Haskell'], courseType: 'mandatory' },
			{ name: 'Introduction to Innovation and Entrepreneurship', code: 'MCB201', institution: 'University of Bergen', degrees: ['Bachelor\'s in Cognitive Science'], description: 'Innovation and entrepreneurship theory with practical methodology. Development of business models through participatory design and concept development.', blogSlug: 'a-review-of-the-innovative-power-of-the-oculus-rift', courseType: 'elective' },
			{ name: 'Introduction to Cognitive Science', code: 'KOGVIT101', institution: 'University of Bergen', degrees: ['Bachelor\'s in Cognitive Science'], description: 'Interdisciplinary overview of cognition from computer science, linguistics, psychology, and philosophy. Covers knowledge representation, reasoning, learning, language, perception, and consciousness.', blogSlug: 'can-a-machine-understand-language', courseType: 'mandatory' },
			{ name: 'Introduction to Artificial Intelligence', code: 'INFO180', institution: 'University of Bergen', degrees: ['Bachelor\'s in Cognitive Science', 'Bachelor\'s in Artificial Intelligence'], description: 'Theoretical and practical foundations of AI including state-space search, knowledge representation, inference, and machine learning.', skillTags: ['Python', 'Search Algorithms'], courseType: 'specialization', courseTypesByDegree: { 'Bachelor\'s in Artificial Intelligence': 'mandatory' } },
			{ name: 'Introduction to Philosophy of Mind', code: 'FIL105', institution: 'University of Bergen', degrees: ['Bachelor\'s in Cognitive Science'], description: 'Modern philosophy of mind and the relationship between mental and physical properties. Covers behaviorism, identity theory, functionalism, and the problem of consciousness.', courseType: 'mandatory' },
			{ name: 'Introduction to Formal Logic', code: 'LOG110', institution: 'University of Bergen', degrees: ['Bachelor\'s in Cognitive Science'], description: 'Introduction to propositional logic and first-order predicate logic. Emphasis on translating natural language into formal logic, truth tables as a proof system in propositional logic, and the tree method in propositional and predicate logic. Provides a foundation for further study in cognitive science.', courseType: 'mandatory' },
			{ name: 'Introduction to Programming', code: 'INF100', institution: 'University of Bergen', degrees: ['Bachelor\'s in Cognitive Science', 'Bachelor\'s in Artificial Intelligence'], description: 'Practical introduction to programming using a modern language. Covers variables, expressions, control flow, arrays, and file handling.', skillTags: ['Python'], courseType: 'mandatory' },
			{ name: 'Knowledge Representation and Reasoning', code: 'INFO282', institution: 'University of Bergen', degrees: ['Bachelor\'s in Cognitive Science', 'Bachelor\'s in Artificial Intelligence'], description: 'Logic-based knowledge representation and various forms of reasoning including deductive, default, and abductive reasoning. Also covers reasoning about knowledge, action, and change in multi-agent systems.', skillTags: ['Prolog'], courseType: 'mandatory' },
			{ name: 'Machine Learning', code: 'INFO283', institution: 'University of Bergen', degrees: [], description: 'Introduction to machine learning and data analysis. Covers fundamental methods for supervised and unsupervised learning.', skillTags: ['Python'] },
			{ name: 'Machine Learning', code: 'INFO284', institution: 'University of Bergen', degrees: ['Bachelor\'s in Cognitive Science', 'Bachelor\'s in Artificial Intelligence'], description: 'Supervised learning with deep learning, unsupervised learning including clustering, and reinforcement learning. Practical applications in data analysis.', skillTags: ['Python', 'Machine Learning'], replaces: 'INFO283', courseType: 'specialization', courseTypesByDegree: { 'Bachelor\'s in Artificial Intelligence': 'mandatory' } },
			{ name: 'Object-Oriented Programming', code: 'INF101', institution: 'University of Bergen', degrees: ['Bachelor\'s in Cognitive Science'], description: 'Continuation of programming with focus on code quality. Covers abstractions, object-oriented design, inheritance, polymorphism, generics, and testing.', skillTags: ['Java'], courseType: 'mandatory' },
			{ name: 'Language and Cognition', code: 'LING122', institution: 'University of Bergen', degrees: ['Bachelor\'s in Cognitive Science'], description: 'Cognitive science related to linguistic knowledge, language acquisition, and language use. Explores the psychological and cognitive aspects of language.', courseType: 'mandatory' },
			{ name: 'Statistics for Cognitive Science', code: 'DASPSTAT', institution: 'University of Bergen', degrees: ['Bachelor\'s in Cognitive Science'], description: 'Statistical methods and analysis for cognitive science. Covers descriptive statistics, hypothesis testing, and data analysis for cognitive experiments.', skillTags: ['R'], courseType: 'mandatory' },
			{ name: 'Ethics in Artificial Intelligence', code: 'AIKI210', institution: 'University of Bergen', degrees: ['Bachelor\'s in Artificial Intelligence'], description: 'Explainable AI (XAI), fairness, algorithmic accountability and trust, artificial morality, and responsible use of AI. Includes practice in popular dissemination of AI.', skillTags: ['AI Ethics'], blogSlug: 'examination-of-the-ethical-use-of-ai-in-social-media', courseType: 'mandatory' },
			{ name: 'Introduction to Artificial Intelligence', code: 'AIKI100', institution: 'University of Bergen', degrees: ['Bachelor\'s in Artificial Intelligence'], description: 'Broad introduction to artificial intelligence as a discipline, including historical development, ethical implications, and key subfields such as machine learning, robotics, and natural language understanding.', courseType: 'mandatory' },
			{ name: 'Artificial Agents', code: 'AIKI110', institution: 'University of Bergen', degrees: ['Bachelor\'s in Artificial Intelligence'], description: 'Introduction to artificial agents and multi-agent systems, including agent modeling, autonomous agent architecture, control systems, and basic robotics.', skillTags: ['Python', 'ROS2'], courseType: 'mandatory' },
			{ name: 'Research Topic in Artificial Intelligence', code: 'INFO381', institution: 'University of Bergen', degrees: ['Master\'s in Information Science'], description: 'Advanced topics in AI including artificial life, multi-agent systems, machine learning, neural networks, genetic algorithms, and natural language processing.', skillTags: ['Python', 'Machine Learning'], courseType: 'elective' },
			{ name: 'Research Topic in Networks and Text Analysis', code: 'INFO371', institution: 'University of Bergen', degrees: ['Master\'s in Information Science'], description: 'Methods for analyzing text and network data, including language models, document clustering, supervised machine learning, and network models.', skillTags: ['Python', 'NLP'], courseType: 'elective' },
			{ name: 'Research Topics in Human-Computer Interaction', code: 'INFO361', institution: 'University of Bergen', degrees: ['Master\'s in Information Science'], description: 'Introduction to the HCI research field. Covers advanced concepts and approaches for analyzing and designing interactive systems.', courseType: 'elective' },
			{ name: 'Logic for Multi-Agent Systems', code: 'INFO382', institution: 'University of Bergen', degrees: ['Master\'s in Information Science'], description: 'Formal logics for reasoning about multi-agent interaction, including epistemic logic, temporal logic, coalition logic, and alternating-time temporal logic.', courseType: 'elective' },
			{ name: 'Master\'s Thesis in Information Science', code: 'INFO390', institution: 'University of Bergen', degrees: ['Master\'s in Information Science'], description: 'Independent research project under supervision on a relevant topic in information science. Demonstrates advanced knowledge and scientific methodology, including problem formulation, literature review, data collection, analysis and critical evaluation.', courseType: 'mandatory' },
			{ name: 'Self-chosen Informatics Project I', code: 'INF218', institution: 'University of Bergen', degrees: ['Additional courses'], description: 'Self-chosen project work in informatics carried out with a supervisor. Project: analyzing programming language standardization and evolution processes. Includes programming, documentation in the form of a technical report, and an oral presentation.' },
			{ name: 'Informatics Project II', code: 'INF319', institution: 'University of Bergen', degrees: ['Additional courses'], description: 'Advanced project work in informatics carried out with a supervisor. Includes programming, documentation in the form of a technical report, and an oral presentation.', skillTags: ['Python', 'NLP'], blogSlug: 'applying-nlp-techniques-to-tc39s-meeting-notes' }
		],
		skills: [
			{
				category: 'Programming Languages',
				skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'R', 'Prolog', 'Haskell'],
				profiles: ['developer']
			},
			{
				category: 'Frameworks & Libraries',
				skills: ['Svelte', 'Django', 'Flask', 'Hugo', 'Zola', 'React', 'ROS2'],
				profiles: ['developer']
			},
			{
				category: 'Databases & Cloud',
				skills: ['PostgreSQL', 'Supabase', 'Cloudflare', 'Azure'],
				profiles: ['developer', 'systemadministrator']
			},
			{
				category: 'Tools & Systems',
				skills: ['Git', 'GitHub', 'Docker', 'Nginx', 'Linux', 'Shell Scripting', 'LaTeX', 'Markdown', 'Webhooks'],
				profiles: ['developer', 'systemadministrator']
			},
			{
				category: 'AI & Data Science',
				skills: ['Machine Learning', 'NLP', 'Robotics', 'Search Algorithms', 'AI Ethics'],
				profiles: ['developer']
			},
			{
				category: 'Leadership & Business',
				skills: ['Non-Profit Management', 'IT Management', 'Project Management', 'Recruitment', 'Accounting', 'Budgeting', 'Brand Building', 'Organization Building', 'Growth Strategy'],
				profiles: ['administrator', 'organization-builder']
			},
			{
				category: 'Technical Operations',
				skills: ['System Administration', 'Technical Support', 'Technical Training'],
				profiles: ['systemadministrator']
			},
			{
				category: 'General',
				skills: ['Teamwork', 'Academic Writing']
			}
		],
		languages: [
			{ language: 'Norwegian (Bokmål)', proficiency: 'Native' },
			{ language: 'English', proficiency: 'Fluent' },
			{ language: 'German', proficiency: 'Basic' }
		],
		qualities: [
			{
				name: 'Transparency',
				description: 'Believes in open source, knowledge sharing and transparent communication.'
			},
			{
				name: 'Engagement',
				description: 'Motivated by creating engagement and growth in teams and organizations.'
			},
			{
				name: 'Relationship Building',
				description: 'Builds trust and networks across professional communities and organizations.'
			},
			{
				name: 'Structure and Efficiency',
				description: 'Shapes and maintains organizational structures and procedures that scale.'
			}
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
				liveUrl: 'https://cengelsen.no',
				skillTags: ['Hugo']
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
