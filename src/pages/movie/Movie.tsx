import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import {
  fetchMovieThunk,
  fetchSimilarThunk,
  fetchVideoThunk,
} from "../../redux/movies";
import { IMAGES_URL } from "../../api";
import { MovieCard } from "../../components/movieCard";
import movieStyle from "./styles.module.css";

export const Movie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [similarPage, setSimilarPage] = useState(1);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieThunk(id));
      dispatch(fetchVideoThunk(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (id) {
      dispatch(fetchSimilarThunk({ id, page: similarPage }));
    }
  }, [dispatch, id, similarPage]);

  const { movie, videos, similar } = useAppSelector((state) => state.movies);

  return (
    <>
      <div className={movieStyle.main_info_container}>
      {movie?.backdrop_path !== "" && <img
          className={movieStyle.main_info_image}
           src={IMAGES_URL + movie?.backdrop_path}
          alt={movie?.title}
        /> ||
        movie?.poster_path !== "" && <img
          className={movieStyle.main_info_image}
           src={IMAGES_URL + movie?.poster_path}
          alt={movie?.title}
        />}
        <div className={movieStyle.main_info_text}>
          <div className={movieStyle.movie_sub_info}>
            <h3 className={movieStyle.release}>{movie?.release_date}</h3>
            <h3 className={movieStyle.runtime}>   |   {movie?.runtime} min.</h3>
            {movie?.adult && <h3 className={movieStyle.adult}>   |   18+</h3>}
          </div>
          <h3 className={movieStyle.genres}>
            {movie?.genres.map((item) => (
              <span className={movieStyle.genre}>{item.name} </span>
            ))}
          </h3>
          <h2 className={movieStyle.title}>{movie?.title}</h2>
          <h3 className={movieStyle.original_title}>{movie?.original_title}</h3>
          <h3 className={movieStyle.overview}>{movie?.overview}</h3>
        </div>
      </div>
      {videos.length > 0 && <h3 className={movieStyle.videos}>Videos: </h3>}
      <div className={movieStyle.videos_container}>
      {videos.map((video) => (
        <div>
          <h4 className={movieStyle.videos_title}>
            {video.type}: {video.name}
          </h4>
          <iframe
            width="400"
            height="305"
            src={"https://www.youtube.com/embed/" + video.key}
          ></iframe>
        </div>
      ))}
      </div>
      {similar.length > 0 && <h3 className={movieStyle.reco}>Recommendations: </h3>}
      <div className={movieStyle.reco_container}>
      {similar.map((movie) => (
        <MovieCard {...movie} />
      ))}
      </div>
      
       <button className={movieStyle.back_button} onClick={() => navigate(-1)}>
        Back to previous page...
      </button>
    </>
  );
};
