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
					'Samarbeider med styret for å gjennomføre daglig drift og langsiktig planlegging.',
					'Tar initiativ til organisasjonsendringer for effektivisering.',
					'Leder IT-gruppen.'
				],
				skillTags: ['Markedsføring', 'Regnskap', 'Visma', 'Budsjett', 'Kundeforhold', 'Organisasjonsutvikling', 'Styresamarbeid'],
				profiles: ['administrator', 'organization-builder']
			},
			{
				company: 'Nordic USV AS',
				companyUrl: 'https://nordicusv.com',
				role: 'Fullstack-utvikler (15%)',
				startDate: '2023-07',
				endDate: '2024-09',
				description: [
					'Utviklet frontend og Backend i Django for egen B2B-nettplattform.',
					'Utviklet samme nettplattform på nytt i Svelte og Supabase.',
					'Ansvarlig for sky-arkitekturen og CI/CD-prosesser.',
					'Var aktivt involvert i produktutvikling og brukeropplevelse.'
				],
				skillTags: ['Django', 'Svelte', 'Supabase', 'Cloudflare', 'GitHub', 'Docker', 'CI/CD', 'Sky-arkitektur', 'Produktutvikling', 'UX'],
				profiles: ['developer', 'ai-specialist']
			},
			{
				company: 'Studentradioen i Bergen',
				companyUrl: 'https://srib.no',
				role: 'Teknisk sjef (40%)',
				startDate: '2018-08',
				endDate: '2022-12',
				description: [
					'Overordnet radioteknisk ansvar for hele studentradioen.',
					'Vedlikeholdt og utviklet DigaSystem-økosystemet for 10+ arbeidsstasjoner.',
					'Håndterte konfigurering av fysiske maskiner på samme nettverk.',
					'Ansvarlig for driften av DHD-miksere, Presonus 32SL miksere og tilhørende programvare.',
					'Planlagte større innkjøp for tekniske oppgraderinger.',
					'Ledet en gruppe frivillige i teknisk gruppe.'
				],
				skillTags: ['DigaSystem', 'Django', 'WordPress', 'Radioteknikk', 'Systemadministrasjon', 'Nettverksadministrasjon', 'Teknisk drift', 'Innkjøpsplanlegging', 'Rekruttering'],
				profiles: ['developer', 'systemadministrator']
			},
			{
				company: 'Forsvaret',
				role: 'Radiooperatør (100%)',
				startDate: '2017-01',
				endDate: '2018-06',
				description: [
					'Patruljert med både indre og ytre kystvakt langs hele norske kysten.',
					'Ansvarlig for håndtering av krypterte meldingstjenester.',
					'Sikkerhetsklarert til "Strengt hemmelig".',
					'Forvaltet interne graderte dokumenter og meldinger.',
					'Gjennomførte skift både på dekk, bysse og bro på rotasjon.',
					'Oppnådde graden \'Ledende Menig\' ila. tjenesten.'
				],
				skillTags: ['Radiokommunikasjon', 'Kryptert kommunikasjon', 'IT-sikkerhet', 'Operativ drift', 'Dokumenthåndtering'],
				profiles: []
			}
		],
	volunteer: [
		{
			company: 'friByte',
			companyUrl: 'https://fribyte.no',
			role: 'Kommunikasjonsansvarlig',
			startDate: '2026-08',
			description: [
				'Ansvarlig for organisasjonens kommunikasjon og synlighet.'
			],
			skillTags: ['Merkevarebygging', 'Organisasjonsbygging'],
			profiles: ['administrator', 'organization-builder']
		},
		{
			company: 'Det Akademiske Kvarter',
			companyUrl: 'https://kvarteret.no',
			role: 'IT-nestleder',
			startDate: '2026-08',
			description: [
				'Assisterer IT-leder med drift av IT-avdelingen og teknisk infrastruktur.'
			],
			skillTags: ['IT-ledelse', 'Prosjektledelse', 'Rekruttering', 'Organisasjonsbygging', 'Azure', 'Git'],
			profiles: ['developer', 'administrator', 'systemadministrator']
		},
		{
			company: 'Bergen Open Source',
			companyUrl: 'https://boskonf.no',
			role: 'Leder',
			startDate: '2025-02',
			description: [
				'Medstifter av organisasjonen.',
				'Anskaffet økonomiansvarlig og PR-ansvarlig.',
				'Konferansier på Bergen Open Source 2025.',
				'Organiserte og gjennomførte Bergen Open Source 2025.'
			],
			skillTags: ['AstroJS', 'Codeberg', 'Git', 'Organisasjonsbygging', 'Arrangementsledelse', 'Konferanseledelse', 'Rekruttering', 'Prosjektledelse'],
			profiles: ['administrator', 'organization-builder', 'community-builder']
		},
		{
			company: 'AI Safety Bergen',
			role: 'Teknologidirektør',
			startDate: '2025-02',
			endDate: '2026-01',
			description: [
				'Utviklet hjemmesiden til organisasjonen.',
				'Deltok i regelmessige styremøter om langsiktig strategi.'
			],
			skillTags: ['Webutvikling', 'Hugo', 'Styrearbeid', 'Strategi'],
			profiles: ['developer', 'ai-specialist']
		},
		{
			company: 'Hulen Bergen',
			companyUrl: 'https://hulen.no',
			role: 'IT-medlem',
			startDate: '2025-02',
			endDate: '2025-09',
			description: [
				'Tok initiativ og utviklet et utkast til en intern personaldatabase.',
				'Rekrutterte aktivt flere frivillige.'
			],
			skillTags: ['Supabase', 'AstroJS', 'Databaseutvikling', 'Rekruttering', 'Produktutvikling', 'Git'],
			profiles: ['developer', 'systemadministrator']
		},
		{
			company: 'AI Safety Bergen',
			role: 'Kurstilrettelegger',
			startDate: '2024-01',
			endDate: '2024-06',
			description: [
				'Underviste pensum i AI Safety Governance.',
				'Loset en gruppe gjennom 8 uker med seminarer.'
			],
			skillTags: ['AI Safety', 'AI Safety Governance', 'Undervisning', 'Kursledelse', 'KI-etikk'],
			profiles: ['organization-builder', 'ai-specialist', 'researcher']
		},
		{
			company: 'AI Safety Bergen',
			role: 'Medlem',
			startDate: '2023-08',
			endDate: '2023-12',
			description: [
				'Aktivt medlem i AI Safety Bergen.'
			],
			skillTags: ['AI Safety'],
			profiles: ['organization-builder', 'ai-specialist']
		},
		{
			company: 'AI Safety Bergen',
			role: 'Kursdeltaker',
			startDate: '2023-02',
			endDate: '2023-04',
			description: [
				'Gjennomførte kurset AI Safety Policy.'
			],
			skillTags: ['AI Safety Policy', 'AI Safety'],
			profiles: ['ai-specialist', 'researcher']
		},
		{
			company: 'friByte',
			companyUrl: 'https://fribyte.no',
			role: 'Sosialansvarlig',
			startDate: '2023-08',
			endDate: '2024-03',
			description: [
				'Tok initiativ og organiserte til det sosiale for alle medlemmer.',
				'Dokumenterte diverse prosesser og tjenester i åpen wiki.',
				'Lokalansvarlig og konferansier for Bergen Open Source 2023.'
			],
			skillTags: ['Linux', 'ProxMox', 'Virtualisering', 'Systemadministrasjon', 'Git', 'Arrangementsledelse', 'Organisasjonsbygging', 'Dokumentasjon', 'Konferanseledelse'],
			profiles: ['organization-builder', 'systemadministrator', 'community-builder']
		},
		{
			company: 'Det Akademiske Kvarter',
			companyUrl: 'https://kvarteret.no',
			role: 'IT-leder',
			startDate: '2022-02',
			endDate: '2026-01',
			description: [
				'Ledet en gruppe frivillige IT-studenter.',
				'Overordnet ansvar for oppetid på kritiske skreddersydde digitale tjenester.',
				'Administrerte tjenester, databaser og fillagring i Azure.',
				'Videreutviklet hjemmeside i NextJS, personaldatabase i Angular, og API i .Net.',
				'Samarbeidet aktivt med styret for å opprette IT-gruppen som autonom gruppe internt.',
				'Hovedansvarlig for rekruttering til gruppen.'
			],
			skillTags: ['Azure', 'Next.js', 'Angular', '.NET', 'Rekruttering', 'Organisasjonsbygging', 'Drift og oppetid'],
			profiles: ['developer', 'administrator', 'systemadministrator']
		},
		{
			company: 'friByte',
			companyUrl: 'https://fribyte.no',
			role: 'Leder',
			startDate: '2021-12',
			endDate: '2022-11',
			description: [
				'Forsterket eksisterende kundeforhold og hentet inn nye kunder.',
				'Overordnet ansvar for rekruttering.',
				'Ansvarlig for feiring av 20-års jubileumet til organisasjonen.',
				'Tok initiativ til å starte en teknologi-podcast.',
				'Skaffet avtale med Innovasjonshub om faste lokaler.',
				'Tok initiativ til Django-workshop med Funbit og første årlige CTF-en.',
				'Innførte styrevervene Presseansvarlig og Sosialansvarlig.',
				'Dokumenterte relevante diverse prosesser og tjenester i åpen wiki.'
			],
			skillTags: ['Zola', 'Ganeti', 'Systemadministrasjon', 'Linux', 'FreeBSD', 'Apache', 'Nginx', 'ProxMox', 'Shell-skripting', 'Brannmur', 'Nettverk', 'Git', 'Wireguard', 'Docker', 'Kundeforhold', 'Rekruttering', 'Arrangementsledelse', 'Organisasjonsbygging', 'Dokumentasjon'],
			profiles: ['administrator', 'organization-builder', 'systemadministrator', 'community-builder']
		},
		{
			company: 'Phonofestivalen',
			role: 'Produksjonsansvarlig',
			startDate: '2021-09',
			endDate: '2022-01',
			description: [
				'Ansvarlig for teknisk gjennomføring av festivalen.',
				'Planlagte teknisk gjennomførelse.'
			],
			skillTags: ['Produksjonsledelse', 'Teknisk planlegging', 'Arrangementsledelse'],
			profiles: ['administrator', 'community-builder']
		},
		{
			company: 'friByte',
			companyUrl: 'https://fribyte.no',
			role: 'Nestleder',
			startDate: '2021-01',
			endDate: '2021-11',
			description: [
				'Bisto leder med fornyelse av organisasjonen.',
				'Håndterte alt administrativt, som innkalling og referat.',
				'Migrerte studentradioen sine tjenester over til VM i ProxMox.',
				'Etablerte kontakt med studentmediene.'
			],
			skillTags: ['Zola', 'Ganeti', 'Systemadministrasjon', 'Linux', 'FreeBSD', 'Apache', 'Nginx', 'ProxMox', 'Shell-skripting', 'Brannmur', 'Nettverk', 'Git', 'Wireguard', 'Docker', 'Administrasjon', 'Virtualisering', 'Migrering'],
			profiles: ['administrator', 'organization-builder', 'systemadministrator']
		},
		{
			company: 'friByte',
			companyUrl: 'https://fribyte.no',
			role: 'Medlem',
			startDate: '2020-09',
			endDate: '2020-12',
			description: [
				'Først tatt opp som ordinært medlem i friByte.'
			],
			profiles: ['organization-builder']
		},
		{
			company: 'Studentersamfunnet i Bergen',
			role: 'Sosialansvarlig for PR-etaten',
			startDate: '2019-08',
			endDate: '2020-06',
			description: [
				'Sosialansvarlig i PR-etaten til Studentersamfunnet i Bergen.'
			],
			skillTags: ['Arrangementsledelse'],
			profiles: ['organization-builder', 'community-builder']
		},
		{
			company: 'Studentersamfunnet i Bergen',
			role: 'IT-ansvarlig',
			startDate: '2018-08',
			endDate: '2019-06',
			description: [
				'Ansvarlig for å lage en ny nettside i Wordpress.'
			],
			skillTags: ['WordPress', 'Webutvikling'],
			profiles: ['developer', 'administrator', 'systemadministrator']
		}
	],
	education: [
		{
			institution: 'Universitetet i Bergen',
				degree: 'Mastergrad',
				field: 'Informasjonsvitenskap',
				startDate: '2024-08',
				endDate: '2026-06',
				description: 'Fordypning i informasjonsarkitektur, brukeratferd og digital kommunikasjon.'
			},
			{
				institution: 'Universitetet i Bergen',
				degree: 'Bachelorgrad',
				field: 'Kognitiv vitenskap',
				startDate: '2018-08',
				endDate: '2024-06',
				description: 'Bevissthet, kognitive evner og filosofi rundt KI. Fordypning i informatikk, filosofi og informasjonsvitenskap.'
			},
			{
				institution: 'Universitetet i Bergen',
				degree: 'Bachelorgrad',
				field: 'Kunstig intelligens',
				startDate: '2022-08',
				endDate: '2024-06',
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
				skills: ['Svelte', 'Django', 'Flask', 'Hugo', 'Zola', 'AstroJS', 'React', 'ROS2', 'Next.js', 'Angular', '.NET', 'WordPress', 'Webutvikling'],
				profiles: ['developer']
			},
			{
				category: 'Databaser & sky',
				skills: ['PostgreSQL', 'Supabase', 'Cloudflare', 'Azure', 'Databaseutvikling', 'Sky-arkitektur'],
				profiles: ['developer', 'systemadministrator']
			},
			{
				category: 'Verktøy & systemer',
				skills: ['Git', 'GitHub', 'Docker', 'Nginx', 'Linux', 'FreeBSD', 'Apache', 'Shell-skripting', 'LaTeX', 'Markdown', 'Webhooks', 'ProxMox', 'Ganeti', 'Wireguard', 'Codeberg', 'DigaSystem', 'Visma', 'CI/CD'],
				profiles: ['developer', 'systemadministrator']
			},
			{
				category: 'KI & datavitenskap',
				skills: ['Maskinlæring', 'NLP', 'Robotikk', 'Søkealgoritmer', 'KI-etikk', 'AI Safety', 'AI Safety Governance', 'AI Safety Policy'],
				profiles: ['developer', 'ai-specialist', 'researcher']
			},
			{
				category: 'Organisasjon & ledelse',
				skills: ['Prosjektledelse', 'Rekruttering', 'Organisasjonsbygging', 'Organisasjonsutvikling', 'Styrearbeid', 'Styresamarbeid', 'Administrasjon', 'Arrangementsledelse', 'Konferanseledelse', 'Kursledelse', 'Undervisning', 'Produksjonsledelse'],
				profiles: ['administrator', 'organization-builder', 'community-builder']
			},
			{
				category: 'Forretning & strategi',
				skills: ['Regnskap', 'Budsjett', 'Merkevarebygging', 'Vekststrategi', 'Kundeforhold', 'Markedsføring', 'Strategi', 'Dokumentasjon', 'Innkjøpsplanlegging', 'Produktutvikling', 'UX'],
				profiles: ['administrator', 'organization-builder']
			},
			{
				category: 'Infrastruktur & nettverk',
				skills: ['Systemadministrasjon', 'Virtualisering', 'Nettverksadministrasjon', 'Nettverk', 'Brannmur', 'Migrering', 'Drift og oppetid'],
				profiles: ['systemadministrator']
			},
			{
				category: 'Sikkerhet & operasjoner',
				skills: ['IT-sikkerhet', 'Kryptert kommunikasjon', 'Operativ drift', 'Dokumenthåndtering'],
				profiles: ['systemadministrator']
			},
			{
				category: 'Radioteknikk',
				skills: ['Radioteknikk', 'Radiokommunikasjon', 'Teknisk drift', 'Teknisk planlegging'],
				profiles: ['systemadministrator']
			},
			{
				category: 'Brukerstøtte & opplæring',
				skills: ['Teknisk brukerstøtte', 'Teknisk opplæring'],
				profiles: ['systemadministrator']
			},
			{
				category: 'Generelt',
				skills: ['Lagarbeid', 'Akademisk skriving']
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
				description: 'Motiveres av å skape engasjement og vekst i team og organisasjoner.',
				profiles: ['community-builder']
			},
			{
				name: 'Relasjonsbygging',
				description: 'Bygger tillit og nettverk på tvers av fagmiljøer og organisasjoner.',
				profiles: ['community-builder']
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
				skillTags: ['Hugo'],
				profiles: ['researcher']
			},
			{
				name: 'Bergen Open Source',
				description: 'Nettside for Bergen Open Source-konferansen.',
				techStack: ['Webteknologi'],
				liveUrl: 'https://boskonf.no',
				profiles: ['community-builder']
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
					'Collaborates with the board to run daily operations and long-term planning.',
					'Takes initiative on organizational changes to improve efficiency.',
					'Leads the IT group.'
				],
				skillTags: ['Marketing', 'Accounting', 'Visma', 'Budgeting', 'Customer Relations', 'Organization Development', 'Board Collaboration'],
				profiles: ['administrator', 'organization-builder']
			},
			{
				company: 'Nordic USV AS',
				companyUrl: 'https://nordicusv.com',
				role: 'Full-Stack Developer (15%)',
				startDate: '2023-07',
				endDate: '2024-09',
				description: [
					'Developed frontend and backend in Django for an in-house B2B web platform.',
					'Rebuilt the same web platform in Svelte and Supabase.',
					'Responsible for cloud architecture and CI/CD processes.',
					'Actively involved in product development and user experience.'
				],
				skillTags: ['Django', 'Svelte', 'Supabase', 'Cloudflare', 'GitHub', 'Docker', 'CI/CD', 'Cloud Architecture', 'Product Development', 'UX'],
				profiles: ['developer', 'ai-specialist']
			},
			{
				company: 'Studentradioen i Bergen',
				companyUrl: 'https://srib.no',
				role: 'Technical Director (40%)',
				startDate: '2018-08',
				endDate: '2022-12',
				description: [
					'Overall radio technical responsibility for the entire student radio station.',
					'Maintained and developed the DigaSystem ecosystem for 10+ workstations.',
					'Handled configuration of physical machines on the same network.',
					'Responsible for operating DHD mixers, Presonus 32SL mixers and associated software.',
					'Planned major purchases for technical upgrades.',
					'Led a group of volunteers in the technical team.'
				],
				skillTags: ['DigaSystem', 'Django', 'WordPress', 'Radio Engineering', 'System Administration', 'Network Administration', 'Technical Operations', 'Procurement Planning', 'Recruitment'],
				profiles: ['developer', 'systemadministrator']
			},
			{
				company: 'Norwegian Armed Forces',
				role: 'Radio Operator (100%)',
				startDate: '2017-01',
				endDate: '2018-06',
				description: [
					'Patrolled with both inner and outer coast guard along the entire Norwegian coast.',
					'Responsible for handling encrypted messaging services.',
					'Security cleared to "Strictly Secret".',
					'Managed internal classified documents and messages.',
					'Completed shifts on deck, in the galley and on the bridge on rotation.',
					'Achieved the rank of Leading Seaman during service.'
				],
				skillTags: ['Radio Communication', 'Encrypted Communication', 'IT Security', 'Operational Duty', 'Document Management'],
				profiles: []
			}
		],
	volunteer: [
		{
			company: 'friByte',
			companyUrl: 'https://fribyte.no',
			role: 'Communications Manager',
			startDate: '2026-08',
			description: [
				'Responsible for the organization\'s communication and visibility.'
			],
			skillTags: ['Brand Building', 'Organization Building'],
			profiles: ['administrator', 'organization-builder']
		},
		{
			company: 'Det Akademiske Kvarter',
			companyUrl: 'https://kvarteret.no',
			role: 'Deputy IT Manager',
			startDate: '2026-08',
			description: [
				'Assists the IT manager with IT department operations and technical infrastructure.'
			],
			skillTags: ['IT Management', 'Project Management', 'Recruitment', 'Organization Building', 'Azure', 'Git'],
			profiles: ['developer', 'administrator', 'systemadministrator']
		},
		{
			company: 'Bergen Open Source',
			companyUrl: 'https://boskonf.no',
			role: 'Leader',
			startDate: '2025-02',
			description: [
				'Co-founded the organization.',
				'Recruited a finance manager and a PR manager.',
				'Host of Bergen Open Source 2025.',
				'Organized and executed Bergen Open Source 2025.'
			],
			skillTags: ['AstroJS', 'Codeberg', 'Git', 'Organization Building', 'Event Management', 'Conference Management', 'Recruitment', 'Project Management'],
			profiles: ['administrator', 'organization-builder', 'community-builder']
		},
		{
			company: 'AI Safety Bergen',
			role: 'Chief Technology Developer',
			startDate: '2025-02',
			endDate: '2026-01',
			description: [
				'Developed the organization\'s website.',
				'Participated in regular board meetings on long-term strategy.'
			],
			skillTags: ['Web Development', 'Hugo', 'Board Work', 'Strategy'],
			profiles: ['developer', 'ai-specialist']
		},
		{
			company: 'Hulen Bergen',
			companyUrl: 'https://hulen.no',
			role: 'IT Member',
			startDate: '2025-02',
			endDate: '2025-09',
			description: [
				'Took initiative and developed a draft of an internal staff database.',
				'Actively recruited several volunteers.'
			],
			skillTags: ['Supabase', 'AstroJS', 'Database Development', 'Recruitment', 'Product Development', 'Git'],
			profiles: ['developer', 'systemadministrator']
		},
		{
			company: 'AI Safety Bergen',
			role: 'Course Facilitator',
			startDate: '2024-01',
			endDate: '2024-06',
			description: [
				'Taught curriculum in AI Safety Governance.',
				'Guided a group through 8 weeks of seminars.'
			],
			skillTags: ['AI Safety', 'AI Safety Governance', 'Teaching', 'Course Facilitation', 'AI Ethics'],
			profiles: ['organization-builder', 'ai-specialist', 'researcher']
		},
		{
			company: 'AI Safety Bergen',
			role: 'Member',
			startDate: '2023-08',
			endDate: '2023-12',
			description: [
				'Active member of AI Safety Bergen.'
			],
			skillTags: ['AI Safety'],
			profiles: ['organization-builder', 'ai-specialist']
		},
		{
			company: 'AI Safety Bergen',
			role: 'Course Participant',
			startDate: '2023-02',
			endDate: '2023-04',
			description: [
				'Completed the AI Safety Policy course.'
			],
			skillTags: ['AI Safety Policy', 'AI Safety'],
			profiles: ['ai-specialist', 'researcher']
		},
		{
			company: 'friByte',
			companyUrl: 'https://fribyte.no',
			role: 'Social Coordinator',
			startDate: '2023-08',
			endDate: '2024-03',
			description: [
				'Took initiative and organized social activities for all members.',
				'Documented various processes and services in an open wiki.',
				'Local coordinator and host for Bergen Open Source 2023.'
			],
			skillTags: ['Linux', 'ProxMox', 'Virtualization', 'System Administration', 'Git', 'Event Management', 'Organization Building', 'Documentation', 'Conference Management'],
			profiles: ['organization-builder', 'systemadministrator', 'community-builder']
		},
		{
			company: 'Det Akademiske Kvarter',
			companyUrl: 'https://kvarteret.no',
			role: 'IT Manager',
			startDate: '2022-02',
			endDate: '2026-01',
			description: [
				'Led a group of volunteer IT students.',
				'Overall responsibility for uptime of critical custom digital services.',
				'Administered services, databases and file storage in Azure.',
				'Further developed the website in NextJS, staff database in Angular, and API in .Net.',
				'Actively collaborated with the board to establish the IT group as an autonomous internal unit.',
				'Primary responsibility for recruiting to the group.'
			],
			skillTags: ['Azure', 'Next.js', 'Angular', '.NET', 'Recruitment', 'Organization Building', 'Operations & Uptime'],
			profiles: ['developer', 'administrator', 'systemadministrator']
		},
		{
			company: 'friByte',
			companyUrl: 'https://fribyte.no',
			role: 'President',
			startDate: '2021-12',
			endDate: '2022-11',
			description: [
				'Strengthened existing customer relationships and brought in new clients.',
				'Overall responsibility for recruitment.',
				'Responsible for celebrating the organization\'s 20th anniversary.',
				'Took initiative to start a technology podcast.',
				'Secured an agreement with Innovasjonshub for permanent office space.',
				'Took initiative for a Django workshop with Funbit and the first annual CTF.',
				'Introduced the board roles Press Manager and Social Coordinator.',
				'Documented relevant processes and services in an open wiki.'
			],
			skillTags: ['Zola', 'Ganeti', 'System Administration', 'Linux', 'FreeBSD', 'Apache', 'Nginx', 'ProxMox', 'Shell Scripting', 'Firewall', 'Networking', 'Git', 'Wireguard', 'Docker', 'Customer Relations', 'Recruitment', 'Event Management', 'Organization Building', 'Documentation'],
			profiles: ['administrator', 'organization-builder', 'systemadministrator', 'community-builder']
		},
		{
			company: 'Phonofestivalen',
			role: 'Production Manager',
			startDate: '2021-09',
			endDate: '2022-01',
			description: [
				'Responsible for the technical execution of the festival.',
				'Planned the technical execution.'
			],
			skillTags: ['Production Management', 'Technical Planning', 'Event Management'],
			profiles: ['administrator', 'community-builder']
		},
		{
			company: 'friByte',
			companyUrl: 'https://fribyte.no',
			role: 'Vice President',
			startDate: '2021-01',
			endDate: '2021-11',
			description: [
				'Supported the president in renewing the organization.',
				'Handled all administrative tasks, such as meeting invitations and minutes.',
				'Migrated the student radio\'s services to VMs in ProxMox.',
				'Established contact with the student media organizations.'
			],
			skillTags: ['Zola', 'Ganeti', 'System Administration', 'Linux', 'FreeBSD', 'Apache', 'Nginx', 'ProxMox', 'Shell Scripting', 'Firewall', 'Networking', 'Git', 'Wireguard', 'Docker', 'Administration', 'Virtualization', 'Migration'],
			profiles: ['administrator', 'organization-builder', 'systemadministrator']
		},
		{
			company: 'friByte',
			companyUrl: 'https://fribyte.no',
			role: 'Member',
			startDate: '2020-09',
			endDate: '2020-12',
			description: [
				'First admitted as an ordinary member of friByte.'
			],
			profiles: ['organization-builder']
		},
		{
			company: 'Studentersamfunnet i Bergen',
			role: 'Social Coordinator for the PR Department',
			startDate: '2019-08',
			endDate: '2020-06',
			description: [
				'Social coordinator in the PR department of Studentersamfunnet i Bergen.'
			],
			skillTags: ['Event Management'],
			profiles: ['organization-builder', 'community-builder']
		},
		{
			company: 'Studentersamfunnet i Bergen',
			role: 'IT Manager',
			startDate: '2018-08',
			endDate: '2019-06',
			description: [
				'Responsible for building a new website in WordPress.'
			],
			skillTags: ['WordPress', 'Web Development'],
			profiles: ['developer', 'administrator', 'systemadministrator']
		}
	],
	education: [
		{
			institution: 'University of Bergen',
				degree: 'Master\'s Degree',
				field: 'Information Science',
				startDate: '2024-08',
				endDate: '2026-06',
				description: 'Specialization in information architecture, user behaviour and digital communication.'
			},
			{
				institution: 'University of Bergen',
				degree: 'Bachelor\'s Degree',
				field: 'Cognitive Science',
				startDate: '2018-08',
				endDate: '2024-06',
				description: 'Consciousness, cognitive abilities and philosophy of AI. Specialization in computer science, philosophy and information science.'
			},
			{
				institution: 'University of Bergen',
				degree: 'Bachelor\'s Degree',
				field: 'Artificial Intelligence',
				startDate: '2022-08',
				endDate: '2024-06',
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
				skills: ['Svelte', 'Django', 'Flask', 'Hugo', 'Zola', 'AstroJS', 'React', 'ROS2', 'Next.js', 'Angular', '.NET', 'WordPress', 'Web Development'],
				profiles: ['developer']
			},
			{
				category: 'Databases & Cloud',
				skills: ['PostgreSQL', 'Supabase', 'Cloudflare', 'Azure', 'Database Development', 'Cloud Architecture'],
				profiles: ['developer', 'systemadministrator']
			},
			{
				category: 'Tools & Systems',
				skills: ['Git', 'GitHub', 'Docker', 'Nginx', 'Linux', 'FreeBSD', 'Apache', 'Shell Scripting', 'LaTeX', 'Markdown', 'Webhooks', 'ProxMox', 'Ganeti', 'Wireguard', 'Codeberg', 'DigaSystem', 'Visma', 'CI/CD'],
				profiles: ['developer', 'systemadministrator']
			},
			{
				category: 'AI & Data Science',
				skills: ['Machine Learning', 'NLP', 'Robotics', 'Search Algorithms', 'AI Ethics', 'AI Safety', 'AI Safety Governance', 'AI Safety Policy'],
				profiles: ['developer', 'ai-specialist', 'researcher']
			},
			{
				category: 'Organization & Leadership',
				skills: ['Project Management', 'Recruitment', 'Organization Building', 'Organization Development', 'Board Work', 'Board Collaboration', 'Administration', 'Event Management', 'Conference Management', 'Course Facilitation', 'Teaching', 'Production Management'],
				profiles: ['administrator', 'organization-builder', 'community-builder']
			},
			{
				category: 'Business & Strategy',
				skills: ['Accounting', 'Budgeting', 'Brand Building', 'Growth Strategy', 'Customer Relations', 'Marketing', 'Strategy', 'Documentation', 'Procurement Planning', 'Product Development', 'UX'],
				profiles: ['administrator', 'organization-builder']
			},
			{
				category: 'Infrastructure & Networking',
				skills: ['System Administration', 'Virtualization', 'Network Administration', 'Networking', 'Firewall', 'Migration', 'Operations & Uptime'],
				profiles: ['systemadministrator']
			},
			{
				category: 'Security & Operations',
				skills: ['IT Security', 'Encrypted Communication', 'Operational Duty', 'Document Management'],
				profiles: ['systemadministrator']
			},
			{
				category: 'Radio Engineering',
				skills: ['Radio Engineering', 'Radio Communication', 'Technical Operations', 'Technical Planning'],
				profiles: ['systemadministrator']
			},
			{
				category: 'Support & Training',
				skills: ['Technical Support', 'Technical Training'],
				profiles: ['systemadministrator']
			},
			{
				category: 'General',
				skills: ['Collaborative work', 'Academic Writing']
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
				description: 'Motivated by creating engagement and growth in teams and organizations.',
				profiles: ['community-builder']
			},
			{
				name: 'Relationship Building',
				description: 'Builds trust and networks across professional communities and organizations.',
				profiles: ['community-builder']
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
				skillTags: ['Hugo'],
				profiles: ['researcher']
			},
			{
				name: 'Bergen Open Source',
				description: 'Website for the Bergen Open Source conference.',
				techStack: ['Web Technologies'],
				liveUrl: 'https://boskonf.no',
				profiles: ['community-builder']
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
