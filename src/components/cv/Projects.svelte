<script lang="ts">
    import type { Project } from '../../types/cv.types';
    import Fa from 'svelte-fa';
    import { faGithub } from '@fortawesome/free-brands-svg-icons';
    import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

    export let entries: Project[];
    export let sourceLabel: string = 'Source code';
    export let liveDemoLabel: string = 'Live demo';
</script>

<div class="projects-grid">
    {#each entries as project}
        <div class="project-card">
            <h3 class="project-name">{project.name}</h3>
            <p class="project-description">{project.description}</p>
            <div class="project-tech">
                {#each project.techStack as tech}
                    <span class="tech-tag">{tech}</span>
                {/each}
            </div>
            {#if project.skillTags?.length}
                <div class="project-skills">
                    {#each project.skillTags as tag}
                        <span class="skill-tag">{tag}</span>
                    {/each}
                </div>
            {/if}
            <div class="project-links">
                {#if project.githubUrl}
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" class="project-link">
                        <Fa icon={faGithub} />
                        {sourceLabel}
                    </a>
                {/if}
                {#if project.liveUrl}
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" class="project-link">
                        <Fa icon={faArrowUpRightFromSquare} />
                        {liveDemoLabel}
                    </a>
                {/if}
            </div>
        </div>
    {/each}
</div>

<style>
    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: var(--space-md);
    }

    .project-card {
        display: flex;
        flex-direction: column;
        padding: var(--space-md);
        background-color: var(--color-surface);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
    }

    .project-name {
        font-size: var(--font-size-base);
        font-weight: 600;
        color: var(--color-dark);
        margin: 0 0 var(--space-sm) 0;
    }

    .project-description {
        font-size: var(--font-size-sm);
        color: var(--color-mid);
        margin: 0 0 var(--space-md) 0;
        line-height: var(--line-height-base);
        flex: 1;
    }

    .project-tech {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-xs);
        margin-bottom: var(--space-md);
    }

    .tech-tag {
        font-size: 0.75rem;
        padding: 2px var(--space-sm);
        background-color: oklch(80% 0.16 75 / 0.12);
        color: var(--color-accent);
        border-radius: var(--radius-sm);
        border: 1px solid oklch(80% 0.16 75 / 0.25);
    }

    .project-skills {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-xs);
        margin-bottom: var(--space-md);
    }

    .skill-tag {
        font-size: 0.7rem;
        padding: 1px var(--space-xs);
        background-color: oklch(80% 0.16 75 / 0.12);
        color: var(--color-accent);
        border-radius: var(--radius-sm);
        border: 1px solid oklch(80% 0.16 75 / 0.25);
        font-weight: 500;
    }

    .project-links {
        display: flex;
        gap: var(--space-md);
        flex-wrap: wrap;
    }

    .project-link {
        display: inline-flex;
        align-items: center;
        gap: var(--space-xs);
        font-size: var(--font-size-sm);
        color: var(--color-accent);
        text-decoration: none;
    }

    .project-link:hover {
        text-decoration: underline;
    }

    :global(.cv-section--compact) .projects-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: var(--space-sm);
    }

    :global(.cv-section--compact) .project-card {
        padding: var(--space-sm);
        box-shadow: none;
        border: 1px solid oklch(50% 0 0 / 0.12);
    }

    :global(.cv-section--compact) .project-name {
        font-size: var(--font-size-sm);
        margin-bottom: var(--space-xs);
    }

    :global(.cv-section--compact) .project-description {
        margin-bottom: var(--space-sm);
        line-height: 1.4;
    }

    :global(.cv-section--compact) .project-tech,
    :global(.cv-section--compact) .project-skills {
        margin-bottom: var(--space-sm);
    }

    :global(.cv-section--compact) .project-links {
        gap: var(--space-sm);
    }

    @media (max-width: 700px) {
        :global(.cv-section--compact) .projects-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
