import React from 'react';
import s from './Dialogues.module.css'
import {DialogueItem, DialogueItemPropsType} from "./DialogueItem/DialogueItem";
import {Message} from "./Message/Message";
import {MessagePropsType} from "../../index";

type DialoguesPropsType = {
    dialogues: DialogueItemPropsType[]
    messages: MessagePropsType[]
}

export const Dialogues: React.FC<DialoguesPropsType> = ({dialogues, messages}) => {

    const dialoguesElements = dialogues.map(d => <DialogueItem name={d.name} id={d.id} key={d.id} />)
    const messagesElements = messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>);

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