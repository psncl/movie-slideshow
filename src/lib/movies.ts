export type Movie = {
	id: string;
	title: string;
	genres: string[];
	rating: number; // out of 10
	runtime: number; // minutes
	colors: [string, string]; // gradient stops standing in for a poster
};

export const movies: Movie[] = [
	{
		id: 'nebula-drift',
		title: 'Nebula Drift',
		genres: ['Sci-Fi', 'Action'],
		rating: 8.4,
		runtime: 142,
		colors: ['oklch(55% 0.18 250)', 'oklch(75% 0.15 195)']
	},
	{
		id: 'midnight-static',
		title: 'Midnight Static',
		genres: ['Horror', 'Thriller'],
		rating: 7.6,
		runtime: 108,
		colors: ['oklch(25% 0.05 10)', 'oklch(45% 0.2 25)']
	},
	{
		id: 'the-last-encore',
		title: 'The Last Encore',
		genres: ['Drama', 'Romance'],
		rating: 8.9,
		runtime: 131,
		colors: ['oklch(55% 0.15 350)', 'oklch(70% 0.12 30)']
	},
	{
		id: 'glass-tigers',
		title: 'Glass Tigers',
		genres: ['Action', 'Thriller'],
		rating: 7.2,
		runtime: 118,
		colors: ['oklch(40% 0.1 260)', 'oklch(65% 0.2 40)']
	},
	{
		id: 'popcorn-and-chaos',
		title: 'Popcorn & Chaos',
		genres: ['Comedy'],
		rating: 6.8,
		runtime: 97,
		colors: ['oklch(80% 0.18 90)', 'oklch(65% 0.2 20)']
	},
	{
		id: 'wired-hearts',
		title: 'Wired Hearts',
		genres: ['Animation', 'Romance'],
		rating: 8.1,
		runtime: 104,
		colors: ['oklch(75% 0.15 340)', 'oklch(70% 0.15 195)']
	},
	{
		id: 'vermilion-hour',
		title: 'Vermilion Hour',
		genres: ['Drama', 'Thriller'],
		rating: 7.9,
		runtime: 126,
		colors: ['oklch(45% 0.18 20)', 'oklch(30% 0.08 280)']
	},
	{
		id: 'circuit-breakers',
		title: 'Circuit Breakers',
		genres: ['Sci-Fi', 'Comedy'],
		rating: 7.4,
		runtime: 112,
		colors: ['oklch(70% 0.15 160)', 'oklch(80% 0.18 95)']
	}
];

export const genres = [...new Set(movies.flatMap((movie) => movie.genres))].sort();

export const maxRuntime = Math.max(...movies.map((movie) => movie.runtime));
