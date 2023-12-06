import React from "react";
import { addNewMessage } from "redux/reducers/dialogues-reducer";
import { Dialogues } from "./Dialogues";
import { useDispatch } from "react-redux";
import { useAppSelector } from "app/hooks";
import { getDialoguesPage } from "utils/utils";

export const DialoguesContainer = () => {
  const dispatch = useDispatch();
  const dialoguesPage = useAppSelector(getDialoguesPage);

  const addMessage = (newMessage: string) => {
    dispatch(addNewMessage(newMessage));
  };

  return <Dialogues dialoguesPage={dialoguesPage} addMessage={addMessage} />;
};
