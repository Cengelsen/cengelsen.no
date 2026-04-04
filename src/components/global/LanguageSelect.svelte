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
		font-size: 1.75rem;
		text-decoration: none;
		margin: 0;
		padding: var(--space-xs);
		display: flex;
		align-items: center;
		line-height: 1;
	}
</style>
