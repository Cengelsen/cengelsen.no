<script lang="ts">
    import type { CvData, CvProfile, CvSectionKey } from '../../types/cv.types';
    import type { Translations } from '../../types/i18n.types';
    import Fa from 'svelte-fa';
    import { faDownload } from '@fortawesome/free-solid-svg-icons';
    import CvHeader from './CvHeader.svelte';
    import CvSection from './CvSection.svelte';
    import WorkExperience from './WorkExperience.svelte';
    import Education from './Education.svelte';
    import Coursework from './Coursework.svelte';
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
        'experience', 'volunteer', 'education', 'coursework', 'skills',
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
            coursework: t.cv.coursework,
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


</script>

<div class="cv-page" data-profile={profileId} style="--cv-accent: {accentColor}">
    <CvHeader {summary} />

    <div class="cv-toolbar">
        <ProfileSelector activeProfileId={activeProfile?.id ?? null} {lang} />
        <span
            class="download-btn disabled"
            aria-label={t.cv.download}
            aria-disabled="true"
        >
            <Fa icon={faDownload} />
            {t.cv.download}
        </span>
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
                {:else if sectionKey === 'coursework'}
                    <Coursework
                        entries={cv.coursework}
                        replacesLabel={t.cv.courseReplaces}
                        essayLabel={t.cv.courseEssay}
                        overlapLabel={t.cv.courseOverlap}
                        typeLabels={{ mandatory: t.cv.courseMandatory, specialization: t.cv.courseSpecialization, elective: t.cv.courseElective }}
                        {lang}
                    />
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

    .download-btn {
        display: inline-flex;
        align-items: center;
        gap: var(--space-xs);
        padding: 0.2rem 0.75rem;
        border-radius: var(--radius-md);
        font-size: 0.75rem;
        font-weight: 400;
        color: var(--color-accent);
        background-color: transparent;
        border: 1px solid var(--color-accent);
        text-decoration: none;
        cursor: pointer;
        transition: background-color 0.2s ease, color 0.2s ease;
    }

    .download-btn:hover {
        background-color: var(--color-accent);
        color: var(--color-bg, white);
    }

    .download-btn.disabled {
        opacity: 0.4;
        cursor: not-allowed;
        pointer-events: none;
    }

    @media (max-width: 700px) {
        .cv-page {
            padding: var(--space-lg) var(--space-md);
        }
    }

</style>
