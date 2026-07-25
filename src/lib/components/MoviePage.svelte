<script lang="ts">
	import { onMount } from 'svelte';
	import { tween } from '@animotion/motion';
	import { type Movie } from '$lib/movies';

	let { movie }: { movie: Movie } = $props();

	// cool cyan hue at low ratings -> hot magenta/yellow hue at high ratings
	function ratingColor(rating: number) {
		const t = rating / 10;
		const hue = 195 + t * 145; // 195 (cyan) -> 340 (magenta)
		const chroma = 0.14 + t * 0.1;
		const lightness = 55 + t * 15;
		return `oklch(${lightness}% ${chroma} ${hue})`;
	}

	function formatRuntime(minutes: number) {
		const h = Math.floor(minutes / 60);
		const m = minutes % 60;
		return `${h}h ${m}m`;
	}

	function titleCase(name: string) {
		return name
			.split(' ')
			.map((word) => (word.length ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word))
			.join(' ');
	}

	const imdbUrl = $derived(`https://www.imdb.com/title/tt${movie.imdbId}/`);

	const fill = tween({ width: 0 });

	onMount(() => {
		fill.to({ width: (movie.rating / 10) * 100 });
	});
</script>

<div class="relative flex h-full w-full flex-col justify-end overflow-hidden">
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

	<div class="relative flex flex-col gap-4 p-10">
		<div class="flex items-end justify-between gap-6">
			<p class="text-5xl font-black tracking-tight drop-shadow-[0_0_20px_rgba(0,0,0,0.6)]">
				{movie.title}
			</p>
			<span class="shrink-0 rounded-lg border border-white/25 bg-white/10 px-4 py-2 font-mono text-xl tabular-nums">
				{formatRuntime(movie.runtime)}
			</span>
		</div>

		<div class="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-2">
			<span class="text-sm font-bold tracking-widest text-white/60 uppercase">Directed by</span>
			<span class="text-xl font-semibold">{titleCase(movie.director)}</span>
		</div>

		<div class="flex flex-wrap gap-2">
			{#each movie.genres as genre (genre)}
				<span class="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm">{genre}</span>
			{/each}
		</div>

		<div class="flex items-center gap-4">
			<a
				href={imdbUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="flex shrink-0 items-center gap-2 rounded-md border border-white/20 bg-[#F5C518] px-3 py-1.5 transition-transform duration-200 hover:scale-105"
			>
				<svg viewBox="0 0 64 32" class="h-5 w-10" aria-hidden="true">
					<rect width="64" height="32" rx="4" fill="#F5C518" />
					<text
						x="32"
						y="22"
						text-anchor="middle"
						font-family="Arial, sans-serif"
						font-weight="700"
						font-size="16"
						fill="#000000"
					>
						IMDb
					</text>
				</svg>
			</a>

			<span class="w-14 shrink-0 text-lg tabular-nums">{movie.rating.toFixed(1)}</span>
			<div
				class="h-6 flex-1 overflow-hidden border border-white/15"
				style:background="repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0 4px, transparent 4px 8px)"
			>
				<div
					class="h-full"
					style:width="{fill.width}%"
					style:background="repeating-linear-gradient(45deg, {ratingColor(movie.rating)} 0 4px, oklch(0% 0 0 / 20%) 4px 8px)"
					style:box-shadow="0 0 12px {ratingColor(movie.rating)}"
				></div>
			</div>
		</div>
	</div>
</div>
