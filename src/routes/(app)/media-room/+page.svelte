<script>
	import Topbar from '$lib/Topbar.svelte';
	// import MediaArticle from '$lib/MediaArticle.svelte';

	const mediaArticles = ['1.mp4', '2.mp4', '3.mp4', '4.mp4'];
</script>

<Topbar menu={true} />

<h1>Media room</h1>

<section>
	{#if mediaArticles}
		{#each mediaArticles as video}
			<video controls preload="metadata">
				<source src="/videos/{video}" />
				<track kind="captions" />
			</video>
		{/each}
	{:else}
		<p>Brak treści do wyświetlenia.</p>
	{/if}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	p {
		text-align: center;
	}

	video {
		width: 100%;
		border-radius: 25px;
	}
</style>
