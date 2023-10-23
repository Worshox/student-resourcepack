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
		width: clamp(18rem, 70vw, 22rem);
		margin-left: auto;
		margin-right: auto;
	}

	section {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
		margin-top: 3rem;
		margin-bottom: 5rem;
	}
</style>
