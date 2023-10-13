import {DialoguesPageType} from "../state";

export type GeneralDialoguesReducer = UpdateNewMessageTextType
    | AddNewMessageType;

export const dialoguesReducer = (state: DialoguesPageType, action: GeneralDialoguesReducer): DialoguesPageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            return {...state, newMessage: action.payload.newMessageText };
        }
        case "ADD-NEW-MESSAGE": {
            return {
                ...state,
                messages: [{
                    id: state.messages.length + 1,
                    message: state.newMessage
                }, ...state.messages],
                newMessage: ''
            }
        }
        default: {
            return state;
        }
    }
}

type UpdateNewMessageTextType = ReturnType<typeof updateNewMessageTextAC>
export const updateNewMessageTextAC = (newMessageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        payload: {
            newMessageText
        }
    } as const
}

type AddNewMessageType = ReturnType<typeof addNewMessage>
export const addNewMessage = () => {
    return {
        type: 'ADD-NEW-MESSAGE'
    } as const
}