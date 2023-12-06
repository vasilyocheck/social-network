import React, { FC } from "react";
import logo from "../../assets/img/7.jpg";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { logoutTC } from "../../redux/reducers/auth-reducer";

type HeaderPropsType = {
  login: string;
  isAuth: boolean;
};
export const Header: FC<HeaderPropsType> = ({ login, isAuth }) => {
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logoutTC());
  };

  return (
    <header className={s.header}>
      <img src={logo} alt={"logo"} />
      <div className={s.loginBlock}>
        {isAuth ? (
          <div className={s.logoutBlock}>
            {login}
            <button className={s.logoutBtn} onClick={handleLogOut}>
              Log out
            </button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};
