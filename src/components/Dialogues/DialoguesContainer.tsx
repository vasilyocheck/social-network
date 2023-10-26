import React from 'react';
import {addNewMessage, DialoguesPageType, updateNewMessageTextAC} from "../../redux/reducers/dialogues-reducer";
import {Dialogues} from "./Dialogues";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../redux/redux-store";

export const DialoguesContainer = () => {
    const dispatch = useDispatch();
    const dialoguesPage = useSelector<StoreType, DialoguesPageType>(state => state.dialoguesPage);

    const updateMessageBody = (newMessageBody: string) => {
        dispatch(updateNewMessageTextAC(newMessageBody));
    }

    const addMessage = () => {
        dispatch(addNewMessage());
    }

    return (
        <Dialogues dialoguesPage={dialoguesPage} updateMessageBody={updateMessageBody} addMessage={addMessage}  />
    );
};