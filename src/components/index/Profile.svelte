<script>
    export let name = "John Doe";
    export let imageUrl = "/path/to/portrait.jpg";
    export let description = "A passionate developer with a love for creating innovative solutions.";
    export let socialLinks = [
        { platform: "LinkedIn", url: "https://linkedin.com/in/johndoe" },
        { platform: "GitHub", url: "https://github.com/johndoe" },
        { platform: "Twitter", url: "https://twitter.com/johndoe" }
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
        width: 30%;
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
