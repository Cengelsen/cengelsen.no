<script lang="ts">
    import Fa from "svelte-fa";
    import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
    import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

    export let name = "Christian Kårbø Engelsen";
    export let imageUrl = "../../../profile/profile1.webp";
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
    <div class="profile-left">
        <img src={imageUrl} alt={name} class="profile-image" />
        <div class="social-links">
            {#each socialLinks as link}
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.platform}>
                    <Fa icon={link.iconClass} size="1.5x" />
                </a>
            {/each}
        </div>
    </div>
    <div class="profile-text">
        <h2 class="profile-name">{name}</h2>
        <p class="profile-description">{description}</p>
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

    .profile-left {
        display: contents;
    }

    .profile-image {
        width: 80%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: var(--radius-lg);
        margin-bottom: var(--space-md);
        order: 1;
    }

    .profile-text {
        order: 2;
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
        margin: 0 0 var(--space-sm) 0;
        width: 100%;
    }

    .social-links {
        display: flex;
        justify-content: center;
        gap: var(--space-md);
        order: 3;
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
            align-items: flex-start;
            text-align: left;
            gap: var(--space-md);
            padding: var(--space-md);
        }

        .profile-left {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-shrink: 0;
            gap: var(--space-sm);
        }

        .profile-image {
            width: 80px;
            height: 80px;
            margin-bottom: 0;
            order: unset;
        }

        .social-links {
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-items: center;
            order: unset;
        }

        .profile-text {
            flex: 1;
            min-width: 0;
            display: flex;
            flex-direction: column;
            order: unset;
        }

        .profile-name,
        .profile-description {
            width: 100%;
        }
    }
</style>
