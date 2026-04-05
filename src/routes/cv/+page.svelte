<script lang="ts">
	import { translations } from '../../i18n/translations';
	import { cvData } from '../../data/cv';
	import CvHeader from '../../components/cv/CvHeader.svelte';
	import CvSection from '../../components/cv/CvSection.svelte';
	import WorkExperience from '../../components/cv/WorkExperience.svelte';
	import Education from '../../components/cv/Education.svelte';
	import Skills from '../../components/cv/Skills.svelte';
	import Languages from '../../components/cv/Languages.svelte';
	import Certificates from '../../components/cv/Certificates.svelte';
	import Projects from '../../components/cv/Projects.svelte';
	import ContactInfo from '../../components/cv/ContactInfo.svelte';

	const t = translations['no'];
	const cv = cvData['no'];
</script>

<svelte:head>
	<title>{t.cv.pageTitle} — Christian Kårbø Engelsen</title>
</svelte:head>

<div class="cv-page">
	<CvHeader summary={cv.summary} />

	<CvSection title={t.cv.experience}>
		<WorkExperience entries={cv.experience} presentLabel={t.cv.present} />
	</CvSection>

	<CvSection title={t.cv.volunteer}>
		<WorkExperience entries={cv.volunteer} presentLabel={t.cv.present} />
	</CvSection>

	<CvSection title={t.cv.education}>
		<Education entries={cv.education} presentLabel={t.cv.present} />
	</CvSection>

	<CvSection title={t.cv.skills}>
		<Skills categories={cv.skills} />
	</CvSection>

	<CvSection title={t.cv.languages}>
		<Languages entries={cv.languages} />
	</CvSection>

	<CvSection title={t.cv.certificates}>
		<Certificates entries={cv.certificates} viewCredentialLabel={t.cv.viewCredential} />
	</CvSection>

	<CvSection title={t.cv.projects}>
		<Projects entries={cv.projects} sourceLabel={t.cv.viewProject} liveDemoLabel={t.cv.liveDemo} />
	</CvSection>

	<CvSection title={t.cv.contact}>
		<ContactInfo entries={cv.contact} />
	</CvSection>
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
