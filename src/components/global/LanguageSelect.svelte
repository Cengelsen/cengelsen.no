<script lang="ts">
	import { page } from '$app/stores';

	$: currentLang = $page.params.lang;
	$: targetLang = currentLang === 'en' ? 'no' : 'en';
	$: targetUrl = $page.url.pathname.replace(`/${currentLang}`, `/${targetLang}`);
</script>

<a
	href={targetUrl}
	class="language-select"
	title={currentLang === 'en' ? 'Bytt til norsk' : 'Switch to English'}
>
	<span class="flag-box">
		<img
			src={currentLang === 'en' ? '/flags/no.svg' : '/flags/en.svg'}
			alt={currentLang === 'en' ? 'Norsk' : 'English'}
			class="flag-icon"
		/>
	</span>
</a>

<style>
	.language-select {
		text-decoration: none;
		margin: 0;
		padding: var(--space-xs);
		display: flex;
		align-items: center;
		line-height: 1;
	}

	.flag-box {
		display: block;
		width: 2rem;
		height: 1.25rem;
		border-radius: 2px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
		transition: box-shadow 0.15s ease;
		overflow: hidden;
	}

	.language-select:hover .flag-box {
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
	}

	.flag-icon {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: fill;
	}
</style>
