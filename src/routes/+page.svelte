<svelte:head>
	<meta http-equiv="refresh" content="0; url=/no" />
</svelte:head>

<script>
	import { browser } from '$app/environment';
	if (browser) window.location.replace('/no');
</script>

<a href="/no">Go to site</a>
