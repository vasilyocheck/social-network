
export type GeneralDialoguesReducer = UpdateNewMessageTextType
    | AddNewMessageType;

export type MessagesType = {
    id: number
    message: string
}

export type DialoguesType = {
    id: number
    name: string
}

export type DialoguesPageType = {
    dialogues: DialoguesType[]
    messages: MessagesType[]
    newMessage: string
}

const initialState = {
    dialogues: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Igor'}
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'What about your IT-Kamasutra?'},
        {id: 3, message: 'Yoh!'},
        {id: 4, message: 'Yo!'},
        {id: 5, message: 'Yohhhh!'}
    ],
    newMessage: 'kamasutra-message'
}

export const dialoguesReducer = (state: DialoguesPageType = initialState, action: GeneralDialoguesReducer): DialoguesPageType => {
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