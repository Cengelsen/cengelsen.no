<script lang="ts">
    import Navbar from '../components/global/Navbar.svelte';
    import Footer from '../components/global/Footer.svelte';
    import Profile from '../components/index/Profile.svelte';
    import Activity from '../components/index/Activity.svelte';
	import type { PageData } from './$types';

    export let data: PageData;

    let posts = data.posts.no

    console.debug(data)
</script>

<Navbar />

<section class="profile-section">
    <Profile name="John Doe" imageUrl="/path/to/portrait.jpg" description="A passionate developer with a love for creating innovative solutions." socialLinks={[{ platform: "LinkedIn", url: "https://linkedin.com/in/johndoe" }, { platform: "GitHub", url: "https://github.com/johndoe" }, { platform: "Twitter", url: "https://twitter.com/johndoe" }]} />
    <Activity recentPosts={posts} />
</section>

<Footer />

<style>

    @import "../../static/global.css";

    .profile-section {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 100vh;
        border: 5px solid blue;
        background-color: grey
    }
</style>