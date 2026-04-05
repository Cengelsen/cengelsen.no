<script lang="ts">
    import Navbar from "./Navbar.svelte";
    import Footer from "./Footer.svelte";
    import { page } from "$app/stores";

    $: isScrollable = ($page.route.id?.includes('/blog') || $page.route.id?.includes('/cv')) ?? false;
    $: isHomePage = $page.route.id === '/[lang=lang]' || $page.route.id === '/';
    $: contentMaxWidth = isHomePage ? '100%' : '700px';
    $: lang = $page.params.lang ?? 'no';
</script>

<svelte:head>
    <link rel="alternate" type="application/rss+xml" title="cengelsen.no (norsk)" href="/rss.xml" />
    <link rel="alternate" type="application/rss+xml" title="cengelsen.no (english)" href="/en/rss.xml" />
</svelte:head>

<div id="app-shell" class:scrollable={isScrollable} style="--content-max-width: {contentMaxWidth}">
    <div class="navbar-wrapper" class:sticky-nav={isScrollable}>
        <Navbar lang={lang} />
    </div>

    <main class="main-content">
        <slot />
    </main>

    <Footer />
</div>

<style>
    #app-shell {
        display: flex;
        flex-direction: column;
        height: 100vh;
        height: 100dvh;
        overflow: hidden;
        max-width: var(--max-content-width);
        margin: 0 auto;
    }

    #app-shell.scrollable {
        height: auto;
        min-height: 100vh;
        min-height: 100dvh;
        overflow: visible;
    }

    .navbar-wrapper {
        flex-shrink: 0;
    }

    .navbar-wrapper.sticky-nav {
        position: sticky;
        top: 0;
        z-index: 100;
    }

    .main-content {
        flex: 1;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    #app-shell.scrollable .main-content {
        overflow: visible;
    }

    @media print {
        .navbar-wrapper {
            display: none !important;
        }

        #app-shell :global(.footer) {
            display: none !important;
        }

        #app-shell {
            height: auto;
            overflow: visible;
            max-width: none;
        }

        .main-content {
            overflow: visible;
        }
    }
</style>
