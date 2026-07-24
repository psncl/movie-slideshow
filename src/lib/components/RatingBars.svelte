<script lang="ts">
	import { Action } from '@animotion/core';
	import { tween } from '@animotion/motion';
	import { movies } from '$lib/movies';

	// cool cyan hue at low ratings -> hot magenta/yellow hue at high ratings
	function ratingColor(rating: number) {
		const t = rating / 10;
		const hue = 195 + t * 145; // 195 (cyan) -> 340 (magenta)
		const chroma = 0.14 + t * 0.1;
		const lightness = 55 + t * 15;
		return `oklch(${lightness}% ${chroma} ${hue})`;
	}

	const bars = movies.map((movie) => ({
		movie,
		fill: tween({ width: 0 })
	}));

	let revealed = $state(movies.map(() => false));

	const actions = bars.map((bar, i) => async () => {
		revealed[i] = true;
		await bar.fill.to({ width: (bar.movie.rating / 10) * 100 });
	});
</script>

<div class="flex w-full max-w-4xl flex-col gap-5">
	<p class="mb-2 text-4xl font-bold drop-shadow-sm">🎬 Top Rated This Week</p>

	{#each bars as bar, i (bar.movie.id)}
		<div class="flex items-center gap-4 transition-opacity duration-500" class:opacity-30={!revealed[i]}>
			<span class="w-56 shrink-0 truncate text-xl font-semibold">{bar.movie.title}</span>
			<div class="h-6 flex-1 overflow-hidden rounded-full bg-white/10">
				<div
					class="h-full rounded-full"
					style:width="{bar.fill.width}%"
					style:background={ratingColor(bar.movie.rating)}
					style:box-shadow="0 0 12px {ratingColor(bar.movie.rating)}"
				></div>
			</div>
			<span class="w-14 shrink-0 text-right text-lg tabular-nums">{bar.movie.rating.toFixed(1)}</span>
		</div>
	{/each}
</div>

<Action {actions} />
