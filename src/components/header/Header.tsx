import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { logoutThunk } from "../../redux/auth";
import { NavList } from "../navList";
import headerStyle from "./styles.module.css";

export const Header = () => {
  const navigate = useNavigate();
  const authorization = useAppSelector(state => state.auth.authorization)
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk())
    navigate("/");
  };

  return (
    <header className={headerStyle.header}>
      <a href="#main" className={headerStyle.app_name}>
      </a>
      <NavList />
      {authorization ? (
        <button className={headerStyle.button} onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button
          className={headerStyle.button}
          onClick={() => navigate("/login")}
        >
          Sign In
        </button>
      )}
    </header>
  );
};

