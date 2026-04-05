<script lang="ts">
	import { page } from '$app/stores';
	import type { Lang } from '$lib/posts';
	import { translations } from '../../../i18n/translations';
	import { cvData } from '../../../data/cv';
	import CvPageContent from '../../../components/cv/CvPageContent.svelte';

	$: t = translations[$page.params.lang as Lang];
	$: cv = cvData[$page.params.lang as Lang];
</script>

<svelte:head>
	<title>{t.cv.pageTitle} — Christian Kårbø Engelsen</title>
</svelte:head>

<CvPageContent {cv} {t} activeProfile={null} lang={$page.params.lang} />
