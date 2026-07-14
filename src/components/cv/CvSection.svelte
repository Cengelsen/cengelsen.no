<script lang="ts">
    export let title: string;
    export let section: string = '';
    export let compact: boolean = false;
</script>

<section class="cv-section" class:cv-section--compact={compact} data-section={section}>
    <h2 class="cv-section-title">{title}</h2>
    <div class="cv-section-content">
        <slot />
    </div>
</section>

<style>
    .cv-section {
        margin-bottom: var(--space-2xl);
    }

    .cv-section-title {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--color-accent);
        margin: 0 0 var(--space-lg) 0;
        padding-bottom: var(--space-sm);
        border-bottom: 2px solid var(--color-chrome-border);
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .cv-section-content {
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
    }

    .cv-section--compact {
        margin-bottom: var(--space-lg);
    }

    .cv-section--compact .cv-section-title {
        font-size: 1.1rem;
        margin-bottom: var(--space-sm);
        padding-bottom: var(--space-xs);
    }

    .cv-section--compact .cv-section-content {
        gap: var(--space-sm);
    }
</style>
