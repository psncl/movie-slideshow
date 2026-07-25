<script lang="ts">
	import { movies } from '$lib/movies';
	import MovieCard from './MovieCard.svelte';

	let { genreFilter = '' }: { genreFilter?: string } = $props();
</script>

<div class="grid w-full max-w-5xl grid-cols-2 gap-5 md:grid-cols-4">
	{#each movies as movie (movie.id)}
		{const matches = $derived(genreFilter === '' || movie.genres.includes(genreFilter))}
		<a
			href="#movie-{movie.id}"
			class="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 no-underline transition-all duration-500 hover:border-[oklch(70%_0.15_194)] hover:shadow-[0_0_18px_oklch(70%_0.15_194/50%)]"
			class:opacity-30={!matches}
			class:scale-90={!matches}
		>
			<MovieCard {movie} />
		</a>
	{/each}
</div>
