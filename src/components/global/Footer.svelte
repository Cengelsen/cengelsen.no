<script>
	const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="footer-container">
		<div class="footer-section">
			<h3>About Us</h3>
			<p>We are a company dedicated to providing excellent services and products to our customers.</p>
		</div>
		<div class="footer-section">
			<h3>Quick Links</h3>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/services">Services</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</div>
		<div class="footer-section">
			<h3>Contact Us</h3>
			<p>Email: info@example.com</p>
			<p>Phone: (123) 456-7890</p>
		</div>
	</div>
	<div class="footer-bottom">
		<p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
	</div>
</footer>

<style>
	.footer {
		background-color: #333;
		color: white;
		padding: 2rem 0;
	}

	.footer-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.footer-section {
		flex: 1;
		min-width: 200px;
		margin-bottom: 1rem;
	}

	.footer-section h3 {
		margin-bottom: 1rem;
	}

	.footer-section ul {
		list-style-type: none;
		padding: 0;
	}

	.footer-section ul li {
		margin-bottom: 0.5rem;
	}

	.footer-section a {
		color: white;
		text-decoration: none;
	}

	.footer-section a:hover {
		text-decoration: underline;
	}

	.footer-bottom {
		text-align: center;
		margin-top: 2rem;
		padding-top: 1rem;
		border-top: 1px solid #555;
	}

	@media (max-width: 768px) {
		.footer-container {
			flex-direction: column;
		}

		.footer-section {
			margin-bottom: 2rem;
		}
	}
</style>
