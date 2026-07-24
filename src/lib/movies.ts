export type Movie = {
	id: string;
  title: string;
  director: string;
  imdbId: string;
  genres: string[];
	poster? : string
	rating: number; // out of 10
	runtime: number; // minutes
	colors: [string, string]; // gradient stops standing in for a poster
};

export const movies: Movie[] = [
	{
		id: 'the-odyssey',
    title: 'The Odyssey',
    director: 'Christopher Nolan',
    imdbId: '33764258',
		poster: 'https://res.cloudinary.com/db9gbxhad/image/upload/v1784936891/33764258_wyj4tm.jpg',
		genres: ['Adventure','Drama','Fantasy','Romance'],
		rating: 8.5,
		runtime: 173,
		colors: ['oklch(30% 0.08 260)', 'oklch(75% 0.15 70)']
	},
	{
		id: 'the-invite',
		title: 'The Invite',
		director: 'Olivia Wilde',
    imdbId: '14173636',
		poster: 'https://res.cloudinary.com/db9gbxhad/image/upload/v1784936892/14173636_dqwmfu.jpg',
		genres: ['Comedy', 'Drama'],
		rating: 6.2,
		runtime: 107,
		colors: ['oklch(60% 0.15 30)', 'oklch(40% 0.1 300)']
	},
	{
		id: 'toy-story-5',
		title: 'Toy Story 5',
		director: 'Andrew Stanton',
    imdbId: '29355505',
		poster: 'https://res.cloudinary.com/db9gbxhad/image/upload/v1784936890/29355505_jhjgb0.jpg',
		genres: ['Animation', 'Adventure', 'Comedy'],
		rating: 7.4,
		runtime: 102,
		colors: ['oklch(65% 0.2 40)', 'oklch(55% 0.18 250)']
	},
	{
		id: 'moana',
		title: 'Moana',
		director: 'Thomas Kail',
    imdbId: '27419466',
		poster: 'https://res.cloudinary.com/db9gbxhad/image/upload/v1784936890/27419466_govbnr.jpg',
		genres: ['Action', 'Adventure', 'Comedy'],
		rating: 5.6,
		runtime: 115,
		colors: ['oklch(70% 0.15 195)', 'oklch(80% 0.18 95)']
	},
	{
		id: 'minions-and-monsters',
		title: 'Minions & Monsters',
		director: 'Pierre Coffin',
    imdbId: '32890033',
		poster: 'https://res.cloudinary.com/db9gbxhad/image/upload/v1784936889/32890033_n9hjjj.jpg',
		genres: ['Animation', 'Adventure', 'Comedy'],
		rating: 6.5,
		runtime: 89,
		colors: ['oklch(80% 0.18 95)', 'oklch(65% 0.2 40)']
	}
];

export const genres = [...new Set(movies.flatMap((movie) => movie.genres))].sort();

export const maxRuntime = Math.max(...movies.map((movie) => movie.runtime));
