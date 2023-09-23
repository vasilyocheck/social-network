import React from 'react';
import s from './Dialogues.module.css'
import {NavLink} from "react-router-dom";

type DialogueItemPropsType = {
    id: number
    name: string
}
const DialogueItem: React.FC<DialogueItemPropsType> = (props) => {
    return (
        <div className={s.dialogue + ' ' + s.active}>
            <NavLink to={'/dialogues/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

type MessagePropsType = {
    id: number
    message: string
}

const Message: React.FC<MessagePropsType> = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    );
}

export const Dialogues = () => {

    const dialogues:DialogueItemPropsType[] = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Igor'}
    ];
    const messages: MessagePropsType[] = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'What about your IT-Kamasutra?'},
        {id: 3, message: 'Yoh!'},
        {id: 4, message: 'Yo!'},
        {id: 5, message: 'Yohhhh!'}
    ];

    const dialoguesElements = dialogues.map(d => <DialogueItem name={d.name} id={d.id} />)
    const messagesElements = messages.map(m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};