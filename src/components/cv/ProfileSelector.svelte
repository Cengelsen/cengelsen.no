<script lang="ts">
    import { cvProfiles } from '../../data/cv-profiles';
    import type { Lang } from '$lib/posts';

    export let activeProfileId: string | null = null;
    export let lang: string;

    $: profiles = Object.values(cvProfiles[lang as Lang] ?? cvProfiles['no']);
    $: basePath = lang === 'no' ? '/cv' : `/${lang}/cv`;
</script>

<nav class="profile-selector" aria-label="CV profiles">
    <a
        href={basePath}
        class="profile-link"
        class:active={activeProfileId === null}
    >
        {lang === 'no' ? 'Alle' : 'All'}
    </a>
    {#each profiles as profile}
        <a
            href="{basePath}/{profile.id}"
            class="profile-link"
            class:active={activeProfileId === profile.id}
        >
            {profile.label}
        </a>
    {/each}
</nav>

<style>
    .profile-selector {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-sm);
        margin-bottom: var(--space-2xl);
        justify-content: center;
    }

    .profile-link {
        padding: var(--space-xs) var(--space-md);
        border-radius: var(--radius-sm);
        font-size: var(--font-size-sm);
        font-weight: 500;
        text-decoration: none;
        color: var(--color-mid);
        background-color: var(--color-surface);
        border: 1px solid transparent;
        transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
    }

    .profile-link:hover {
        color: var(--color-accent);
        border-color: var(--color-chrome-border);
    }

    .profile-link.active {
        color: var(--color-chrome);
        background-color: var(--color-accent);
        border-color: var(--color-accent);
        font-weight: 600;
    }
</style>
