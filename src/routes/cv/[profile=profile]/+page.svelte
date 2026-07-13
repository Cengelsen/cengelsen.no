<script lang="ts">
	import { page } from '$app/stores';
	import { translations } from '../../../i18n/translations';
	import { cvData } from '../../../data/cv';
	import { cvProfiles } from '../../../data/cv-profiles';
	import { filterCvByProfile, prepareCv } from '$lib/cv';
	import CvPageContent from '../../../components/cv/CvPageContent.svelte';

	const t = translations['no'];

	$: profileId = $page.params.profile;
	$: profile = cvProfiles['no'][profileId] ?? null;
	$: cv = profile ? filterCvByProfile(cvData['no'], profile.id, 'no') : prepareCv(cvData['no'], 'no');
</script>

<svelte:head>
	<title>{profile?.summary.title ?? t.cv.pageTitle} — Christian Kårbø Engelsen</title>
</svelte:head>

<CvPageContent {cv} {t} activeProfile={profile} lang="no" />
