<script>
	import { onMount } from 'svelte';

	let ul;
	let width;

	onMount(() => {
		ul.style.maxWidth = `${width / 1.95}px`;
	});
</script>

<section>
	<ul bind:this={ul} bind:offsetWidth={width}>
		<li>Zdrowie</li>
		<li>Polityka</li>
		<li>Studenci studentom</li>
		<li>Poznań</li>
		<li>Jedzenie</li>
		<li>Transport</li>
		<li>Studia</li>
		<li>Praca</li>
		<li>Mieszkanie</li>
		<li>Wskazówki</li>
		<li>Studenci studentom</li>
		<li>Jedzenie</li>
		<li>Poznań</li>
		<li>Polityka</li>
		<li>Mieszkanie</li>
		<li>Studia</li>
		<li>Zdrowie</li>
		<li>Praca</li>
		<li>Wskazówki</li>
		<li>Transport</li>
	</ul>
</section>

<style>
	section {
		overflow-x: auto;
	}

	ul {
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 10px;
		width: max-content;
		max-height: 20vh;
		margin: 0;
		padding: 15px 0;
	}

	li {
		width: fit-content;
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 50px;
		text-align: center;
	}
</style>
