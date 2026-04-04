<script lang="ts">
	const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
	<p class="footer-copy">&copy; {currentYear} Christian Kårbø Engelsen</p>
</footer>

<style>
	.footer {
		background-color: var(--color-chrome);
		color: white;
		height: var(--footer-height);
		display: flex;
		align-items: center;
		justify-content: center;
		border-top: 1px solid var(--color-chrome-border);
	}

	.footer-copy {
		margin: 0;
		font-size: var(--font-size-sm);
		color: rgba(255, 255, 255, 0.75);
	}
</style>
