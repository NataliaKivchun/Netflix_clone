import { useNavigate } from "react-router-dom";
import notFoundStyle from "./styles.module.css";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={notFoundStyle.background}>
        <h1 className={notFoundStyle.title}>Page not found!</h1>
        <h2 className={notFoundStyle.subtitle}>Error 404!</h2>
        <button className={notFoundStyle.button} onClick={() => navigate(-1)}>
          Back to previous page...
        </button>
      </div>
    </>
  );
};
