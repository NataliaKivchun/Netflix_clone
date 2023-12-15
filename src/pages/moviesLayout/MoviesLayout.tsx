import { NavLink, Outlet } from "react-router-dom";
import navMovieStyle from "./styles.module.css";
import './moviesLayout.css'

export const MoviesLayout = () => {
  return (
    <>
      <section className={navMovieStyle.movies_section}>
        <ol className={navMovieStyle.list}>
          <li className={navMovieStyle.list_item}>
            <NavLink className={navMovieStyle.navlink} to="/movies">
              All movies
            </NavLink>
          </li>
          <li className={navMovieStyle.list_item}>
            <NavLink className={navMovieStyle.navlink} to="/now_playing">
              Now playing
            </NavLink>
          </li>
          <li className={navMovieStyle.list_item}>
            <NavLink className={navMovieStyle.navlink} to="/popular">
              Popular
            </NavLink>
          </li>
          <li className={navMovieStyle.list_item}>
            <NavLink className={navMovieStyle.navlink} to="/upcoming">
              Upcoming
            </NavLink>
          </li>
        </ol>
        <div className={navMovieStyle.movies}>
          <Outlet />
        </div>
      </section>
    </>
  );
};
