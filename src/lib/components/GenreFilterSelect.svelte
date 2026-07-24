<script lang="ts">
	import { genres } from '$lib/movies';

	let { value = $bindable('') } = $props();
</script>

<label class="genre-filter-label">
	<span class="sr-only">Filter by genre</span>
	<select id="genre-filter" name="genre-filter" class="genre-select" bind:value>
		<button>
			<selectedcontent></selectedcontent>
		</button>
		<option value="">All Genres</option>
		{#each genres as genre (genre)}
			<option value={genre}>{genre}</option>
		{/each}
	</select>
</label>
