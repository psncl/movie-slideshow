<script lang="ts">
	import { genres } from '$lib/movies';

	let { value = $bindable('') } = $props();

	const genreIcons: Record<string, string> = {
		Action: '/icons/icons8-action-50.png',
		Adventure: '/icons/icons8-adventure-50.png',
		Animation: '/icons/icons8-animation-50.png',
		Comedy: '/icons/icons8-comedy-50.png',
		Drama: '/icons/icons8-drama-50.png',
		Fantasy: '/icons/icons8-fantasy-50.png',
		Romance: '/icons/icons8-romance-48.png'
	};
</script>

<label class="genre-filter-label">
	<span class="sr-only">Filter by genre</span>
	<select id="genre-filter" name="genre-filter" class="genre-select" bind:value>
		<button>
			<selectedcontent class="flex items-center"></selectedcontent>
		</button>
		<option value="">All Genres</option>
		{#each genres as genre (genre)}
			<option value={genre}>
				<span class="genre-icon" style="--icon-src: url({genreIcons[genre]})"></span>
				{genre}
			</option>
		{/each}
	</select>
</label>

<style>
	:global(:root) {
		interpolate-size: allow-keywords;
	}

	.genre-filter-label {
		display: inline-flex;
	}

	.genre-select,
	.genre-select::picker(select) {
		appearance: base-select;
	}

	.genre-select {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		min-width: 14rem;
		padding: 0.6rem 1rem;
		font-family: 'Atkinson Hyperlegible', sans-serif;
		font-size: 1rem;
		color: oklch(95% 0.02 272);
		background: oklch(24% 0.03 280);
		border: 2px solid oklch(70% 0.15 194);
		border-radius: 0.75rem;
		cursor: pointer;
		box-shadow: 0 0 14px oklch(70% 0.15 194 / 40%);
		transition: border-color 0.2s ease, box-shadow 0.2s ease;
	}

	.genre-select:open {
		border-color: oklch(75% 0.2 340);
		box-shadow: 0 0 18px oklch(75% 0.2 340 / 50%);
	}

	.genre-select::picker-icon {
		color: oklch(70% 0.15 194);
		transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.genre-select:open::picker-icon {
		transform: rotate(180deg);
		color: oklch(75% 0.2 340);
	}

	.genre-select::picker(select) {
		background: oklch(22% 0.03 280);
		border: 2px solid oklch(70% 0.15 194 / 60%);
		border-radius: 0.75rem;
		padding: 0.4rem;
		margin-top: 0.4rem;
		overflow: hidden;

		transition:
			display 0.35s allow-discrete,
			overlay 0.35s allow-discrete,
			opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1),
			transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
		opacity: 0;
		transform: translateY(-0.5rem) scale(0.96);
	}

	.genre-select:open::picker(select) {
		opacity: 1;
		transform: translateY(0) scale(1);
	}

	@starting-style {
		.genre-select:open::picker(select) {
			opacity: 0;
			transform: translateY(-0.5rem) scale(0.96);
		}
	}

	.genre-select option {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.75rem 1rem;
		font-size: 1.05rem;
		border-radius: 0.5rem;
		color: oklch(95% 0.02 272);
	}

	.genre-icon {
		display: inline-block;
		width: 1.25rem;
		height: 1.25rem;
		margin-right: 2rem;
		background-color: oklch(90% 0.14 95);
		-webkit-mask-image: var(--icon-src);
		mask-image: var(--icon-src);
		-webkit-mask-size: contain;
		mask-size: contain;
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-position: center;
		mask-position: center;
	}

	.genre-select option:hover {
		background: oklch(35% 0.05 280);
	}

	.genre-select option:checked {
		font-weight: 700;
		background: oklch(40% 0.1 194 / 40%);
	}

	@media (prefers-reduced-motion: reduce) {
		.genre-select::picker(select),
		.genre-select::picker-icon {
			transition: none !important;
		}
	}
</style>
