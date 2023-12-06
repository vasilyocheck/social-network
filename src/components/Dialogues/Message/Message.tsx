import React from "react";
import s from "../Dialogues.module.css";
import { MessagesType } from "../../../redux/reducers/dialogues-reducer";

export const Message: React.FC<MessagesType> = (props) => {
  return <div className={s.message}>{props.message}</div>;
};
