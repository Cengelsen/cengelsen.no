<script lang="ts">
    import Navbar from "./Navbar.svelte";
    import Footer from "./Footer.svelte";
    import { page } from "$app/stores";
</script>

<div id="app-shell">
    <Navbar lang={$page.params.lang} />

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

    .main-content {
        flex: 1;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
</style>
