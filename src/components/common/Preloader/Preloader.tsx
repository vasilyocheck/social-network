import preloader from "../../../assets/img/preloader.gif";
import s from "./Preloader.module.css";
import React from "react";

export const Preloader = () => {
  return <img src={preloader} alt="loading..." className={s.preloader} />;
};
