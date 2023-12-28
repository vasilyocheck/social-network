import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { setAuthUserDataTC } from "redux/reducers/auth-reducer";
import { setProfileStatusTC, setUserProfileTC, updateStatusTC } from "redux/reducers/profile-reducer";
import { AppPreloader } from "components/common/AppPreloader/AppPreloader";
import App from "App";

export const Application = () => {
  const isInitialised = useAppSelector((state) => state.app.isInitialised);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAuthUserDataTC()).then(() => {
      dispatch(setProfileStatusTC(30104));
      dispatch(setUserProfileTC(30104));
    });
  }, [dispatch]);

  return isInitialised ? <App /> : <AppPreloader />;
};
