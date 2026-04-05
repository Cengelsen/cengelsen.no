<script lang="ts">
    import type { CvData, CvProfile, CvSectionKey } from '../../types/cv.types';
    import type { Translations } from '../../types/i18n.types';
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

    const defaultSections: CvSectionKey[] = [
        'experience', 'volunteer', 'education', 'skills',
        'languages', 'certificates', 'projects', 'contact'
    ];

    $: sections = activeProfile ? activeProfile.sections : defaultSections;
    $: summary = activeProfile ? activeProfile.summary : cv.summary;

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
</script>

<div class="cv-page">
    <CvHeader {summary} />
    <ProfileSelector activeProfileId={activeProfile?.id ?? null} {lang} />

    {#each sections as section (section)}
        {#if hasEntries(section)}
            <CvSection title={getSectionTitle(section)}>
                {#if section === 'experience'}
                    <WorkExperience entries={cv.experience} presentLabel={t.cv.present} />
                {:else if section === 'volunteer'}
                    <WorkExperience entries={cv.volunteer} presentLabel={t.cv.present} />
                {:else if section === 'education'}
                    <Education entries={cv.education} presentLabel={t.cv.present} />
                {:else if section === 'skills'}
                    <Skills categories={cv.skills} />
                {:else if section === 'languages'}
                    <Languages entries={cv.languages} />
                {:else if section === 'certificates'}
                    <Certificates entries={cv.certificates} viewCredentialLabel={t.cv.viewCredential} />
                {:else if section === 'projects'}
                    <Projects entries={cv.projects} sourceLabel={t.cv.viewProject} liveDemoLabel={t.cv.liveDemo} />
                {:else if section === 'contact'}
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

    @media (max-width: 700px) {
        .cv-page {
            padding: var(--space-lg) var(--space-md);
        }
    }
</style>
