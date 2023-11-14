<script>
	export let data;

	import Topbar from '$lib/Topbar.svelte';

	const post = data.post;
</script>

<Topbar back={true} actions={true} />

<img src={post.src} alt={post.alt} />
<article>
	<div>
		<time datetime={post.datetime}>{post.published}</time>
		<h1>{post.title}</h1>
		<address>{post.author}</address>
	</div>
	<section>{@html post.content}</section>
</article>

<style>
	img {
		width: 100%;
		height: 45vh;
		object-fit: cover;
		border-bottom-left-radius: 50px;
		border-bottom-right-radius: 50px;
	}

	article {
		padding: 1rem 1.5rem 4rem;
	}

	div {
		margin-top: 0.5rem;
		display: grid;
		gap: 0.5rem;
	}

	h1 {
		margin: 0.5rem 0;
	}

	time,
	address {
		font-size: 0.875rem;
		font-style: normal;
		text-transform: uppercase;
		line-height: 1;
	}

	section {
		margin-top: 2rem;
	}
</style>
