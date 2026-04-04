<script lang="ts">
    import Navbar from "./Navbar.svelte";
    import Footer from "./Footer.svelte";
    import { page } from "$app/stores";

    $: isScrollable = $page.route.id?.includes('/blog') ?? false;
</script>

<div id="app-shell" class:scrollable={isScrollable}>
    <div class="navbar-wrapper" class:sticky-nav={isScrollable}>
        <Navbar lang={$page.params.lang} />
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
        overflow: hidden;
        max-width: var(--max-content-width);
        margin: 0 auto;
    }

    #app-shell.scrollable {
        height: auto;
        min-height: 100vh;
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
</style>
