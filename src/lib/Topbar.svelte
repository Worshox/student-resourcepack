<script>
	export let menu = false;
	export let back = false;
	export let actions = false;
</script>

<header>
	<div class="left">
		{#if menu}
			<a href="/menu">
				<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 36 36"
					><path
						fill="var(--lm-background)"
						d="M32 29H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2Z"
						class="clr-i-outline clr-i-outline-path-1"
					/><path
						fill="var(--lm-background)"
						d="M32 19H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2Z"
						class="clr-i-outline clr-i-outline-path-2"
					/><path
						fill="var(--lm-background)"
						d="M32 9H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2Z"
						class="clr-i-outline clr-i-outline-path-3"
					/><path fill="none" d="M0 0h36v36H0z" /></svg
				>
			</a>
		{/if}

		{#if back}
			<button on:click={(e) => history.back()}>
				<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 36 36"
					><path
						fill="var(--lm-background)"
						d="M20.87 11.14h-13l5.56-5.49A1 1 0 0 0 12 4.22l-8 7.91L12 20a1 1 0 0 0 1.41-1.42l-5.55-5.44h13a9.08 9.08 0 0 1 9.13 9a9 9 0 0 1-5 8a1 1 0 0 0 .94 1.86a11 11 0 0 0-5.06-20.82Z"
						class="clr-i-outline clr-i-outline-path-1"
					/><path fill="none" d="M0 0h36v36H0z" /></svg
				>
			</button>
		{/if}
	</div>
	{#if actions}
		<div class="right">
			<button>
				<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 36 36"
					><path
						fill="var(--lm-background)"
						d="M27.53 24a5 5 0 0 0-3.6 1.55l-12.19-6.1a4.47 4.47 0 0 0 0-2.8l12.21-6.21a5.12 5.12 0 1 0-1.07-1.7l-12.09 6.15a5 5 0 1 0 0 6.33l12.06 6.07a4.93 4.93 0 0 0-.31 1.71a5 5 0 1 0 5-5Zm0-20a3 3 0 1 1-3 3a3 3 0 0 1 3-3ZM7 21a3 3 0 1 1 3-3a3 3 0 0 1-3 3Zm20.53 11a3 3 0 1 1 3-3a3 3 0 0 1-3 3Z"
						class="clr-i-outline clr-i-outline-path-1"
					/><path fill="none" d="M0 0h36v36H0z" /></svg
				>
			</button>
			<div class="separator" />
			<button>
				<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 36 36"
					><path
						fill="var(--lm-background)"
						d="M26 34a2 2 0 0 1-1.41-.58L18 26.82l-6.54 6.52A2 2 0 0 1 8 31.93V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2Zm0-2V4H10v27.93L18 24Z"
						class="clr-i-outline clr-i-outline-path-1"
					/><path fill="none" d="M0 0h36v36H0z" /></svg
				>
			</button>
		</div>
	{/if}
</header>

<style>
	header {
		position: fixed;
		z-index: 1;
		left: 0;
		top: 1rem;
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.left,
	.right {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.5rem;
		background: var(--lm-accent);
	}

	.left {
		border-radius: 0 15px 15px 0;
	}

	.right {
		gap: 0.5rem;
		border-radius: 15px 0 0 15px;
	}

	a,
	button {
		display: flex;
	}

	button {
		padding: 0;
		background: transparent;
		border: none;
	}

	svg {
		width: 1.75rem;
		height: 1.75rem;
	}

	.separator {
		height: 100%;
		border-right: 1px solid var(--lm-background);
	}
</style>
