<script lang="ts">
	import { Presentation, Slide, Code, Transition, Action } from '@animotion/core';
	import { tween } from '@animotion/motion';
	import PosterCrossfade from '$lib/components/PosterCrossfade.svelte';
	import RatingBars from '$lib/components/RatingBars.svelte';
	import RuntimeBars from '$lib/components/RuntimeBars.svelte';
	import Leaderboard from '$lib/components/Leaderboard.svelte';
	import GenreCloud from '$lib/components/GenreCloud.svelte';
	import GenreFilterSelect from '$lib/components/GenreFilterSelect.svelte';
	import MovieGrid from '$lib/components/MovieGrid.svelte';

	let text: HTMLParagraphElement;
	let code: Code;
	let circle = tween({ x: 0, y: 80, r: 80, fill: '#00ffff' });
	let items = $state([1, 2, 3, 4]);
	let layout = $state('flex gap-4');

	let genreFilter = $state('');
</script>

<Presentation options={{ history: true, transition: 'slide', controls: true, progress: true }}>
	<Slide class="h-full place-content-center place-items-center">
		<p class="text-4xl font-bold drop-shadow-sm">🎟️ Top Movies This Week</p>
		<p class="mt-8 text-2xl text-white/70">at your local cinema</p>
	</Slide>

	<Slide class="h-full place-content-center place-items-center">
		<PosterCrossfade />
	</Slide>

	<Slide class="h-full place-content-center place-items-center">
		<RatingBars />
	</Slide>

	<Slide class="h-full place-content-center place-items-center">
		<RuntimeBars />
	</Slide>

	<Slide class="h-full place-content-center place-items-center">
		<GenreCloud />
	</Slide>

	<Slide class="h-full place-content-center place-items-center">
		<Leaderboard />
	</Slide>

	<Slide class="h-full flex-col place-content-center place-items-center gap-8">
		<GenreFilterSelect bind:value={genreFilter} />
		<MovieGrid {genreFilter} />
	</Slide>
</Presentation>
