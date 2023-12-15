export interface MovieCardProps {
  adult: boolean;
  id: string;
  title: string;
  poster_path: string;
  genre_ids: number[];
}

export interface MovieProps {
  adult: boolean;
  backdrop_path: string;
  genres: { id: number; name: string }[];
  id: string;
  original_title: string;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
}

export interface VideoProps {
  name: string; 
  key: string; 
  type: string 
}

export interface SuccessResponse<T> {
  success: true;
  data: T;
}

export interface ErrorResponse {
  success: false;
  error?: string;
}

export interface MoviesResponse {
  page: number;
  results: MovieCardProps[];
  total_pages: number;
  total_results: number;
}

export interface VideoResponse {
  id: string;
  results: VideoProps[];
}

export interface GenresResponse {
  genres: {id: number; name: string}[];
}

export type Response<T = never> = ErrorResponse | SuccessResponse<T>;
