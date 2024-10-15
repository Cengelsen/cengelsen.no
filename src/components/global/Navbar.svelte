<script>
	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<nav class="navbar">
	<div class="navbar-container">
		
		<button class="navbar-toggle" on:click={toggleMenu}>
			<span class="navbar-toggle-icon"></span>
		</button>

		<ul class="navbar-menu" class:active={isMenuOpen}>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/services">Services</a></li>
			<li><a href="/contact">Contact</a></li>
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

	.navbar-toggle {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
	}

	.navbar-toggle-icon {
		display: block;
		width: 25px;
		height: 3px;
		background-color: white;
		position: relative;
	}

	.navbar-toggle-icon::before,
	.navbar-toggle-icon::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: white;
		transition: all 0.3s ease;
	}

	.navbar-toggle-icon::before {
		top: -8px;
	}

	.navbar-toggle-icon::after {
		bottom: -8px;
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
		.navbar-toggle {
			display: block;
		}

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
