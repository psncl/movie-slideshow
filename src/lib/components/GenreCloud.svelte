<script lang="ts">
	import { Action } from '@animotion/core';
	import { movies, genres } from '$lib/movies';

	const counts = genres.map((genre) => movies.filter((movie) => movie.genres.includes(genre)).length);
	const maxCount = Math.max(...counts);

	function sizeFor(count: number) {
		const t = count / maxCount;
		return 1.5 + t * 2.5; // rem
	}

	let activeGenre = $state('');

	const actions = genres.map((genre) => () => {
		activeGenre = genre;
	});

	function matches(movie: (typeof movies)[number]) {
		return activeGenre === '' || movie.genres.includes(activeGenre);
	}
</script>

<div class="flex w-full max-w-4xl flex-col items-center gap-10">
	<p class="text-4xl font-bold drop-shadow-sm">🏷️ Genre Cloud</p>

	<div class="flex flex-wrap justify-center gap-x-6 gap-y-3">
		{#each genres as genre, i (genre)}
			<span
				class="font-bold transition-all duration-500"
				class:text-cyan-300={activeGenre === genre}
				class:opacity-40={activeGenre !== '' && activeGenre !== genre}
				style:font-size="{sizeFor(counts[i])}rem"
				style:text-shadow={activeGenre === genre ? '0 0 20px oklch(80% 0.18 194)' : 'none'}
			>
				{genre}
			</span>
		{/each}
	</div>

	<div class="flex flex-wrap justify-center gap-3">
		{#each movies as movie (movie.id)}
			<span
				class="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm transition-opacity duration-500"
				class:opacity-20={!matches(movie)}
			>
				{movie.title}
			</span>
		{/each}
	</div>
</div>

<Action {actions} />
