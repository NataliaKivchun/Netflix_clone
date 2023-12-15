import Api from ".";
import { API_KEY } from ".";
import { GenresResponse, MovieProps, MoviesResponse, VideoResponse } from "./types";

class CountriesApi extends Api {
    endpointAll = "/discover/movie"
    endpointOne = "/movie/"
    endpointSearch = "/search/movie"
    endpointGenre = "/genre/movie/list"

    async fetchAll(page: number, sort_by: string, genre_id: string) :Promise<MoviesResponse> {
        const { data } = await this.api.get<MoviesResponse>(this.endpointAll + `?sort_by=${sort_by}&with_genres=${genre_id}&page=${page}&` + `${API_KEY}`)
        return data
    }

    async searchAll(page: number, query: string) :Promise<MoviesResponse> {
        const { data } = await this.api.get<MoviesResponse>(this.endpointSearch + `?query=${query}&page=${page}&` + `${API_KEY}`)
        return data
    }

    async fetchOne(id: string): Promise<MovieProps> {
        const { data } = await this.api.get<MovieProps>(this.endpointOne + `${id}?` + `${API_KEY}`)
        return data
    }

    async fetchSimilar(id: string, page: number): Promise<MoviesResponse> {
        const { data } = await this.api.get<MoviesResponse>(this.endpointOne + `${id}/similar?page=${page}&` + `${API_KEY}`)
        return data
    }

    async fetchVideo(id: string): Promise<VideoResponse> {
        const { data } = await this.api.get<VideoResponse>(this.endpointOne + `${id}/videos?` + `${API_KEY}`)
        return data
    }

    async fetchMoviesByCategory(page: number, category: string): Promise<MoviesResponse> {
        const { data } = await this.api.get<MoviesResponse>(this.endpointOne + `${category}?page=${page}&` + `${API_KEY}`)
        return data
    }

    async fetchMoviesGenres(): Promise<GenresResponse> {
        const { data } = await this.api.get<GenresResponse>(this.endpointGenre + `?${API_KEY}`)
        return data
    }
}

export default new CountriesApi()