<script lang="ts">
	import { type Movie } from '$lib/movies';

	let { movie }: { movie: Movie } = $props();
</script>

<div class="relative flex h-60 w-full flex-col justify-end overflow-hidden">
	{#if movie.poster}
		<img src={movie.poster} alt="" class="absolute inset-0 h-full w-full object-cover" />
	{:else}
		<div
			class="absolute inset-0"
			style:background="linear-gradient(135deg, {movie.colors[0]}, {movie.colors[1]})"
		></div>
	{/if}

	<div
		class="absolute inset-0"
		style:background="linear-gradient(to top, oklch(15% 0.01 272 / 92%) 15%, oklch(15% 0.01 272 / 20%) 60%, transparent 100%)"
	></div>

	<div class="relative flex flex-col gap-1 p-3 text-left">
		<p class="truncate text-lg font-semibold text-white">{movie.title}</p>
		<p class="truncate text-xs text-white/60">{movie.genres.join(' · ')}</p>
		<p class="mt-1 text-sm font-bold text-cyan-300">★ {movie.rating.toFixed(1)}</p>
	</div>
</div>
