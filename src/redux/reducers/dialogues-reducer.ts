export type GeneralDialoguesReducer = AddNewMessageType;

export type MessagesType = {
  id: number;
  message: string;
};

export type DialoguesType = {
  id: number;
  name: string;
};

export type DialoguesPageType = {
  dialogues: DialoguesType[];
  messages: MessagesType[];
  newMessage: string;
};

const initialState = {
  dialogues: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Victor" },
    { id: 6, name: "Igor" },
  ],
  messages: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "What about your IT-Kamasutra?" },
    { id: 3, message: "Yoh!" },
    { id: 4, message: "Yo!" },
    { id: 5, message: "Yohhhh!" },
  ],
  newMessage: "kamasutra-message",
};

export const dialoguesReducer = (
  state: DialoguesPageType = initialState,
  action: GeneralDialoguesReducer,
): DialoguesPageType => {
  switch (action.type) {
    case "DIALOGUES/ADD-NEW-MESSAGE": {
      return {
        ...state,
        messages: [
          {
            id: state.messages.length + 1,
            message: action.newMessage,
          },
          ...state.messages,
        ],
        newMessage: "",
      };
    }
    default: {
      return state;
    }
  }
};

type AddNewMessageType = ReturnType<typeof addNewMessage>;
export const addNewMessage = (newMessage: string) => {
  return {
    type: "DIALOGUES/ADD-NEW-MESSAGE",
    newMessage,
  } as const;
};
