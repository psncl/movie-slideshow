<script lang="ts">
	import { Action } from '@animotion/core';
	import { tween } from '@animotion/motion';
	import { movies, maxRuntime } from '$lib/movies';

	function formatRuntime(minutes: number) {
		const h = Math.floor(minutes / 60);
		const m = minutes % 60;
		return `${h}h ${m}m`;
	}

	const ticks = [30, 60, 90, 120, 150, 180].filter((tick) => tick <= maxRuntime + 30);

	const bars = movies.map((movie) => ({
		movie,
		fill: tween({ width: 0 })
	}));

	let revealed = $state(movies.map(() => false));

	const actions = bars.map((bar, i) => async () => {
		revealed[i] = true;
		await bar.fill.to({ width: (bar.movie.runtime / maxRuntime) * 100 });
	});
</script>

<div class="flex w-full max-w-4xl flex-col gap-5">
	<p class="mb-2 text-4xl font-bold drop-shadow-sm">⏱️ Runtime Lineup</p>

	{#each bars as bar, i (bar.movie.id)}
		<div class="flex items-center gap-4 transition-opacity duration-500" class:opacity-30={!revealed[i]}>
			<span class="w-56 shrink-0 truncate text-xl font-semibold">{bar.movie.title}</span>
			<div class="relative h-6 flex-1 overflow-visible rounded-full bg-white/10">
				<div class="h-full overflow-hidden rounded-full">
					<div
						class="h-full rounded-full bg-linear-to-r from-cyan-400 to-fuchsia-400"
						style:width="{bar.fill.width}%"
					></div>
				</div>
				{#each ticks as tick (tick)}
					<div
						class="absolute top-0 h-full w-px bg-white/30"
						style:left="{(tick / maxRuntime) * 100}%"
					></div>
					<span
						class="absolute top-7 -translate-x-1/2 text-xs text-white/40"
						style:left="{(tick / maxRuntime) * 100}%"
					>
						{tick}m
					</span>
				{/each}
			</div>
			<span class="w-20 shrink-0 text-right text-lg tabular-nums">{formatRuntime(bar.movie.runtime)}</span>
		</div>
	{/each}
</div>

<Action {actions} />
