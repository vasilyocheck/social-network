import React from 'react';
import s from './Dialogues.module.css'
import {DialogueItem} from "./DialogueItem/DialogueItem";
import {Message} from "./Message/Message";
import {DialoguesPageType} from "../../redux/state";

type DialoguesPropsType = {
    state: DialoguesPageType
}

export const Dialogues: React.FC<DialoguesPropsType> = ({state}) => {

    const dialoguesElements = state.dialogues.map(d => <DialogueItem name={d.name} id={d.id} key={d.id} />)
    const messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>);

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