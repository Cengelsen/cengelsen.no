<script lang="ts">
	import { page } from '$app/stores';

	$: currentLang = $page.params.lang;
	$: targetLang = currentLang === 'en' ? 'no' : 'en';
	$: targetUrl = $page.url.pathname.replace(`/${currentLang}`, `/${targetLang}`);
</script>

<a href={targetUrl} class="language-select">
	{currentLang === 'en' ? '🇳🇴' : '🇬🇧'}
</a>

<style>
	.language-select {
		font-size: 2.5rem;
		text-decoration: none;
		margin: 0;
		padding: 0;
		width: fit-content;
		height: 5vh;
	}
</style>
