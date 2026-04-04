<script lang="ts">
    import Fa from "svelte-fa";
    import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
    import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

    export let name = "Christian Kårbø Engelsen";
    export let imageUrl = "../../../profile/profile1.png";
    export let description = "En lidenskapelig utvikler med et kjennetegn for å skape innovative løsninger.";
    export let socialLinks = [
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/christian-kårbø-engelsen-7a07941aa",
            iconClass: faLinkedin
        },
        {
            platform: "GitHub",
            url: "https://github.com/Cengelsen",
            iconClass: faGithub
        },
        {
            platform: "Epost",
            url: "mailto:ckengelsen97@gmail.com",
            iconClass: faEnvelope
        }
    ];
</script>

<div class="profile">
    <img src={imageUrl} alt={name} class="profile-image" />
    <h2 class="profile-name">{name}</h2>
    <p class="profile-description">{description}</p>
    <div class="social-links">
        {#each socialLinks as link}
            <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.platform}>
                <Fa icon={link.iconClass} size="1.5x" />
            </a>
        {/each}
    </div>
</div>

<style>
    .profile {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        text-align: center;
        background-color: var(--color-surface);
        border-radius: var(--radius-lg);
        padding: var(--space-lg) var(--space-md);
        box-shadow: var(--shadow-sm);
    }

    .profile-image {
        width: 80%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: var(--radius-lg);
        margin-bottom: var(--space-md);
    }

    .profile-name {
        font-size: 1.25rem;
        margin: 0 0 var(--space-sm) 0;
        color: var(--color-dark);
    }

    .profile-description {
        font-size: var(--font-size-sm);
        color: var(--color-mid);
        line-height: var(--line-height-base);
        margin: 0 0 var(--space-md) 0;
        width: 100%;
    }

    .social-links {
        display: flex;
        justify-content: center;
        gap: var(--space-md);
    }

    .social-links a {
        color: var(--color-mid);
        text-decoration: none;
        transition: color 0.2s ease;
    }

    .social-links a:hover {
        color: var(--color-accent-dim);
    }

    @media (max-width: 700px) {
        .profile {
            flex-direction: row;
            flex-wrap: wrap;
            text-align: left;
            gap: var(--space-md);
            padding: var(--space-md);
        }

        .profile-image {
            width: 80px;
            height: 80px;
            margin-bottom: 0;
            flex-shrink: 0;
        }

        .profile-name,
        .profile-description {
            flex: 1;
            min-width: 0;
        }

        .social-links {
            width: 100%;
            justify-content: flex-start;
        }
    }
</style>
