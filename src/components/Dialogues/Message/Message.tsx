import React from "react";
import s from "../Dialogues.module.css";
import {MessagePropsType} from "../../../index";


export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}