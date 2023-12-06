import React, { useEffect } from "react";
import { Header } from "./Header";
import { setAuthUserDataTC } from "redux/reducers/auth-reducer";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getAuth, getAuthLogin } from "utils/utils";

export const HeaderContainer = () => {
  const dispatch = useAppDispatch();
  const login = useAppSelector(getAuthLogin);
  const isAuth = useAppSelector(getAuth);
  useEffect(() => {
    dispatch(setAuthUserDataTC());
  }, [dispatch]);
  return <Header login={login} isAuth={isAuth} />;
};
