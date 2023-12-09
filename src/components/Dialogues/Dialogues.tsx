import React from "react";
import s from "./Dialogues.module.css";
import { DialogueItem } from "./DialogueItem/DialogueItem";
import { Message } from "./Message/Message";
import { DialoguesPageType } from "redux/reducers/dialogues-reducer";
import { TextInputForm } from "components/common/TextInputForm/TextInputForm";

type DialoguesPropsType = {
  dialoguesPage: DialoguesPageType;
  addMessage: (newMessage: string) => void;
};

export const Dialogues: React.FC<DialoguesPropsType> = ({ dialoguesPage, addMessage }) => {
  const dialoguesElements = dialoguesPage.dialogues.map((d) => {
    return <DialogueItem name={d.name} id={d.id} key={d.id} />;
  });

  const messagesElements = dialoguesPage.messages.map((m) => {
    return <Message message={m.message} id={m.id} key={m.id} />;
  });

  const onAddMessage = (newMessage: string) => {
    addMessage(newMessage);
  };

  return (
    <div className={s.dialogues}>
      <div className={s.dialoguesItems}>{dialoguesElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <TextInputForm initialPostText={dialoguesPage.newMessage} onAddPost={onAddMessage} />
      </div>
    </div>
  );
};
