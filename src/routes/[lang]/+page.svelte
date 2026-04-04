<script lang="ts">
    import Profile from '../../components/index/Profile.svelte';
    import Activity from '../../components/index/Activity.svelte';
    import type { PageData } from './$types';
    import { translations } from '../../i18n/translations';
    import { page } from '$app/stores';
    import type { Lang } from '$lib/posts';

    export let data: PageData;

    $: t = translations[$page.params.lang as Lang];

    let posts = data.posts;
</script>

<div class="content-wrapper">
    <aside class="profile-column">
        <Profile description={t.profile.description} />
    </aside>

    <section class="activity-column">
        <Activity recentPosts={posts} title={t.recentPosts.title} />
    </section>
</div>

<style>
    .content-wrapper {
        display: flex;
        flex: 1;
        gap: var(--space-lg);
        padding: var(--space-lg);
        align-items: flex-start;
        overflow: hidden;
    }

    .profile-column {
        width: 28%;
        flex-shrink: 0;
        position: sticky;
        top: var(--space-lg);
    }

    .activity-column {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        height: 100%;
    }

    @media (max-width: 700px) {
        .content-wrapper {
            flex-direction: column;
            padding: var(--space-md);
            overflow-y: auto;
        }

        .profile-column {
            width: 100%;
            position: static;
        }

        .activity-column {
            overflow: visible;
            height: auto;
        }
    }
</style>
