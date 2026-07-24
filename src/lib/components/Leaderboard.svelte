<script lang="ts">
	import { Transition } from '@animotion/core';
	import { movies, type Movie } from '$lib/movies';

	const top5 = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 5);
	const revealOrder = [...top5].reverse(); // rank #5 first, rank #1 last

	function rankOf(movie: Movie) {
		return top5.findIndex((m) => m.id === movie.id) + 1;
	}

	function glow(rank: number) {
		if (rank === 1) return '0 0 40px oklch(85% 0.2 95)';
		if (rank === 2) return '0 0 25px oklch(80% 0.15 194)';
		if (rank === 3) return '0 0 18px oklch(75% 0.15 320)';
		return '0 0 10px oklch(60% 0.05 272)';
	}

	let board = $state<Movie[]>([]);

	const transitions = revealOrder.map((movie) => () => {
		board = [movie, ...board];
	});
</script>

<div class="flex w-full max-w-3xl flex-col items-center gap-6">
	<p class="mb-2 text-4xl font-bold drop-shadow-sm">🏆 This Week's Leaderboard</p>

	<Transition {transitions}>
		<div class="flex w-full flex-col gap-3">
			{#each board as movie (movie.id)}
				{const rank = rankOf(movie)}
				<Transition
					class="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-6 py-3"
					entry="rotate"
					duration={1}
					visible
					style="box-shadow: {glow(rank)}; scale: {1 + (5 - rank) * 0.015};"
				>
					<span class="w-12 shrink-0 text-3xl font-black tabular-nums">#{rank}</span>
					<span class="flex-1 truncate text-2xl font-semibold">{movie.title}</span>
					<span class="text-xl tabular-nums opacity-80">{movie.rating.toFixed(1)}</span>
				</Transition>
			{/each}
		</div>
	</Transition>
</div>
