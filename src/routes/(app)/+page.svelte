<script>
	export let data;

	import Topbar from '$lib/Topbar.svelte';
	import HeroArticle from '$lib/HeroArticle.svelte';

	const posts = data.posts;

	let touchstartX = 0;
	let touchendX = 0;
	let activeImage = 0;

	function swipe() {
		if (touchendX < touchstartX && activeImage < 2) activeImage++;
		if (touchendX > touchstartX && activeImage > 0) activeImage--;
	}
</script>

<Topbar menu={true} />
<h1>Cześć!</h1>
<h2>POLECAMY</h2>

<section>
	<div
		on:touchstart={(e) => {
			touchstartX = e.changedTouches[0].screenX;
		}}
		on:touchend={(e) => {
			touchendX = e.changedTouches[0].screenX;
			swipe();
		}}
		class={activeImage === 1 ? 'slide-1' : activeImage === 2 ? 'slide-2' : ''}
	>
		<!-- {#each posts as post} -->
		<HeroArticle {...posts[0]} />
		<HeroArticle {...posts[0]} />
		<HeroArticle {...posts[0]} />
		<!-- {/each} -->
	</div>
	<nav>
		<button
			class={activeImage == 0 ? 'active' : ''}
			on:click={() => {
				activeImage = 0;
			}}>&bull;</button
		>
		<button
			class={activeImage == 1 ? 'active' : ''}
			on:click={() => {
				activeImage = 1;
			}}>&bull;</button
		>
		<button
			class={activeImage == 2 ? 'active' : ''}
			on:click={() => {
				activeImage = 2;
			}}>&bull;</button
		>
	</nav>
</section>

<style>
	div {
		display: flex;
		gap: 2rem;
		width: calc(300% + 4rem);
		padding-bottom: 1rem;
		transition: 0.3s;
	}

	.slide-1 {
		margin-left: calc(-100% - 2rem);
	}

	.slide-2 {
		margin-left: calc(-200% - 4rem);
	}

	nav {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	button {
		padding: 0;
		background: transparent;
		border: none;
		font-size: 2rem;
		line-height: 0.75em;
		color: lightgrey;
		transition: 0.3s;
	}

	.active {
		color: var(--lm-accent);
	}
</style>
