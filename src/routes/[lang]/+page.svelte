<script lang="ts">
    import Profile from '../../components/index/Profile.svelte';
    import Activity from '../../components/index/Activity.svelte';
	import type { PageData } from './$types';

    export let data: PageData;

    let posts = data.posts;
    
</script>

<div class="content-wrapper">

    <section class="profile">
        <Profile />
    </section>

    <section class="activity">
        <Activity recentPosts={posts} />
    </section>
</div>

<style>

    * {
        margin: 0;
        padding: 0;
    }

    body {
        width: min(90vw, 800px);
    }

    @import "../../static/global.css";

    .content-wrapper{
        display: flex;
        width: 100%;
    }

    .activity {
        width: 70%;
        height: 100vh;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(80%, 1fr));
    }

    .profile {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 30%;
        border: 5px solid blue;
        background-color: grey
    }
</style>