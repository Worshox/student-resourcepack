<script>
	import '$lib/globals.css';
</script>

<div>
	<main>
		<slot />
	</main>
	<nav>
		<a href="/">
			<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 36 36"
				><path
					fill="var(--lm-background)"
					d="m33.71 17.29l-15-15a1 1 0 0 0-1.41 0l-15 15a1 1 0 0 0 1.41 1.41L18 4.41l14.29 14.3a1 1 0 0 0 1.41-1.41Z"
					class="clr-i-outline clr-i-outline-path-1"
				/><path
					fill="var(--lm-background)"
					d="M28 32h-5V22H13v10H8V18l-2 2v12a2 2 0 0 0 2 2h7V24h6v10h7a2 2 0 0 0 2-2V19.76l-2-2Z"
					class="clr-i-outline clr-i-outline-path-2"
				/><path fill="none" d="M0 0h36v36H0z" /></svg
			>
		</a>
		<a href="/odkrywaj">
			<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 36 36"
				><path
					fill="var(--lm-background)"
					d="M16.33 5.05A10.95 10.95 0 1 1 5.39 16A11 11 0 0 1 16.33 5.05m0-2.05a13 13 0 1 0 13 13a13 13 0 0 0-13-13Z"
					class="clr-i-outline clr-i-outline-path-1"
				/><path
					fill="var(--lm-background)"
					d="m35 33.29l-7.37-7.42l-1.42 1.41l7.37 7.42A1 1 0 1 0 35 33.29Z"
					class="clr-i-outline clr-i-outline-path-2"
				/><path fill="none" d="M0 0h36v36H0z" /></svg
			>
		</a>
		<a href="/media-room">
			<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 36 36"
				><path
					fill="var(--lm-background)"
					d="M32.12 10H3.88A1.88 1.88 0 0 0 2 11.88v18.24A1.88 1.88 0 0 0 3.88 32h28.24A1.88 1.88 0 0 0 34 30.12V11.88A1.88 1.88 0 0 0 32.12 10ZM32 30H4V12h28Z"
					class="clr-i-outline clr-i-outline-path-1"
				/><path
					fill="var(--lm-background)"
					d="M30.14 3a1 1 0 0 0-1-1h-22a1 1 0 0 0-1 1v1h24Z"
					class="clr-i-outline clr-i-outline-path-2"
				/><path
					fill="var(--lm-background)"
					d="M32.12 7a1 1 0 0 0-1-1h-26a1 1 0 0 0-1 1v1h28Z"
					class="clr-i-outline clr-i-outline-path-3"
				/><path
					fill="var(--lm-background)"
					d="M12.82 26.79a1.74 1.74 0 0 0 .93.28a1.68 1.68 0 0 0 .69-.15l9.77-4.36a1.69 1.69 0 0 0 0-3.1l-9.77-4.36a1.7 1.7 0 0 0-2.39 1.55v8.72a1.7 1.7 0 0 0 .77 1.42Zm.63-10.14a.29.29 0 0 1 .14-.25a.3.3 0 0 1 .16 0a.27.27 0 0 1 .12 0l9.77 4.35a.29.29 0 0 1 .18.28a.28.28 0 0 1-.18.27l-9.77 4.36a.28.28 0 0 1-.28 0a.31.31 0 0 1-.14-.25Z"
					class="clr-i-outline clr-i-outline-path-4"
				/><path fill="none" d="M0 0h36v36H0z" /></svg
			>
		</a>
	</nav>
</div>

<style>
	div {
		max-width: 480px;
		min-height: 100vh;
		background: var(--lm-background);
	}

	main {
		overflow-y: scroll;
		padding: 4rem 1rem 0;
	}

	nav {
		overflow: hidden;
		position: fixed;
		bottom: 0;
		z-index: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		width: 100%;
		max-width: 480px;
		height: fit-content;
		padding: 0.5rem;
		background-color: var(--lm-accent);
	}

	svg {
		width: 2.25rem;
		height: 2.25rem;
	}
</style>
