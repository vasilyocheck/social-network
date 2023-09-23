import React from "react";
import s from "../Dialogues.module.css";
import {NavLink} from "react-router-dom";

export type DialogueItemPropsType = {
    id: number
    name: string
}

export const DialogueItem: React.FC<DialogueItemPropsType> = (props) => {
    return (
        <div className={s.dialogue + ' ' + s.active}>
            <NavLink to={'/dialogues/' + props.id}>{props.name}</NavLink>
        </div>
    );
}