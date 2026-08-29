<script lang="ts">
    import type { CvData, CvProfile, CvSectionKey } from '../../types/cv.types';
    import type { Translations } from '../../types/i18n.types';
    import type { Lang } from '../../lib/posts';
    import Fa from 'svelte-fa';
    import { faDownload } from '@fortawesome/free-solid-svg-icons';
    import CvHeader from './CvHeader.svelte';
    import CvSection from './CvSection.svelte';
    import WorkExperience from './WorkExperience.svelte';
    import CareerTimeline from './CareerTimeline.svelte';
    import Education from './Education.svelte';
    import Coursework from './Coursework.svelte';
    import Skills from './Skills.svelte';
    import Languages from './Languages.svelte';
    import Certificates from './Certificates.svelte';
    import Projects from './Projects.svelte';
    import Qualities from './Qualities.svelte';
    import ProfileSelector from './ProfileSelector.svelte';

    export let cv: CvData;
    export let t: Translations;
    export let activeProfile: CvProfile | null = null;
    export let lang: Lang;

    const defaultAccent = 'oklch(80% 0.16 75)';
    const defaultSections: CvSectionKey[] = [
        'qualities', 'experience', 'volunteer', 'education', 'coursework', 'skills',
        'languages', 'certificates', 'projects', 'contact'
    ];

    $: sections = activeProfile ? activeProfile.sections : defaultSections;
    $: contentSections = sections.filter((sectionKey) => sectionKey !== 'contact');
    $: summary = activeProfile ? activeProfile.summary : cv.summary;
    $: accentColor = activeProfile?.accentColor ?? defaultAccent;
    $: profileId = activeProfile?.id ?? 'all';
    $: skillsIndex = sections.indexOf('skills');

    function isCompactSection(sectionKey: CvSectionKey): boolean {
        return skillsIndex >= 0 && sections.indexOf(sectionKey) > skillsIndex;
    }

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
            qualities: t.cv.qualities,
            contact: t.cv.contact
        };
        return titles[key];
    }

    function hasEntries(key: CvSectionKey): boolean {
        const data = cv[key];
        return Array.isArray(data) && data.length > 0;
    }

    const careerSectionKeys = ['experience', 'volunteer', 'education'] as const;

    let careerView: 'list' | 'timeline' = 'list';

    $: hasCareerEntries = careerSectionKeys.some(
        (key) => sections.includes(key) && hasEntries(key)
    );
    $: firstCareerSection = careerSectionKeys.find(
        (key) => sections.includes(key) && hasEntries(key)
    );
    $: timelineExperience = sections.includes('experience') && hasEntries('experience') ? cv.experience : [];
    $: timelineVolunteer = sections.includes('volunteer') && hasEntries('volunteer') ? cv.volunteer : [];
    $: timelineEducation = sections.includes('education') && hasEntries('education') ? cv.education : [];
    $: careerToggleAnchor =
        sections.includes('experience') && hasEntries('experience')
            ? 'experience'
            : firstCareerSection;

    $: showCareerViewToggle = activeProfile === null;

    function isCareerSection(sectionKey: CvSectionKey): boolean {
        return (careerSectionKeys as readonly CvSectionKey[]).includes(sectionKey);
    }
</script>

<div class="cv-page" data-profile={profileId} style="--cv-accent: {accentColor}">
    <CvHeader {summary} contact={cv.contact} />

    <div class="cv-toolbar">
        <ProfileSelector activeProfileId={activeProfile?.id ?? null} {lang} allProfilesLabel={t.cv.allProfiles} />
        <span
            class="download-btn disabled"
            aria-label={t.cv.download}
            aria-disabled="true"
        >
            <Fa icon={faDownload} />
            {t.cv.download}
        </span>
    </div>

    {#each contentSections as sectionKey (sectionKey)}
        {#if sectionKey === careerToggleAnchor && hasCareerEntries && showCareerViewToggle}
            <div class="career-view-controls">
                <div class="view-toggle" role="group" aria-label={t.cv.careerViewToggle}>
                    <button
                        type="button"
                        class="view-btn"
                        class:active={careerView === 'list'}
                        aria-pressed={careerView === 'list'}
                        on:click={() => (careerView = 'list')}
                    >
                        {t.cv.careerViewList}
                    </button>
                    <button
                        type="button"
                        class="view-btn"
                        class:active={careerView === 'timeline'}
                        aria-pressed={careerView === 'timeline'}
                        on:click={() => (careerView = 'timeline')}
                    >
                        {t.cv.careerViewTimeline}
                    </button>
                </div>
            </div>
        {/if}

        {#if showCareerViewToggle && careerView === 'timeline' && isCareerSection(sectionKey)}
            {#if sectionKey === careerToggleAnchor}
                <CvSection title={t.cv.careerTimeline} section="career-timeline">
                        <CareerTimeline
                            experience={timelineExperience}
                            volunteer={timelineVolunteer}
                            education={timelineEducation}
                            {lang}
                            presentLabel={t.cv.present}
                        ariaLabel={t.cv.careerTimeline}
                        newerLabel={t.cv.careerTimelineNewer}
                        olderLabel={t.cv.careerTimelineOlder}
                        screenNavLabel={t.cv.careerTimelinePeriod}
                        kindLabels={{
                            experience: t.cv.careerKindExperience,
                            education: t.cv.careerKindEducation,
                            volunteer: t.cv.careerKindVolunteer
                        }}
                    />
                </CvSection>
            {/if}
        {:else if hasEntries(sectionKey)}
            <CvSection title={getSectionTitle(sectionKey)} section={sectionKey} compact={isCompactSection(sectionKey)}>
                {#if sectionKey === 'experience'}
                    <WorkExperience entries={cv.experience} presentLabel={t.cv.present} />
                {:else if sectionKey === 'volunteer'}
                    <WorkExperience entries={cv.volunteer} presentLabel={t.cv.present} />
                {:else if sectionKey === 'education'}
                    <Education
                        entries={cv.education}
                        presentLabel={t.cv.present}
                        creditsUnit={t.cv.educationCreditsUnit}
                        lang={lang}
                    />
                {:else if sectionKey === 'coursework'}
                    <Coursework
                        entries={cv.coursework}
                        replacesLabel={t.cv.courseReplaces}
                        replacedByLabel={t.cv.courseReplacedBy}
                        essayLabel={t.cv.courseEssay}
                        overlapLabel={t.cv.courseOverlap}
                        replacedSectionLabel={t.cv.courseReplacedSection}
                        totalCreditsLabel={t.cv.courseCreditsTotal}
                        creditsUnit={t.cv.educationCreditsUnit}
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
                {:else if sectionKey === 'qualities'}
                    <Qualities entries={cv.qualities} />
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

    @media (max-width: 1024px) {
        .cv-page {
            max-width: 85%;
        }
    }

    @media (max-width: 700px) {
        .cv-page {
            max-width: 90%;
            padding: var(--space-lg) var(--space-md);
        }
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

    .career-view-controls {
        margin-bottom: var(--space-md);
    }

    .view-toggle {
        display: inline-flex;
        border: 1px solid var(--color-chrome-border);
        border-radius: var(--radius-md);
        overflow: hidden;
    }

    .view-btn {
        appearance: none;
        border: none;
        background: transparent;
        color: var(--color-muted);
        font-size: 0.75rem;
        font-weight: 500;
        padding: 0.3rem 0.75rem;
        cursor: pointer;
        transition: background-color 0.15s ease, color 0.15s ease;
    }

    .view-btn + .view-btn {
        border-left: 1px solid var(--color-chrome-border);
    }

    .view-btn:hover {
        color: var(--color-dark);
        background-color: oklch(50% 0 0 / 0.08);
    }

    .view-btn.active {
        color: var(--color-dark);
        background-color: oklch(80% 0.16 75 / 0.18);
    }

    .view-btn:focus-visible {
        outline: 2px solid var(--color-accent);
        outline-offset: -2px;
    }

    :global(.cv-section[data-section='career-timeline'] .cv-section-content) {
        overflow-x: clip;
        overflow-y: visible;
    }

    @media (max-width: 700px) {
        :global(.cv-section[data-section='career-timeline'] .cv-section-content) {
            overflow-x: clip;
            overflow-y: visible;
        }
    }

    @media (min-width: 701px) {
        :global(.cv-section[data-section='career-timeline'] .cv-section-content) {
            overflow-x: visible;
        }
    }

</style>
