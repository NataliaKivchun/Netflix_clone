import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchMoviesByCategoryThunk, fetchMoviesGenresThunk, fetchMoviesThunk, fetchMovieThunk, fetchSimilarThunk, fetchVideoThunk, searchMoviesThunk } from "./thunks";
import { MovieCardProps, MovieProps, VideoProps } from '../../api/types';

interface MovieState {
    isLoading: boolean
    movies: MovieCardProps[]
    total_pages: number
    movie?: MovieProps
    videos: VideoProps[]
    similar: MovieCardProps[]
    similar_total_pages: number
    genres: {id: number; name: string}[]
    error: unknown
}

const initialState: MovieState = {
    isLoading: false,
    movies: [],
    total_pages: 0,
    videos: [],
    similar: [],
    similar_total_pages: 0,
    genres: [],
    error: '',
  };

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(fetchMoviesThunk.pending.match, (state) => {
            state.isLoading = true
        })
        builder.addMatcher(fetchMoviesThunk.fulfilled.match, (state, action) => {
            state.isLoading = false
            state.movies = [...action.payload.results]
            state.total_pages = action.payload.total_pages
        })
        builder.addMatcher(fetchMoviesThunk.rejected.match, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
        builder.addMatcher(searchMoviesThunk.pending.match, (state) => {
            state.isLoading = true
        })
        builder.addMatcher(searchMoviesThunk.fulfilled.match, (state, action) => {
            state.isLoading = false
            state.movies = [...action.payload.results] 
            state.total_pages = action.payload.total_pages
        })
        builder.addMatcher(searchMoviesThunk.rejected.match, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
        builder.addMatcher(fetchMovieThunk.pending.match, (state) => {
            state.isLoading = true
        })
        builder.addMatcher(fetchMovieThunk.fulfilled.match, (state, action) => {
            state.isLoading = false
            state.movie = action.payload 
        })
        builder.addMatcher(fetchMovieThunk.rejected.match, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
        builder.addMatcher(fetchSimilarThunk.pending.match, (state) => {
            state.isLoading = true
        })
        builder.addMatcher(fetchSimilarThunk.fulfilled.match, (state, action) => {
            state.isLoading = false
            state.similar = [...action.payload.results] 
            state.similar_total_pages = action.payload.total_pages
        })
        builder.addMatcher(fetchSimilarThunk.rejected.match, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
        builder.addMatcher(fetchVideoThunk.pending.match, (state) => {
            state.isLoading = true
        })
        builder.addMatcher(fetchVideoThunk.fulfilled.match, (state, action) => {
            state.isLoading = false
            state.videos = [...action.payload.results]
        })
        builder.addMatcher(fetchSimilarThunk.rejected.match, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
        builder.addMatcher(fetchMoviesByCategoryThunk.pending.match, (state) => {
            state.isLoading = true
        })
        builder.addMatcher(fetchMoviesByCategoryThunk.fulfilled.match, (state, action) => {
            state.isLoading = false
            state.movies = [...action.payload.results] 
            state.total_pages = action.payload.total_pages
        })
        builder.addMatcher(fetchMoviesByCategoryThunk.rejected.match, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
        builder.addMatcher(fetchMoviesGenresThunk.pending.match, (state) => {
            state.isLoading = true
        })
        builder.addMatcher(fetchMoviesGenresThunk.fulfilled.match, (state, action) => {
            state.isLoading = false
            state.genres = [...action.payload.genres]
        })
        builder.addMatcher(fetchMoviesGenresThunk.rejected.match, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

