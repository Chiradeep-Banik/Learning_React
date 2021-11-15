export interface FetchResponse {
    title: string;
    year: number;
    rated: RatingType;
    released: string;
    runtime: string;
    genre: GenreType[];
    director: string;
    writers: string[];
    actors: string[];
    plot: string;
    language: string;
    country: string;
    awards: string;
    poster: string | null;
    ratings: Rating[];
    metascore: number;
    imdbRating: number;
    imdbVotes: number;
    imdbId: string;
    type: DataType;
    dvd: string | null;
    boxOffice: string | null;
    production: string | null;
    website: string | null;
}
export interface ReactMovieCard {
    ratings: Rating[];
    title: string;
    plot: string;
    poster: string | null;
}

export interface Rating {
    source: string;
    value: string;
}
export type GenreType = 'Animation' | 'Adventure' | 'Comedy' | 'Family' | 'Fantasy' | string;

export type DataType = 'movie' | 'series' | 'episode';

export type RatingType = 'PG' | 'TV-MA' | string;
