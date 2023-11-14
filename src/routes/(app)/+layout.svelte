<script>
	import '$lib/globals.css';
	import Navbar from '$lib/Navbar.svelte';

	let appWidth;
</script>

<div bind:offsetWidth={appWidth} class="content-wrapper">
	{#if appWidth <= 480}
		<main>
			<slot />
		</main>
		<Navbar />
	{:else}
		<div class="mobile-info">
			<h1>Aplikacja dostępna tylko z poziomu urządzenia mobilnego</h1>
			<p>
				Przepraszamy ale aplikacja została stworzona tylko z myślą o urządzeniach mobilnych. <br />
				Prosimy o korzystanie z aplikacji na telefonie.
			</p>
		</div>
	{/if}
</div>

<style>
	.content-wrapper {
		position: relative;
		min-height: 100vh;
		background: var(--lm-background);
	}

	.mobile-info {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 80%;
		text-align: center;
	}

	main {
		overflow-y: auto;
		overflow-x: hidden;
		padding: 5rem 1rem;
	}
</style>
