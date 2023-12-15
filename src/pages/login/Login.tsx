import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { loginThunk } from "../../redux/auth";
import { useEffect, useState } from "react";
import loginStyle from "./styles.module.css";

export const validateLogin = (loginValue: string) => {
  if (loginValue.length === 0) {
    return null;
  }
  if (loginValue.length > 10) {
    return "Логин должен содержать менее десяти символов";
  }
  return null;
};

export const validatePassword = (passwordValue: string) => {
  if (passwordValue.length === 0) {
    return null;
  }
  if (!/^(?=(?:.*[A-Z]){1,})(?=(?:.*[0-9]){1,}).+$/.test(passwordValue)) {
    return "Пароль должен содержать хотя бы одну заглавную букву и цифру";
  }
  return null;
};

export const Login = () => {
  const dispatch = useAppDispatch();
  const { authorization } = useAppSelector((state) => state?.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState<{ login: string; password: string }>(
    {
      login: "",
      password: "",
    }
  );
  const [isShow, setIsShow] = useState<boolean>(false);
  const [errors, setErrors] = useState<{
    login: string | null;
    password: string | null;
  }>({
    login: null,
    password: null,
  });

  const path = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (authorization) {
      navigate(path, { replace: true });
    }
  }, [authorization, navigate]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginThunk(formData));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const loginError = name === "login" ? validateLogin(value) : errors.login;
    const passwordError =
      name === "password" ? validatePassword(value) : errors.password;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      login: loginError,
      password: passwordError,
    });
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (value.length === 0) {
      setErrors({
        ...errors,
        [name]: "Поле обязятельно для заполнения!",
      });
    }
    if (name === "login" && value.length < 5 && value.length > 0) {
      setErrors({
        ...errors,
        [name]: "Логин должен содержать пять и более символов",
      });
    }
    if (name === "password" && value.length < 8 && value.length > 0) {
      setErrors({
        ...errors,
        [name]: "Пароль должен содержать восемь и более символов",
      });
    }
  };

  return (
    <div className={loginStyle.banner}>
      <form className={loginStyle.form} onSubmit={handleSubmit}>
        <fieldset className={loginStyle.fieldset}>
          <legend className={loginStyle.legend}>Sign In</legend>
          <label className={loginStyle.label}>
            <span className={loginStyle.label_span}>Username</span>
            <input
              className={loginStyle.input}
              name="login"
              type="text"
              id="login"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.login}
              data-testid="login"
            />
            {errors.login && (
              <span className={loginStyle.form_error} style={{ color: "red" }}>
                {errors.login}
              </span>
            )}
          </label>
          <label className={loginStyle.label}>
            <span className={loginStyle.label_span}>Password</span>
            <input
              className={loginStyle.input}
              name="password"
              type={isShow ? "text" : "password"}
              id="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.password}
              data-testid="password"
            />
            <button
              className={loginStyle.is_show}
              type="button"
              onClick={() => {
                setIsShow(!isShow);
              }}
            >
              {isShow ? "HIDE" : "SHOW"}
            </button>
            {errors.password && (
              <span className={loginStyle.form_error} style={{ color: "red" }}>
                {errors.password}
              </span>
            )}
          </label>
          <button
            disabled={errors.login !== null || errors.password !== null}
            className={loginStyle.form_button}
            type="submit"
            data-testid="submit"
          >
            Sign In
          </button>
        </fieldset>
      </form>
    </div>
  );
};
