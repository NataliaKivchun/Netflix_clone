import { NavLink } from "react-router-dom";
import navStyle from "./styles.module.css";
import { useAppSelector } from "../../hooks/useRedux";

export const NavList = () => {
  const authorization = useAppSelector(state => state.auth.authorization)
  return (
    <ol className={navStyle.list}>
      <li>
        <NavLink className={navStyle.navlink} to="/">Home</NavLink>
      </li>
      { authorization && <li>
        <NavLink className={navStyle.navlink} to="/movies">Movies</NavLink>
      </li>}
    </ol>
  );
};