<script>
	import { onMount } from 'svelte';
	import { topicFilters } from '../stores.js';

	let section;
	let width;

	onMount(() => {
		section.style.maxWidth = `${width / 1.85}px`;
	});
</script>

<section>
	<div class="topics" bind:this={section} bind:offsetWidth={width}>
		<div class="topic">
			<input
				type="checkbox"
				name="topic"
				id="mieszkanie"
				value="mieszkanie"
				bind:group={$topicFilters}
			/>
			<label for="mieszkanie">Mieszkanie</label>
		</div>
		<div class="topic">
			<input
				type="checkbox"
				name="topic"
				id="ekonomia"
				value="ekonomia"
				bind:group={$topicFilters}
			/>
			<label for="ekonomia">Ekonomia</label>
		</div>
		<div class="topic">
			<input type="checkbox" name="topic" id="zdrowie" value="zdrowie" bind:group={$topicFilters} />
			<label for="zdrowie">Zdrowie</label>
		</div>
		<div class="topic">
			<input
				type="checkbox"
				name="topic"
				id="oszczedzanie"
				value="oszczedzanie"
				bind:group={$topicFilters}
			/>
			<label for="oszczedzanie">Oszczędzanie</label>
		</div>
		<div class="topic">
			<input type="checkbox" name="topic" id="praca" value="praca" bind:group={$topicFilters} />
			<label for="praca">Praca</label>
		</div>
		<div class="topic">
			<input type="checkbox" name="topic" id="prawo" value="prawo" bind:group={$topicFilters} />
			<label for="prawo">Prawo</label>
		</div>
		<div class="topic">
			<input type="checkbox" name="topic" id="inne" value="inne" bind:group={$topicFilters} />
			<label for="inne">Inne</label>
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
