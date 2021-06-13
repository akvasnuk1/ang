export interface Movie {
  id: number,
  backdrop_path: string,
  overview: string,
  vote_average: number,
  title: string,
  release_date: string,
  genre_ids: Array<number>,
  popularity: number,
  original_language: string
}
