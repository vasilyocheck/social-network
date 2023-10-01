import React from "react";
import s from "../Dialogues.module.css";
import {MessagesType} from "../../../redux/state";



export const Message: React.FC<MessagesType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}