<script lang="ts">
	import type { PageData } from './$types';
	import Post from '../../components/recent-activity/Post.svelte';
	import { translations } from '../../i18n/translations';

	export let data: PageData;

	const t = translations['no'];
	$: posts = data.posts;
</script>

<div class="content-wrapper">
	<h1 class="page-title">{t.blog.title}</h1>

	<section class="post-list">
		{#if posts.length > 0}
			{#each posts as post}
				<Post {post} />
			{/each}
		{:else}
			<p class="empty">{t.blog.empty}</p>
		{/if}
	</section>
</div>

<style>
	.content-wrapper {
		width: 100%;
		max-width: var(--content-max-width);
		margin: 0 auto;
		padding: var(--space-xl) var(--space-lg);
	}

	.page-title {
		text-align: center;
		margin-top: 0;
		margin-bottom: var(--space-xl);
		color: var(--color-dark);
	}

	.post-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.empty {
		text-align: center;
		color: var(--color-mid);
	}

	@media (max-width: 700px) {
		.content-wrapper {
			padding: var(--space-md);
		}
	}
</style>
