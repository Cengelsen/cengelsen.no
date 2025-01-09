<script>
    export let name = "Christian Kårbø Engelsen";
    export let imageUrl = "../../../profile/profile1.png";
    export let description = "En lidenskapelig utvikler med et kjennetegn for å skape innovative løsninger.";
    export let socialLinks = [
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/christian-kårbø-engelsen-7a07941aa" },
        { platform: "GitHub", url: "https://github.com/Cengelsen" },
        { platform: "Epost", url: "mailto:ckengelsen97@gmail.com"}
    ];
</script>

<div class="profile">
    <img src={imageUrl} alt={name} class="profile-image" />
    <h2 class="profile-name">{name}</h2>
    <p class="profile-description">{description}</p>
    <div class="social-links">
        {#each socialLinks as link}
            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.platform}</a>
        {/each}
    </div>
</div>

<style>
    .profile {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        text-align: center;
        border: 5px solid red;
        background-color: gold;
    }

    .profile-image {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 1rem;
    }

    .profile-name {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    .profile-description {
        margin-bottom: 1rem;
    }

    .social-links {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    .social-links a {
        color: #333;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .social-links a:hover {
        color: #007bff;
    }

    @media (max-width: 768px) {
        .profile {
            max-width: 100%;
        }
    }
</style>
