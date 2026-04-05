<script lang="ts">
	import { page } from '$app/stores';
	import type { Lang } from '$lib/posts';
	import { translations } from '../../../../i18n/translations';
	import { cvData } from '../../../../data/cv';
	import { cvProfiles } from '../../../../data/cv-profiles';
	import { filterCvByProfile } from '$lib/cv';
	import CvPageContent from '../../../../components/cv/CvPageContent.svelte';

	$: lang = $page.params.lang as Lang;
	$: t = translations[lang];
	$: profileId = $page.params.profile;
	$: profile = cvProfiles[lang][profileId] ?? null;
	$: cv = profile ? filterCvByProfile(cvData[lang], profile.id) : cvData[lang];
</script>

<svelte:head>
	<title>{profile?.summary.title ?? t.cv.pageTitle} — Christian Kårbø Engelsen</title>
</svelte:head>

<CvPageContent {cv} {t} activeProfile={profile} lang={$page.params.lang} />
