<script>
	import Topbar from '$lib/Topbar.svelte';
	import MediaArticle from '$lib/MediaArticle.svelte';

	const mediaArticles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>

<Topbar menu={true} />

<h1>Media room</h1>

<section>
	{#each mediaArticles as mediaArticle}
		<MediaArticle />
	{/each}
</section>

<style>
	h1 {
		text-align: center;
	}

	section {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
		margin-top: 3rem;
		margin-bottom: 5rem;
	}
</style>
