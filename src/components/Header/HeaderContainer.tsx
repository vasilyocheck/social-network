import React from "react";
import { Header } from "./Header";
import { useAppSelector } from "app/hooks";
import { getAuth, getAuthLogin } from "utils/utils";

export const HeaderContainer = () => {
  const login = useAppSelector(getAuthLogin);
  const isAuth = useAppSelector(getAuth);

  return <Header login={login} isAuth={isAuth} />;
};
