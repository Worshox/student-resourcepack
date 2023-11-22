<script>
	export let slug;
	export let href;
	export let src;
	export let alt;
	export let datetime;
	export let published;
	export let title;
	export let author;
	export let categories = [];

	import { db } from '../db.js';

	let unsaved = true;
	let savedID;

	db.savedPosts
		.where('slug')
		.equals(slug)
		.first()
		.then((result) => {
			if (result) {
				unsaved = false;
				savedID = result.id;
			}
		});

	async function savePost() {
		try {
			const id = await db.savedPosts.add({
				slug: slug,
				href: href,
				src: src,
				alt: alt,
				datetime: datetime,
				published: published,
				title: title,
				author: author
			});

			savedID = id;
		} catch (error) {
			console.error(`Failed to save post: ${error}`);
		}
	}

	async function unsavePost() {
		try {
			await db.savedPosts.delete(savedID);
		} catch (error) {
			console.error(`Failed to unsave post: ${error}`);
		}
	}
</script>

<article>
	<figure>
		<a {href}>
			<img {src} {alt} lazyloading />
		</a>
		<button
			on:click={() => {
				if (unsaved) {
					savePost();
				} else {
					unsavePost();
				}
				unsaved = !unsaved;
			}}
		>
			<svg
				class="saved-button"
				class:unsaved
				xmlns="http://www.w3.org/2000/svg"
				width="100"
				height="100"
				viewBox="0 0 36 36"
				><path
					d="M26 2H10a2 2 0 0 0-2 2v27.93a2 2 0 0 0 3.42 1.41l6.54-6.52l6.63 6.6A2 2 0 0 0 28 32V4a2 2 0 0 0-2-2Z"
					class="clr-i-solid clr-i-solid-path-1"
				/><path fill="none" d="M0 0h36v36H0z" /></svg
			>
			<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 36 36"
				><path
					d="M26 34a2 2 0 0 1-1.41-.58L18 26.82l-6.54 6.52A2 2 0 0 1 8 31.93V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2Zm0-2V4H10v27.93L18 24Z"
					class="clr-i-outline clr-i-outline-path-1"
				/><path fill="none" d="M0 0h36v36H0z" /></svg
			>
		</button>
		<figcaption>
			<a {href}>
				<time {datetime}>{published}</time>
				<h2>{title}</h2>
				<address>{author}</address>
			</a>
		</figcaption>
	</figure>
</article>

<style>
	a {
		color: var(--lm-font-color);
	}

	figure {
		position: relative;
		z-index: 1;
		margin: 0;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		aspect-ratio: 9/10;
		border-radius: 1.5rem 0 1.5rem 1.5rem;
	}

	button {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 2;
		display: flex;
		padding: 0.25rem 0.125rem;
		background: var(--lm-accent);
		border: none;
		border-radius: 0 0 0.5rem 0.5rem;
		cursor: pointer;
	}

	svg {
		width: 2rem;
		height: 2rem;
		fill: var(--lm-background);
	}

	.saved-button {
		margin-right: -2rem;
		transition: 0.3s;
	}

	.unsaved {
		opacity: 0;
	}

	figcaption a {
		margin-top: 0.5rem;
		display: grid;
		gap: 0.5rem;
	}

	h2 {
		font-size: 0.875rem;
		margin: 0;
	}

	time,
	address {
		font-size: 0.625rem;
		font-style: normal;
		text-transform: uppercase;
		line-height: 1;
	}
</style>
