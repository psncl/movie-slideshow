<script lang="ts">
	import { Presentation, Slide, Code, Transition, Action } from '@animotion/core';
	import { tween } from '@animotion/motion';
	import GenreCloud from '$lib/components/GenreCloud.svelte';
	import GenreFilterSelect from '$lib/components/GenreFilterSelect.svelte';
	import MovieGrid from '$lib/components/MovieGrid.svelte';
	import MoviePage from '$lib/components/MoviePage.svelte';
	import { movies } from '$lib/movies';

	let genreFilter = $state('');
</script>

<Presentation options={{ history: true, transition: 'fade', controls: true, progress: true }}>
	<Slide class="h-full place-content-center place-items-center">
		<p class="text-4xl font-bold drop-shadow-sm">🎟️ Top Movies This Week</p>
		<p class="mt-8 text-2xl text-white/70">at your local cinema</p>
	</Slide>

	{#each movies as movie (movie.id)}
		<Slide class="h-full">
			<div id="movie-{movie.id}" class="h-full">
				<MoviePage {movie} />
			</div>
		</Slide>
	{/each}

	<Slide class="h-full place-content-center place-items-center">
		<GenreCloud />
	</Slide>

	<Slide class="h-full flex-col place-content-center place-items-center gap-8">
		<GenreFilterSelect bind:value={genreFilter} />
		<MovieGrid {genreFilter} />
	</Slide>
</Presentation>
