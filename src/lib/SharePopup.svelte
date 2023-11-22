<script>
	export let postURL;
</script>

<aside>
	<section>
		<h1>Udostępnij!</h1>
		<div>
			<a href="https://www.facebook.com/sharer.php?u={postURL}"
				><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M12.001 2c-5.523 0-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89c1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10Z"
					/></svg
				></a
			>
			<a href="https://twitter.com/share?url={postURL}"
				><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z"
					/></svg
				></a
			>
			<button
				on:click={(e) => {
					navigator.clipboard.writeText(postURL);
					alert('Skopiowano do schowka!');
				}}
				><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 36 36"
					><path
						fill="currentColor"
						d="M29.5 7h-19A1.5 1.5 0 0 0 9 8.5v24a1.5 1.5 0 0 0 1.5 1.5h19a1.5 1.5 0 0 0 1.5-1.5v-24A1.5 1.5 0 0 0 29.5 7ZM29 32H11V9h18Z"
						class="clr-i-outline clr-i-outline-path-1"
					/><path
						fill="currentColor"
						d="M26 3.5A1.5 1.5 0 0 0 24.5 2h-19A1.5 1.5 0 0 0 4 3.5v24A1.5 1.5 0 0 0 5.5 29H6V4h20Z"
						class="clr-i-outline clr-i-outline-path-2"
					/><path fill="none" d="M0 0h36v36H0z" /></svg
				></button
			>
		</div>
	</section>
</aside>

<style>
	aside {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: #00000080;
	}

	section {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: fit-content;
		margin: 0 auto;
		padding: 1.5rem;
		border-radius: 25px;
		background: var(--lm-background);
		box-shadow: 0 0 10px 0 #00000080;
	}

	h1 {
		font-size: 1.75rem;
		margin-top: 0;
		text-align: center;
	}

	div {
		display: flex;
		gap: 2rem;
	}

	svg {
		width: 3em;
		height: 3em;
		fill: var(--lm-accent);
	}

	button {
		border: none;
		background: transparent;
		color: var(--lm-accent);
	}
</style>
