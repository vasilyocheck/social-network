import React from "react";
import s from "./AppLoader.module.css";

export const AppPreloader = () => {
  return (
    <div className={s.loaderWrapper}>
      <div className={s.appLoader} />
    </div>
  );
};
