<script>
	export let data;

	import Topbar from '$lib/Topbar.svelte';
	import Topics from '$lib/Topics.svelte';
	import Searchbar from '$lib/Searchbar.svelte';
	import Article from '$lib/Article.svelte';

	const posts = data.posts;
</script>

<Topbar menu={true} />

<h1>Odkrywaj</h1>

<Searchbar />
<Topics />

<section>
	{#each posts as post}
		<Article {...post} />
	{/each}

	{#if posts.length === 0}
		<p>Brak artykułów</p>
	{/if}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin-top: 1.5rem;
		margin-bottom: 5rem;
	}
</style>
