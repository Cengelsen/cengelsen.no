<script>
	const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="footer-container">
	</div>
	<div class="footer-bottom">
		<p>&copy; {currentYear} - Christian Kårbø Engelsen</p>
	</div>
</footer>

<style>

	*{
		margin: 0;
		padding: 0;
	}

	.footer {
		background-color: #333;
		color: white;
		height: 5vh;
	}

	.footer-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		max-width: 100%;
	}

	.footer-bottom {
		text-align: center;
		border-top: 1px solid #555;
	}

	@media (max-width: 768px) {
		.footer-container {
			flex-direction: column;
		}
	}
</style>
