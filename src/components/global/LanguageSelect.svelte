<script>
	import { page } from '$app/stores';
	import { translations } from '../../i18n/translations';

	let lang = $page.params.lang;

	$: t = translations[lang];

    // function that changes the language in the url
    function changeLang(lang) {

        if (lang === 'en') {

            const str = window.location.href.replace("/en", "/no");
            window.location.href = str;

        } else {
            const str = window.location.href.replace("/no", "/en");
            window.location.href = str;
        }
    }
</script>

<a href="" on:click={() => changeLang(lang)}>
    <div class="language-select">
        {$page.params.lang === 'en' ? "🇳🇴" : "🇬🇧"}
    </div>
</a>

<style>
    a {
        text-decoration: none;
    }

	.language-select {
        font-size: 2.5rem;
        margin: none;
        padding: none;
        width: fit-content;
        height: 5vh;
	}
</style>