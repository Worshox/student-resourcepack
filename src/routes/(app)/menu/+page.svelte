<script>
	import Topbar from '$lib/Topbar.svelte';
</script>

<Topbar menu={true} />

<section>
	<a href="/zapisane">
		<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 36 36"
			><path
				d="M26 34a2 2 0 0 1-1.41-.58L18 26.82l-6.54 6.52A2 2 0 0 1 8 31.93V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2Zm0-2V4H10v27.93L18 24Z"
				class="clr-i-outline clr-i-outline-path-1"
			/><path fill="none" d="M0 0h36v36H0z" /></svg
		>
		Zapisane
	</a>
	<a href="/ustawienia">
		<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 36 36"
			><path
				d="M18.1 11c-3.9 0-7 3.1-7 7s3.1 7 7 7s7-3.1 7-7s-3.1-7-7-7zm0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5z"
				class="clr-i-outline clr-i-outline-path-1"
			/><path
				d="m32.8 14.7l-2.8-.9l-.6-1.5l1.4-2.6c.3-.6.2-1.4-.3-1.9l-2.4-2.4c-.5-.5-1.3-.6-1.9-.3l-2.6 1.4l-1.5-.6l-.9-2.8C21 2.5 20.4 2 19.7 2h-3.4c-.7 0-1.3.5-1.4 1.2L14 6c-.6.1-1.1.3-1.6.6L9.8 5.2c-.6-.3-1.4-.2-1.9.3L5.5 7.9c-.5.5-.6 1.3-.3 1.9l1.3 2.5c-.2.5-.4 1.1-.6 1.6l-2.8.9c-.6.2-1.1.8-1.1 1.5v3.4c0 .7.5 1.3 1.2 1.5l2.8.9l.6 1.5l-1.4 2.6c-.3.6-.2 1.4.3 1.9l2.4 2.4c.5.5 1.3.6 1.9.3l2.6-1.4l1.5.6l.9 2.9c.2.6.8 1.1 1.5 1.1h3.4c.7 0 1.3-.5 1.5-1.1l.9-2.9l1.5-.6l2.6 1.4c.6.3 1.4.2 1.9-.3l2.4-2.4c.5-.5.6-1.3.3-1.9l-1.4-2.6l.6-1.5l2.9-.9c.6-.2 1.1-.8 1.1-1.5v-3.4c0-.7-.5-1.4-1.2-1.6zm-.8 4.7l-3.6 1.1l-.1.5l-.9 2.1l-.3.5l1.8 3.3l-2 2l-3.3-1.8l-.5.3c-.7.4-1.4.7-2.1.9l-.5.1l-1.1 3.6h-2.8l-1.1-3.6l-.5-.1l-2.1-.9l-.5-.3l-3.3 1.8l-2-2l1.8-3.3l-.3-.5c-.4-.7-.7-1.4-.9-2.1l-.1-.5L4 19.4v-2.8l3.4-1l.2-.5c.2-.8.5-1.5.9-2.2l.3-.5l-1.7-3.3l2-2l3.2 1.8l.5-.3c.7-.4 1.4-.7 2.2-.9l.5-.2L16.6 4h2.8l1.1 3.5l.5.2c.7.2 1.4.5 2.1.9l.5.3l3.3-1.8l2 2l-1.8 3.3l.3.5c.4.7.7 1.4.9 2.1l.1.5l3.6 1.1v2.8z"
				class="clr-i-outline clr-i-outline-path-2"
			/><path fill="none" d="M0 0h36v36H0z" /></svg
		>
		Ustawienia</a
	>
	<a href="/o-projekcie">
		<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 36 36"
			><path
				d="M18 2.25a11 11 0 0 0-11 11a10.68 10.68 0 0 0 1 4.63a16.36 16.36 0 0 0 1.12 1.78a17 17 0 0 1 2 3.47a16.19 16.19 0 0 1 .59 4h2a18.17 18.17 0 0 0-.71-4.69a18.46 18.46 0 0 0-2.22-3.92a15.79 15.79 0 0 1-1-1.54A8.64 8.64 0 0 1 9 13.23a9 9 0 0 1 18.07 0a8.64 8.64 0 0 1-.86 3.77a15.79 15.79 0 0 1-1 1.54a18.46 18.46 0 0 0-2.21 3.9a18.17 18.17 0 0 0-.71 4.71h2a16.19 16.19 0 0 1 .59-4a17 17 0 0 1 2-3.47A16.31 16.31 0 0 0 28 17.86a10.68 10.68 0 0 0 1-4.63A11 11 0 0 0 18 2.25Z"
				class="clr-i-outline clr-i-outline-path-1"
			/><path
				d="M18.63 15.51a.8.8 0 0 0-1.13 0l-3 3l2.86 3.13v5.54H19V21l-2.24-2.45l1.89-1.89a.8.8 0 0 0-.02-1.15Z"
				class="clr-i-outline clr-i-outline-path-2"
			/><path
				d="M23.86 29.15H12.11a.8.8 0 1 0 0 1.6h11.75a.8.8 0 0 0 0-1.6Z"
				class="clr-i-outline clr-i-outline-path-3"
			/><path
				d="M22 32.15h-8a.8.8 0 1 0 0 1.6h8a.8.8 0 1 0 0-1.6Z"
				class="clr-i-outline clr-i-outline-path-4"
			/><path
				d="m17.32 10.89l-2.73 2.73a.8.8 0 0 0 1.13 1.13L18.45 12a.8.8 0 1 0-1.13-1.13Z"
				class="clr-i-outline clr-i-outline-path-5"
			/><path fill="none" d="M0 0h36v36H0z" /></svg
		>
		O projekcie</a
	>
</section>

<style>
	section {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	section a {
		display: flex;
		gap: 0.75rem;
		width: 18rem;
		padding: 1.25rem 1rem 1rem 1rem;
		border: 5px solid var(--lm-accent);
		border-radius: 2rem;
		font-size: 1.75rem;
		font-weight: 700;
		color: var(--lm-font-color);
	}

	svg {
		width: 2rem;
		height: 2rem;
		margin-top: -0.125rem;
		fill: var(--lm-font-color);
	}
</style>
