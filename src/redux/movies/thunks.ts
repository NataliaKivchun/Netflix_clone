import moviesApi from '../../api/movies'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchMoviesThunk = createAsyncThunk(
    'movies/fetchMovies',
    async({page, sort_by, genre_id} : {page: number, sort_by: string, genre_id: string}, {rejectWithValue}) => {
        try {
            const response = await moviesApi.fetchAll(page, sort_by, genre_id)
            return response
        } catch(error : any) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const searchMoviesThunk = createAsyncThunk(
    'movies/searchMovies',
    async({page, query=""}: {page: number, query: string} , {rejectWithValue}) => {
        try {
            const response = await moviesApi.searchAll(page, query)
            return response
        } catch(error : any) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const fetchMovieThunk = createAsyncThunk(
    'movies/fetchMovie',
    async(id: string, {rejectWithValue}) => {
        try {
            const response = await moviesApi.fetchOne(id)
            return response
        } catch(error : any) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const fetchSimilarThunk = createAsyncThunk(
    'movies/fetchSimilar',
    async({id, page} : {id: string, page: number}, {rejectWithValue}) => {
        try {
            const response = await moviesApi.fetchSimilar(id, page)
            return response
        } catch(error : any) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const fetchVideoThunk = createAsyncThunk(
    'movies/fetchVideo',
    async(id: string, {rejectWithValue}) => {
        try {
            const response = await moviesApi.fetchVideo(id)
            return response
        } catch(error : any) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const fetchMoviesByCategoryThunk = createAsyncThunk(
    'movies/MoviesByCategory',
    async({page, category} : {page: number, category: string}, {rejectWithValue}) => {
        try {
            const response = await moviesApi.fetchMoviesByCategory(page, category)
            return response
        } catch(error : any) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const fetchMoviesGenresThunk = createAsyncThunk(
    'movies/MoviesGenres',
    async(_, {rejectWithValue}) => {
        try {
            const response = await moviesApi.fetchMoviesGenres()
            return response
        } catch(error : any) {
            return rejectWithValue(error.response.data)
        }
    }
)

