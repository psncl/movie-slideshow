<script lang="ts">
	import { movies } from '$lib/movies';

	let { genreFilter = '' }: { genreFilter?: string } = $props();
</script>

<div class="grid w-full max-w-5xl grid-cols-2 gap-5 md:grid-cols-4">
	{#each movies as movie (movie.id)}
		{@const matches = genreFilter === '' || movie.genres.includes(genreFilter)}
		<div
			class="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-500"
			class:opacity-30={!matches}
			class:scale-90={!matches}
		>
			<div
				class="h-24 w-full"
				style:background="linear-gradient(135deg, {movie.colors[0]}, {movie.colors[1]})"
			></div>
			<div class="flex flex-1 flex-col gap-1 p-3">
				<p class="truncate text-lg font-semibold">{movie.title}</p>
				<p class="truncate text-xs text-white/60">{movie.genres.join(' · ')}</p>
				<p class="mt-1 text-sm font-bold text-cyan-300">★ {movie.rating.toFixed(1)}</p>
			</div>
		</div>
	{/each}
</div>
