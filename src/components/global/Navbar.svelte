<script>
	import {translations} from '../../i18n/translations';
	import { page } from '$app/stores';

	export let lang;

	$: t = translations[lang];
</script>

<nav class="navbar">
	<div class="navbar-container">

		<ul class="navbar-menu">
			<li class="navbar-link"><a href="{$page.url.pathname}/">{t.nav.home}</a></li>
			<li class="navbar-link"><a href="{$page.url.pathname}/blog">{t.nav.blog}</a></li>
			<li class="navbar-link"><a href="{$page.url.pathname}/cv">{t.nav.cv}</a></li>
			<li class="navbar-link"><a href="{$page.url.pathname}/projects">{t.nav.projects}</a></li>
		    <li class="navbar-link"><a href="{$page.url.pathname}/machines">{t.nav.machines}</a></li>
		</ul>
	</div>
</nav>

<style>

	*{
		margin: 0;
		padding: 0;
	}

	.navbar {
		background-color: #333;
		color: white;
		height: 10vh;
	}

	.navbar-container {
		display: flex;
		height: inherit;
	}

	.navbar-menu {
		display: flex;
		list-style-type: none;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		width: 80%;
		height: inherit;
	}

	.navbar-menu a {
		color: white;
		text-decoration: none;
	}

	.navbar-link:nth-child(1) {
			border-right:none;
	}

	.navbar-link{
		padding-left: 0.3%;
		border-left: 2px solid saddlebrown;
		border-bottom: 3px solid saddlebrown;
	}

	@media (max-width: 768px) {

		.navbar{
			height: 10vh;
		}

		.navbar-menu {
			width: 100%;
			background-color: #333;
			height: 10vh;
			width: 90%;
		}

		.navbar-link:nth-child(1) {
			border-right:none;
		}

		.navbar-link{
			padding-left: 0.3%;
			border-left: 2px solid saddlebrown;
			border-bottom: 3px solid saddlebrown;
		}
	}
</style>
