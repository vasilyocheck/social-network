import React from "react";
import s from "./AppLoader.module.css";
import { ImageLoader } from "components/common/ImageLoader/ImageLoader";

export const AppPreloader = () => {
  return (
    <div className={s.loaderWrapper}>
      <ImageLoader />
      {/*<div className={s.appLoader} />*/}
    </div>
  );
};
