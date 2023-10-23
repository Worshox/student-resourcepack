<script>
	export let href = '#';
	export let src = 'placeholder.webp';
	export let alt = 'Lorem Ipsum';

	let unsaved = true;
</script>

<article>
	<a {href}>
		<figure>
			<img {src} {alt} />
			<button
				on:click={() => {
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
						fill="var(--lm-background)"
						d="M26 2H10a2 2 0 0 0-2 2v27.93a2 2 0 0 0 3.42 1.41l6.54-6.52l6.63 6.6A2 2 0 0 0 28 32V4a2 2 0 0 0-2-2Z"
						class="clr-i-solid clr-i-solid-path-1"
					/><path fill="none" d="M0 0h36v36H0z" /></svg
				>
				<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 36 36"
					><path
						fill="var(--lm-background)"
						d="M26 34a2 2 0 0 1-1.41-.58L18 26.82l-6.54 6.52A2 2 0 0 1 8 31.93V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2Zm0-2V4H10v27.93L18 24Z"
						class="clr-i-outline clr-i-outline-path-1"
					/><path fill="none" d="M0 0h36v36H0z" /></svg
				>
			</button>
			<figcaption>
				<a href="#" class="play">
					<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 36 36"
						><path
							fill="var(--lm-background)"
							d="M32.16 16.08L8.94 4.47A2.07 2.07 0 0 0 6 6.32v23.21a2.06 2.06 0 0 0 3 1.85l23.16-11.61a2.07 2.07 0 0 0 0-3.7Z"
							class="clr-i-solid clr-i-solid-path-1"
						/><path fill="none" d="M0 0h36v36H0z" /></svg
					>
				</a>
				<time datetime="2023-10-19">19.10.2023</time>
				<h2>Lorem ipsum</h2>
				<address>Martyna Nowak</address>
			</figcaption>
		</figure>
	</a>
</article>

<style>
	article {
		width: clamp(18rem, 70vw, 22rem);
		margin: 0 auto;
	}

	a {
		color: var(--lm-font-color);
	}

	figure {
		position: relative;
		margin: 0;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		aspect-ratio: 9/10;
		border: 5px solid var(--lm-accent);
		border-radius: 3rem 0 3rem 3rem;
	}

	button {
		position: absolute;
		top: 0;
		right: 0;
		display: flex;
		padding: 0.25rem 0.125rem;
		background: var(--lm-accent);
		border: none;
		border-radius: 0 0 0.5rem 0.5rem;
		cursor: pointer;
	}

	svg {
		width: 2.5rem;
		height: 2.5rem;
	}

	.saved-button {
		margin-right: -2.5rem;
		transition: 0.3s;
	}

	.unsaved {
		opacity: 0;
	}

	figcaption {
		margin-top: 0.5rem;
		display: grid;
		gap: 0.375rem;
	}

	figcaption a {
		display: flex;
		width: fit-content;
		padding: 0.5rem;
		margin-left: 50%;
		margin-top: -2.5rem;
		transform: translateX(-50%);
		background: var(--lm-accent);
		border-radius: 2.5rem;
	}

	figcaption svg {
		width: 2rem;
		height: 2rem;
	}

	h2 {
		font-size: 1.125rem;
		margin: 0;
	}

	time,
	address {
		font-size: 0.75rem;
		font-style: normal;
		text-transform: uppercase;
		line-height: 1;
	}
</style>
