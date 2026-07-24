<script lang="ts">
	import { Action } from '@animotion/core';
	import { tween } from '@animotion/motion';
	import { movies } from '$lib/movies';

	const gradient = tween({ c1: movies[0].colors[0], c2: movies[0].colors[1] });
	let title = $state(movies[0].title);

	const actions = movies.slice(1).map((movie) => async () => {
		title = movie.title;
		await gradient.to({ c1: movie.colors[0], c2: movie.colors[1] });
	});
</script>

<div
	class="relative flex h-full w-full items-center justify-center"
	style:background="linear-gradient(135deg, {gradient.c1}, {gradient.c2})"
>
	<p class="text-7xl font-black tracking-tight text-white drop-shadow-[0_0_30px_rgba(0,0,0,0.6)]">
		{title}
	</p>
</div>

<Action {actions} />
