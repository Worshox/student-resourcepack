<script>
	import Topbar from '$lib/Topbar.svelte';
	import MediaArticle from '$lib/MediaArticle.svelte';

	const mediaArticles = '';
</script>

<Topbar menu={true} />

<h1>Posłuchaj</h1>

<section>
	{#if mediaArticles}
		{#each mediaArticles as mediaArticle}
			<MediaArticle />
		{/each}
	{:else}
		<p>Brak treści do wyświetlenia.</p>
	{/if}
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
	}

	p {
		text-align: center;
	}
</style>
