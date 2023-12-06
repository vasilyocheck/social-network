import React from "react";
import s from "../Dialogues.module.css";
import { NavLink } from "react-router-dom";
import { DialoguesType } from "redux/reducers/dialogues-reducer";

export const DialogueItem: React.FC<DialoguesType> = (props) => {
  return (
    <div className={s.dialogue + " " + s.active}>
      <NavLink to={"/dialogues/" + props.id}>{props.name}</NavLink>
    </div>
  );
};
