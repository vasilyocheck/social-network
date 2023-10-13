import React, {ChangeEvent} from 'react';
import s from './Dialogues.module.css'
import {DialogueItem} from "./DialogueItem/DialogueItem";
import {Message} from "./Message/Message";
import {DialoguesPageType, GeneralActionType} from "../../redux/state";
import {addNewMessage, updateNewMessageTextAC} from "../../redux/reducers/dialogues-reducer";

type DialoguesPropsType = {
    state: DialoguesPageType
    dispatch: (action: GeneralActionType) => void
}

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
};