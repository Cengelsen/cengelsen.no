<script>
    import Navbar from "./Navbar.svelte";
    import Footer from "./Footer.svelte";
    import { page } from "$app/stores";
</script>

<body>
    <Navbar lang={$page.params.lang}/>

    <slot/>

    <Footer/>
</body>