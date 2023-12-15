import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./pages/MainLayout";
import { Movie } from "./pages/movie/Movie";
import { Movies } from "./pages/movies/Movies";
import { NotFound } from "./pages/notFound/NotFound";
import { Login } from "./pages/login/Login";
import { PrivateRoute } from "./pages/PrivateRoute";
import { useAppDispatch } from "./hooks/useRedux";
import { Suspense, lazy, useEffect } from "react";
import { checkAuthThunk } from "./redux/auth";
import { Loader } from "./components/loader";
import { MoviesLayout } from "./pages/moviesLayout/MoviesLayout";
import { MoviesByCategory } from "./pages/moviesByCategory/MoviesByCategory";

const Home = lazy(() => import("./pages/home/Home"));

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthThunk());
  }, [dispatch]);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
        <Route element={<MoviesLayout/>}>
          <Route path="/movies" element={<Movies />}/>
          <Route path="/now_playing" element={<MoviesByCategory movieCategory="now_playing" />} />
          <Route path="/popular" element={<MoviesByCategory movieCategory="popular" />} />
          <Route path="/upcoming" element={<MoviesByCategory movieCategory="upcoming" />} />
        </Route>
        </Route>
        <Route element={<PrivateRoute />}>
            <Route path="movies/:id" element={<Movie />} />
          </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
