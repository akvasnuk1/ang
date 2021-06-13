export interface MovieDetails {
  id: number,
  original_title: string,
  popularity: number,
  release_date: string,
  runtime: number,
  tagline: string,
  vote_average: number,
  poster_path: string,
  overview: string,
  backdrop_path: string,
  genres: Array<string>,
}
