import React, {FC} from 'react';
import {addNewMessage, updateNewMessageTextAC} from "../../redux/reducers/dialogues-reducer";
import {Dialogues} from "./Dialogues";

type DialoguesContainerPropsType = {
    store: any
}

export const DialoguesContainer: FC <DialoguesContainerPropsType> = ({store}) => {
    const dialoguesPage = store.getState().dialoguesPage;
    console.log(dialoguesPage);

    const updateMessageBody = (newMessageBody: string) => {
        store.dispatch(updateNewMessageTextAC(newMessageBody));
    }

    const addMessage = () => {
        store.dispatch(addNewMessage());
    }

    return (
        <Dialogues dialoguesPage={dialoguesPage} updateMessageBody={updateMessageBody} addMessage={addMessage}  />
    );
};