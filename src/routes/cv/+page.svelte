<script lang="ts">
	import { translations } from '../../i18n/translations';
	import { cvData } from '../../data/cv';
	import CvPageContent from '../../components/cv/CvPageContent.svelte';

	const t = translations['no'];
	const cv = cvData['no'];
</script>

<svelte:head>
	<title>{t.cv.pageTitle} — Christian Kårbø Engelsen</title>
</svelte:head>

<CvPageContent {cv} {t} activeProfile={null} lang="no" />
