import React from 'react';
import s from './Dialogues.module.css'
import {NavLink} from "react-router-dom";

type DialogueItemPropsType = {
    name: string
    id: string
}
const DialogueItem: React.FC<DialogueItemPropsType> = (props) => {
    return (
        <div className={s.dialogue + ' ' + s.active}>
            <NavLink to={'/dialogues/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

type MessagePropsType = {
    message: string
}

const Message: React.FC<MessagePropsType> = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    );
}

export const Dialogues = () => {
    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                <DialogueItem name='Dimych' id='1' />
                <DialogueItem name='Andrey' id='2' />
                <DialogueItem name='Sveta' id='3' />
                <DialogueItem name='Sasha' id='4' />
                <DialogueItem name='Victor' id='5' />
                <DialogueItem name='Igor' id='6' />
            </div>
            <div className={s.messages}>
                <Message message='Hi!' />
                <Message message='What about your IT-Kamasutra?' />
                <Message message='Yoh!' />
            </div>
        </div>
    );
};