<script lang="ts">
    import type { SkillCategory } from '../../types/cv.types';

    export let categories: SkillCategory[];
</script>

<div class="skills-grid">
    {#each categories as cat}
        <div class="skill-group">
            <h3 class="skill-category">{cat.category}</h3>
            <div class="skill-tags">
                {#each cat.skills as skill}
                    <span class="skill-tag">{skill}</span>
                {/each}
            </div>
        </div>
    {/each}
</div>

<style>
    .skills-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: var(--space-lg);
    }

    @media (max-width: 700px) {
        .skills-grid {
            grid-template-columns: 1fr;
        }
    }

    .skill-group {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
    }

    .skill-category {
        font-size: var(--font-size-sm);
        font-weight: 600;
        color: var(--color-dark);
        margin: 0;
        text-transform: uppercase;
        letter-spacing: 0.03em;
    }

    .skill-tags {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-sm);
    }

    .skill-tag {
        font-size: var(--font-size-sm);
        padding: var(--space-xs) var(--space-sm);
        background-color: oklch(80% 0.16 75 / 0.12);
        color: var(--color-accent);
        border-radius: var(--radius-sm);
        border: 1px solid oklch(80% 0.16 75 / 0.25);
        font-weight: 500;
    }
</style>
