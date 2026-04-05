<script lang="ts">
    import type { CvData, CvProfile, CvSectionKey } from '../../types/cv.types';
    import type { Translations } from '../../types/i18n.types';
    import Fa from 'svelte-fa';
    import { faPrint } from '@fortawesome/free-solid-svg-icons';
    import CvHeader from './CvHeader.svelte';
    import CvSection from './CvSection.svelte';
    import WorkExperience from './WorkExperience.svelte';
    import Education from './Education.svelte';
    import Skills from './Skills.svelte';
    import Languages from './Languages.svelte';
    import Certificates from './Certificates.svelte';
    import Projects from './Projects.svelte';
    import ContactInfo from './ContactInfo.svelte';
    import ProfileSelector from './ProfileSelector.svelte';

    export let cv: CvData;
    export let t: Translations;
    export let activeProfile: CvProfile | null = null;
    export let lang: string;

    const defaultAccent = 'oklch(80% 0.16 75)';
    const defaultSections: CvSectionKey[] = [
        'experience', 'volunteer', 'education', 'skills',
        'languages', 'certificates', 'projects', 'contact'
    ];

    $: sections = activeProfile ? activeProfile.sections : defaultSections;
    $: summary = activeProfile ? activeProfile.summary : cv.summary;
    $: accentColor = activeProfile?.accentColor ?? defaultAccent;
    $: profileId = activeProfile?.id ?? 'all';

    function getSectionTitle(key: CvSectionKey): string {
        const titles: Record<CvSectionKey, string> = {
            experience: t.cv.experience,
            volunteer: t.cv.volunteer,
            education: t.cv.education,
            skills: t.cv.skills,
            languages: t.cv.languages,
            certificates: t.cv.certificates,
            projects: t.cv.projects,
            contact: t.cv.contact
        };
        return titles[key];
    }

    function hasEntries(key: CvSectionKey): boolean {
        const data = cv[key];
        return Array.isArray(data) && data.length > 0;
    }

    function handlePrint() {
        window.print();
    }
</script>

<div class="cv-page" data-profile={profileId} style="--cv-accent: {accentColor}">
    <CvHeader {summary} />

    <div class="cv-toolbar">
        <ProfileSelector activeProfileId={activeProfile?.id ?? null} {lang} />
        <button class="print-btn" on:click={handlePrint} aria-label={t.cv.print}>
            <Fa icon={faPrint} />
            {t.cv.print}
        </button>
    </div>

    {#each sections as sectionKey (sectionKey)}
        {#if hasEntries(sectionKey)}
            <CvSection title={getSectionTitle(sectionKey)} section={sectionKey}>
                {#if sectionKey === 'experience'}
                    <WorkExperience entries={cv.experience} presentLabel={t.cv.present} />
                {:else if sectionKey === 'volunteer'}
                    <WorkExperience entries={cv.volunteer} presentLabel={t.cv.present} />
                {:else if sectionKey === 'education'}
                    <Education entries={cv.education} presentLabel={t.cv.present} />
                {:else if sectionKey === 'skills'}
                    <Skills categories={cv.skills} />
                {:else if sectionKey === 'languages'}
                    <Languages entries={cv.languages} />
                {:else if sectionKey === 'certificates'}
                    <Certificates entries={cv.certificates} viewCredentialLabel={t.cv.viewCredential} />
                {:else if sectionKey === 'projects'}
                    <Projects entries={cv.projects} sourceLabel={t.cv.viewProject} liveDemoLabel={t.cv.liveDemo} />
                {:else if sectionKey === 'contact'}
                    <ContactInfo entries={cv.contact} />
                {/if}
            </CvSection>
        {/if}
    {/each}
</div>

<style>
    .cv-page {
        width: 100%;
        max-width: var(--content-max-width);
        margin: 0 auto;
        padding: var(--space-xl) var(--space-lg);
    }

    .cv-toolbar {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-sm);
        margin-bottom: var(--space-2xl);
    }

    .print-btn {
        display: inline-flex;
        align-items: center;
        gap: var(--space-xs);
        padding: 0.2rem 0.75rem;
        border-radius: var(--radius-md);
        font-size: 0.75rem;
        font-weight: 400;
        color: var(--color-muted);
        background-color: transparent;
        border: 1px dashed var(--color-muted);
        cursor: pointer;
        transition: color 0.2s ease, border-color 0.2s ease;
    }

    .print-btn:hover {
        color: var(--color-accent);
        border-color: var(--color-accent);
    }

    @media (max-width: 700px) {
        .cv-page {
            padding: var(--space-lg) var(--space-md);
        }
    }

    /* ─── Print styles ────────────────────────────────────────────────── */
    @media print {
        .cv-page {
            max-width: none;
            padding: 0;
            margin: 0;
            font-size: 10pt;
            line-height: 1.4;
            color: #1a1a1a;
            background: white;
            --color-accent: var(--cv-accent);
            --color-dark: #1a1a1a;
            --color-mid: #333;
            --color-muted: #555;
            --color-surface: transparent;
            --color-chrome-border: var(--cv-accent);
            --shadow-sm: none;
            --shadow-md: none;
            --shadow-lg: none;
        }

        .cv-toolbar {
            display: none !important;
        }

        /* ── Header ─────────────────────────────────────────────── */
        .cv-page :global(.cv-header) {
            margin-bottom: 0.6rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid var(--cv-accent);
            text-align: center;
        }

        .cv-page :global(.cv-name) {
            font-size: 18pt;
            color: #1a1a1a;
            margin-bottom: 2pt;
        }

        .cv-page :global(.cv-title) {
            font-size: 11pt;
            color: var(--cv-accent);
            margin-bottom: 2pt;
        }

        .cv-page :global(.cv-location) {
            font-size: 9pt;
            color: #555;
            margin-bottom: 4pt;
        }

        .cv-page :global(.cv-bio) {
            font-size: 9pt;
            color: #333;
            max-width: none;
        }

        /* ── Sections ───────────────────────────────────────────── */
        .cv-page :global(.cv-section) {
            margin-bottom: 0.6rem;
            break-inside: avoid;
        }

        .cv-page :global(.cv-section-title) {
            font-size: 10pt;
            font-weight: 700;
            margin-bottom: 0.3rem;
            padding-bottom: 2pt;
            color: var(--cv-accent);
            border-bottom: 1.5px solid var(--cv-accent);
        }

        .cv-page :global(.cv-section-content) {
            gap: 0.4rem;
        }

        /* ── Timeline (experience, volunteer, education) ─────── */
        .cv-page :global(.timeline) {
            gap: 0.4rem;
            border-left: 2px solid var(--cv-accent);
            padding-left: 0.75rem;
        }

        .cv-page :global(.timeline-entry) {
            break-inside: avoid;
        }

        .cv-page :global(.timeline-entry::before) {
            width: 8px;
            height: 8px;
            left: calc(-0.75rem - 5px);
            top: 4pt;
            background-color: var(--cv-accent);
        }

        .cv-page :global(.entry-role),
        .cv-page :global(.entry-degree) {
            font-size: 10pt;
            font-weight: 600;
            color: #1a1a1a;
        }

        .cv-page :global(.entry-company),
        .cv-page :global(.entry-institution) {
            font-size: 9pt;
            color: #333;
            margin-top: 1pt;
        }

        .cv-page :global(.entry-company a) {
            color: var(--cv-accent);
            text-decoration: none;
        }

        .cv-page :global(.entry-dates) {
            font-size: 8pt;
            color: #555;
        }

        .cv-page :global(.entry-description) {
            font-size: 9pt;
            color: #333;
            margin-top: 2pt;
            padding-left: 1rem;
            line-height: 1.35;
        }

        .cv-page :global(.entry-description li) {
            margin-bottom: 1pt;
        }

        /* ── Skills ─────────────────────────────────────────────── */
        .cv-page :global(.skills-grid) {
            gap: 0.3rem;
        }

        .cv-page :global(.skill-group) {
            gap: 0.2rem;
        }

        .cv-page :global(.skill-category) {
            font-size: 9pt;
            color: #1a1a1a;
        }

        .cv-page :global(.skill-tags) {
            gap: 3pt;
        }

        .cv-page :global(.skill-tag) {
            font-size: 8pt;
            padding: 1pt 4pt;
            background-color: transparent;
            border: 1px solid var(--cv-accent);
            color: var(--cv-accent);
        }

        /* ── Languages ──────────────────────────────────────────── */
        .cv-page :global(.languages-list) {
            gap: 2pt;
        }

        .cv-page :global(.language-item) {
            padding: 2pt 6pt;
            background: transparent;
            border-bottom: 1px solid #e0e0e0;
            border-radius: 0;
        }

        .cv-page :global(.language-name) {
            font-size: 9pt;
            color: #1a1a1a;
        }

        .cv-page :global(.language-proficiency) {
            font-size: 8pt;
            color: #555;
        }

        /* ── Certificates ───────────────────────────────────────── */
        .cv-page :global(.certificates-list) {
            gap: 0.25rem;
        }

        .cv-page :global(.cert-item) {
            padding: 4pt 6pt;
            background: transparent;
            border: none;
            border-bottom: 1px solid #e0e0e0;
            border-radius: 0;
            break-inside: avoid;
        }

        .cv-page :global(.cert-name) {
            font-size: 9pt;
            color: #1a1a1a;
        }

        .cv-page :global(.cert-issuer) {
            font-size: 8pt;
            color: #333;
        }

        .cv-page :global(.cert-date) {
            font-size: 8pt;
            color: #555;
        }

        .cv-page :global(.cert-link) {
            font-size: 8pt;
            color: var(--cv-accent);
        }

        /* ── Projects ───────────────────────────────────────────── */
        .cv-page :global(.projects-grid) {
            grid-template-columns: 1fr;
            gap: 0.3rem;
        }

        .cv-page :global(.project-card) {
            padding: 4pt 6pt;
            background: transparent;
            border: none;
            border-bottom: 1px solid #e0e0e0;
            border-radius: 0;
            box-shadow: none;
            break-inside: avoid;
        }

        .cv-page :global(.project-name) {
            font-size: 9pt;
            color: #1a1a1a;
            margin-bottom: 2pt;
        }

        .cv-page :global(.project-description) {
            font-size: 8pt;
            color: #333;
            margin-bottom: 3pt;
        }

        .cv-page :global(.project-tech) {
            gap: 2pt;
            margin-bottom: 3pt;
        }

        .cv-page :global(.tech-tag) {
            font-size: 7pt;
            padding: 1pt 3pt;
            background-color: transparent;
            border: 1px solid var(--cv-accent);
            color: var(--cv-accent);
        }

        .cv-page :global(.project-links) {
            gap: 0.5rem;
        }

        .cv-page :global(.project-link) {
            font-size: 8pt;
            color: var(--cv-accent);
        }

        /* ── Contact ────────────────────────────────────────────── */
        .cv-page :global(.contact-list) {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 0.4rem;
        }

        .cv-page :global(.contact-item) {
            padding: 3pt 6pt;
            background: transparent;
            border: none;
            gap: 0.3rem;
        }

        .cv-page :global(.contact-icon) {
            font-size: 10pt;
            width: auto;
            color: var(--cv-accent);
        }

        .cv-page :global(.contact-details) {
            flex-direction: row;
            gap: 0.25rem;
            align-items: baseline;
        }

        .cv-page :global(.contact-platform) {
            font-size: 8pt;
            color: #1a1a1a;
        }

        .cv-page :global(.contact-platform)::after {
            content: ':';
        }

        .cv-page :global(.contact-label) {
            font-size: 8pt;
            color: var(--cv-accent);
        }

        /* ─── Developer: two-column layout ──────────────────────── */
        .cv-page[data-profile="developer"] {
            display: grid;
            grid-template-columns: 1fr 200px;
            gap: 0 1rem;
        }

        .cv-page[data-profile="developer"] :global(.cv-header) {
            grid-column: 1 / -1;
        }

        .cv-page[data-profile="developer"] :global([data-section="skills"]),
        .cv-page[data-profile="developer"] :global([data-section="languages"]),
        .cv-page[data-profile="developer"] :global([data-section="certificates"]),
        .cv-page[data-profile="developer"] :global([data-section="contact"]) {
            grid-column: 2;
        }

        .cv-page[data-profile="developer"] :global([data-section="experience"]),
        .cv-page[data-profile="developer"] :global([data-section="projects"]),
        .cv-page[data-profile="developer"] :global([data-section="education"]),
        .cv-page[data-profile="developer"] :global([data-section="volunteer"]) {
            grid-column: 1;
        }

        .cv-page[data-profile="developer"] :global(.contact-list) {
            flex-direction: column;
        }

        .cv-page[data-profile="developer"] :global(.contact-details) {
            flex-direction: column;
            gap: 0;
        }

        .cv-page[data-profile="developer"] :global(.contact-platform)::after {
            content: '';
        }

        .cv-page[data-profile="developer"] :global(.skill-tag) {
            font-size: 7pt;
            padding: 1pt 3pt;
        }

        .cv-page[data-profile="developer"] :global(.cv-section-title) {
            border-bottom: none;
            border-left: 3px solid var(--cv-accent);
            padding-left: 6pt;
            padding-bottom: 0;
        }

        .cv-page[data-profile="developer"] :global(.skill-tag),
        .cv-page[data-profile="developer"] :global(.tech-tag) {
            background-color: oklch(55% 0.2 250 / 0.1);
        }

        /* ─── Administrator: minimal corporate ─────────────────────── */
        .cv-page[data-profile="administrator"] :global(.timeline) {
            border-left: none;
            padding-left: 0;
        }

        .cv-page[data-profile="administrator"] :global(.timeline-entry::before) {
            display: none;
        }

        .cv-page[data-profile="administrator"] :global(.timeline-entry) {
            padding-bottom: 0.3rem;
            border-bottom: 1px solid #e8e8e8;
        }

        .cv-page[data-profile="administrator"] :global(.entry-dates) {
            font-size: 9pt;
            font-weight: 600;
        }

        /* ─── Community builder: warm and open ─────────────────────── */
        .cv-page[data-profile="community-builder"] :global(.cv-section) {
            margin-bottom: 0.8rem;
        }

        .cv-page[data-profile="community-builder"] :global(.cv-section-title) {
            border-bottom-width: 2.5px;
        }

        .cv-page[data-profile="community-builder"] :global(.cv-section-content) {
            gap: 0.5rem;
        }

        .cv-page[data-profile="community-builder"] :global(.timeline) {
            gap: 0.5rem;
        }
    }
</style>
