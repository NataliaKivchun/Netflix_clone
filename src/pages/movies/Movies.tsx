import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Loader } from "../../components/loader";
import { MovieCard } from "../../components/movieCard";
import { SearchInput } from "../../components/searchInput";
// import cardsStyle from './styles.module.css';
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { fetchMoviesGenresThunk, fetchMoviesThunk, searchMoviesThunk } from "../../redux/movies";
import { AppPagination } from "../../components/pagination";
import { SortSelect } from "../../components/sortSelect/SortSelect";
import { GenreChooser } from "../../components/genreChooser";
import moviesStyle from "./styles.module.css";

export const Movies = () => {
  const [query, setQuery] = useState("");
  const [currentPage, setPage] = useState<number>(1);
  const [sort_by, setCurrentSort] = useState<string>("popularity.desc");
  const [chosenGenre, setGenre] = useState<string>("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMoviesThunk({ page: currentPage, sort_by, genre_id: chosenGenre }));
    dispatch(fetchMoviesGenresThunk())
  }, [dispatch, currentPage, sort_by, chosenGenre]);

  useEffect(() => {
    if (query.trim()) {
      dispatch(searchMoviesThunk({ page: currentPage, query }));
    } else {
      dispatch(fetchMoviesThunk({ page: currentPage, sort_by, genre_id: chosenGenre }));
    }
  }, [dispatch, currentPage, query, sort_by, chosenGenre]);

  const { isLoading, movies, total_pages, genres } = useAppSelector(
    (state) => state.movies
  );

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setGenre("")
    setPage(1)
  };

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrentSort(event.target.value);
    setPage(1)
  };

  const handleChooseGenre = (event: ChangeEvent<HTMLInputElement>) => {
    setGenre(event.target.value);
    setPage(1)
  };

  return (
    <>
      <div className={moviesStyle.search_sort}>
        <SearchInput
        onChange={handleSearch}
        value={query}
        placeholder="Search..."
      />
      <SortSelect onChange={handleSelect} name="sortType" id="sortType"/></div>
      
      <GenreChooser genresArray={genres} handleChooseGenre={handleChooseGenre} currentGenre={chosenGenre}/>
      <ul className={moviesStyle.list}>
        {!isLoading ? (
          movies.length > 0 ? (
            movies.map((card) => <MovieCard {...card} />)
          ) : (
            <p className={moviesStyle.no_result}>No results...</p>
          )
        ) : (
          <Loader />
        )}
      </ul>
      {total_pages > 1 && (
        <AppPagination
          total_pages={total_pages}
          setPage={setPage}
          currentPage={currentPage}
        />
      )}
    </>
  );
};
