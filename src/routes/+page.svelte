<script>
	import Topics from '$lib/topics.svelte';
	import Article from '$lib/article.svelte';

	const posts = [1, 2, 3, 4, 5, 6];
</script>

<Topics />

<h1>Witaj! Sprawdź najnowsze treści</h1>

<section>
	{#each posts as post}
		<Article />
	{/each}

	<p>Brak więcej wpisów do wyświetlenia</p>
</section>

<style>
	h1 {
		margin-top: 20px;
		font-size: 1.5rem;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 20px;
		margin-top: 20px;
		margin-bottom: 80px;
	}

	p {
		text-align: center;
	}
</style>
