<script>
	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<nav class="navbar">
	<div class="navbar-container">

		<ul class="navbar-menu" class:active={isMenuOpen}>
			<li><a href="/">Home</a></li>
			<li><a href="/blog">Blog</a></li>
			<li><a href="/cv">CV</a></li>
			<li><a href="/projects">Projects</a></li>
		    <li><a href="/machines">Machines</a></li>
		</ul>
	</div>
</nav>

<style>

	*{
		margin: 0;
		padding: 0;
	}

	.navbar {
		background-color: #333;
		color: white;
		height: 5vh;
	}

	.navbar-container {
		display: flex;
	}

	.navbar-menu {
		display: flex;
		list-style-type: none;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		width: 80%;
	}

	.navbar-menu li {
		margin-left: 1rem;
	}

	.navbar-menu a {
		color: white;
		text-decoration: none;
	}

	@media (max-width: 768px) {

		.navbar-menu {
			display: none;
			flex-direction: column;
			position: absolute;
			top: 100%;
			left: 0;
			width: 100%;
			background-color: #333;
			padding: 1rem;
		}

		.navbar-menu.active {
			display: flex;
		}

		.navbar-menu li {
			margin: 0.5rem 0;
		}
	}
</style>
