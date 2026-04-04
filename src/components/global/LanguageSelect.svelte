<script lang="ts">
	import { page } from '$app/stores';

	$: currentLang = $page.params.lang ?? 'no';
	$: targetLang = currentLang === 'en' ? 'no' : 'en';
	$: isBlogPost = $page.route.id === '/[lang=lang]/blog/[slug]'
		|| $page.route.id === '/blog/[slug]';
	$: translatedSlug = $page.data.translatedSlug as string | null | undefined;

	$: targetUrl = (() => {
		if (isBlogPost) {
			if (!translatedSlug) return targetLang === 'no' ? '/blog' : `/${targetLang}/blog`;
			return targetLang === 'no'
				? `/blog/${translatedSlug}`
				: `/${targetLang}/blog/${translatedSlug}`;
		}
		if (targetLang === 'no') return $page.url.pathname.replace(`/${currentLang}`, '') || '/';
		return `/${targetLang}${$page.url.pathname.replace(`/${currentLang}`, '')}`;
	})();
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
		transition: box-shadow 0.15s ease, transform 0.15s ease;
		overflow: hidden;
	}

	@media (hover: hover) {
		.language-select:hover .flag-box {
			box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
			transform: translateY(-2px) scale(1.12);
		}
	}

	.flag-icon {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: fill;
	}
</style>
