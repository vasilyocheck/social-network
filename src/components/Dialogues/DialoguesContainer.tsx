import React from 'react';
import {addNewMessage, updateNewMessageTextAC} from "../../redux/reducers/dialogues-reducer";
import {Dialogues} from "./Dialogues";
import {useDispatch} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {useAppSelector} from "../../app/hooks";
import {Navigate} from "react-router-dom";
import {ProfileAPIComponent} from "../Profile/ProfileContainer";

export const DialoguesContainer = () => {
    const dispatch = useDispatch();
    const dialoguesPage = useAppSelector((state: StoreType) => state.dialoguesPage);
    const isAuth = useAppSelector(state => state.auth.isAuth);

    const updateMessageBody = (newMessageBody: string) => {
        dispatch(updateNewMessageTextAC(newMessageBody));
    }

    const addMessage = () => {
        dispatch(addNewMessage());
    }

    return (
        <Dialogues dialoguesPage={dialoguesPage}
                   updateMessageBody={updateMessageBody}
                   addMessage={addMessage}
                   isAuth={isAuth}
        />
    );
};

export const AuthRedirectComponent = (props: any) => {
    if(!props.isAuth) {
        return <Navigate to={'/login'} />
    }
    return <Dialogues {...props} />
}