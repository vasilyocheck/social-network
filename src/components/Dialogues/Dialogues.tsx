import React, {ChangeEvent} from 'react';
import s from './Dialogues.module.css'
import {DialogueItem} from "./DialogueItem/DialogueItem";
import {Message} from "./Message/Message";
import {DialoguesPageType} from "../../redux/reducers/dialogues-reducer";

type DialoguesPropsType = {
    dialoguesPage: DialoguesPageType
    updateMessageBody: (newMessageBody: string) => void
    addMessage: () => void
}

export const Dialogues: React.FC<DialoguesPropsType> = ({dialoguesPage, updateMessageBody, addMessage}) => {

    const dialoguesElements = dialoguesPage.dialogues.map(d => <DialogueItem name={d.name} id={d.id} key={d.id} />)
    const messagesElements = dialoguesPage.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>);


    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if(e.currentTarget.value) {
            updateMessageBody(e.currentTarget.value);
        }

    }
    const onAddMessage = () => {
        addMessage();
    }

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea value={dialoguesPage.newMessage} onChange={onChangeMessage}></textarea>
                <button onClick={onAddMessage}>add message</button>
            </div>
        </div>
    );
};

/*
export const Dialogues: React.FC<DialoguesPropsType> = ({state, dispatch}) => {

    const dialoguesElements = state.dialogues.map(d => <DialogueItem name={d.name} id={d.id} key={d.id} />)
    const messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>);


    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if(e.currentTarget.value) {
            dispatch(updateNewMessageTextAC(e.currentTarget.value))
        }

    }
    const handleAddNewMessage = () => {
        dispatch(addNewMessage());
    }

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea value={state.newMessage} onChange={handleOnChange}></textarea>
                <button onClick={handleAddNewMessage}>add message</button>
            </div>
        </div>
    );
};*/
