<script>
	import '$lib/globals.css';
</script>

<div>
	<header>
		<img src="logo.svg" alt="Student Pack" />
	</header>

	<main>
		<slot />
	</main>

	<nav>
		<a href="/"> <img src="home.svg" alt="Strona główna" /> </a>
		<a href="/szukaj"> <img src="search.svg" alt="Szukaj" /> </a>
		<a href="/info"> <img src="info.svg" alt="Informacje" /> </a>
	</nav>
</div>

<style>
	div {
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
		max-width: 480px;
		min-height: 100vh;
	}

	header {
		display: grid;
		place-content: center;
		padding: 10px;
		box-shadow: 0 0 16px 0 #00000040;
	}

	header img {
		height: 50px;
	}

	main {
		flex: 1;
		padding: 0 20px;
	}

	nav {
		position: fixed;
		bottom: 0;
		z-index: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		width: 100%;
		max-width: 480px;
		padding: 10px;
		border-top: 1px solid #ddd;
		background-color: #fff;
	}

	nav img {
		width: 30px;
	}
</style>
