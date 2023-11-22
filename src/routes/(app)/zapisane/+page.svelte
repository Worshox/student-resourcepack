<script>
	import Topbar from '$lib/Topbar.svelte';
	import Article from '$lib/Article.svelte';

	import { db } from '../../../db.js';

	let posts = [];

	db.savedPosts.toArray().then((results) => {
		if (results) posts = results;
	});
</script>

<Topbar back={true} />

<h1>Zapisane</h1>

<section>
	{#each posts as post}
		<Article {...post} />
	{/each}

	{#if posts.length === 0}
		<p>Brak zapisanych artykułów</p>
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
