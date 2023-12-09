import React, { FC } from "react";
import s from "./Login.module.css";
import { useAppSelector } from "app/hooks";
import { Navigate } from "react-router-dom";
import { LoginForm } from "./LoginForm/LoginForm";
import { getAuth } from "utils/utils";

type LoginPropsType = {};

export const Login: FC<LoginPropsType> = () => {
  const isAuth = useAppSelector(getAuth);
  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className={s.loginPage}>
      <div className={s.loginWrapper}>
        <h2>LOG IN</h2>
        <LoginForm />
      </div>
    </div>
  );
};
