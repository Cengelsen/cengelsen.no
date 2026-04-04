<script lang="ts">
	import { translations } from '../../i18n/translations';
	import LanguageSelect from './LanguageSelect.svelte';
	import type { Lang } from '$lib/posts';

	export let lang: string;

	$: t = translations[lang as Lang];
</script>

<nav class="navbar">
	<div class="navbar-container">
		<ul class="navbar-menu">
			<li class="navbar-link"><a href="/{lang}">{t.nav.home}</a></li>
			<li class="navbar-link"><a href="/{lang}/blog">{t.nav.blog}</a></li>
			<li class="language-select"><LanguageSelect /></li>
		</ul>
	</div>
</nav>

<style>
	.navbar {
		background-color: var(--color-chrome);
		color: white;
		height: var(--navbar-height);
	}

	.navbar-container {
		display: flex;
		height: 100%;
	}

	.navbar-menu {
		display: flex;
		list-style-type: none;
		align-items: center;
		gap: var(--space-md);
		margin: auto;
		padding: 0;
		width: 90%;
		height: 100%;
	}

	.navbar-menu a {
		color: white;
		text-decoration: none;
		font-weight: 500;
		padding: var(--space-xs) var(--space-sm);
		border-radius: var(--radius-sm);
		transition: background-color 0.2s ease;
	}

	.navbar-menu a:hover {
		background-color: oklch(80% 0.16 75 / 0.15);
		color: var(--color-accent);
	}

	.language-select {
		margin-left: auto;
	}

	@media (max-width: 700px) {
		.navbar {
			height: auto;
			min-height: var(--navbar-height);
		}

		.navbar-menu {
			width: 95%;
			flex-wrap: wrap;
			padding: var(--space-sm) 0;
		}
	}
</style>
