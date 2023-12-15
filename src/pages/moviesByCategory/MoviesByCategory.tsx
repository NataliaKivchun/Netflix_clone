import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { fetchMoviesByCategoryThunk } from "../../redux/movies";
import { MovieCard } from "../../components/movieCard";
import { Loader } from "../../components/loader";
import { AppPagination } from "../../components/pagination";
import moviesCategoryStyle from "./styles.module.css";

export const MoviesByCategory = ( {movieCategory}:{movieCategory : string}) => {
    const [page, setPage] = useState(1);
  
    const dispatch = useAppDispatch();
  
    console.log(movieCategory)
    useEffect(() => {
      dispatch(fetchMoviesByCategoryThunk({ page, category: movieCategory }));
    }, [dispatch, page, movieCategory]);
  
    const { isLoading, movies, total_pages } = useAppSelector(
      (state) => state.movies
    );

    return (
      <>
        <ul className={moviesCategoryStyle.list}>
          {!isLoading ? (
            movies.length > 0 ? (
              movies.map((card) => <MovieCard {...card} />)
            ) : (
              <p>No results...</p>
            )
          ) : (
            <Loader />
          )}
        </ul>
        {total_pages > 1 && (
          <AppPagination
            total_pages={total_pages}
            setPage={setPage}
            currentPage={page}
          />
        )}
      </>
    );
  };