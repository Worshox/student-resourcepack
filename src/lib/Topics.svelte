<script>
	import { onMount } from 'svelte';

	let section;
	let width;

	onMount(() => {
		section.style.maxWidth = `${width / 1.85}px`;
	});

	let topic = '';
</script>

<section>
	<div class="topics" bind:this={section} bind:offsetWidth={width}>
		<div class="topic">
			<input type="radio" name="topic" id="zdrowie" value="zdrowie" bind:group={topic} />
			<label for="zdrowie">Zdrowie</label>
		</div>
		<div class="topic">
			<input type="radio" name="topic" id="polityka" value="polityka" bind:group={topic} />
			<label for="polityka">Polityka</label>
		</div>
		<div class="topic">
			<input type="radio" name="topic" id="oszczedzanie" value="oszczedzanie" bind:group={topic} />
			<label for="oszczedzanie">Oszczędzanie</label>
		</div>
		<div class="topic">
			<input type="radio" name="topic" id="poznan" value="poznan" bind:group={topic} />
			<label for="poznan">Poznań</label>
		</div>
		<div class="topic">
			<input type="radio" name="topic" id="jedzenie" value="jedzenie" bind:group={topic} />
			<label for="jedzenie">Jedzenie</label>
		</div>
		<div class="topic">
			<input type="radio" name="topic" id="transport" value="transport" bind:group={topic} />
			<label for="transport">Transport</label>
		</div>
		<div class="topic">
			<input type="radio" name="topic" id="studia" value="studia" bind:group={topic} />
			<label for="studia">Studia</label>
		</div>
		<div class="topic">
			<input type="radio" name="topic" id="praca" value="praca" bind:group={topic} />
			<label for="praca">Praca</label>
		</div>
		<div class="topic">
			<input type="radio" name="topic" id="mieszkanie" value="mieszkanie" bind:group={topic} />
			<label for="mieszkanie">Mieszkanie</label>
		</div>
		<div class="topic">
			<input type="radio" name="topic" id="wskazowki" value="wskazowki" bind:group={topic} />
			<label for="wskazowki">Wskazówki</label>
		</div>
	</div>
</section>

<style>
	section {
		width: 100%;
		overflow-x: auto;
	}

	.topics {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 10px;
		width: max-content;
		max-height: 8rem;
		margin: 0;
		padding: 15px 0;
	}

	input {
		display: none;
	}

	label {
		display: inline-block;
		width: fit-content;
		padding: 0.5rem 1rem 0.375rem;
		border: 2px solid var(--lm-accent);
		border-radius: 50px;
		font-weight: 700;
		color: var(--lm-accent);
		text-align: center;
		text-transform: uppercase;
		transition: 0.3s;
	}

	input:checked + label {
		background: var(--lm-accent);
		color: var(--lm-background);
	}
</style>
