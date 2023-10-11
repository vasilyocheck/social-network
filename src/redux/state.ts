/*let rerenderEntireTree = (store: StoreState) => {
    console.log('state is changed');
}*/

export type FriendsType = {
    id: number
    name: string
    pic: string
}

export type SiderBarType = {
    friends: FriendsType[]
}

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
}

export type PostsType = {
    id: number
    postText: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

export type StoreType = {
    profilePage: ProfilePageType
    dialoguesPage: DialoguesPageType
    sidebar: SiderBarType
}

export type StoreState = {
    _state: StoreType,
    //addPost: () => void
    //updateNewPostText: (newPostText: string) => void
    _callSubscriber: (state: StoreType) => void
    subscribe: (observer: (state: StoreType) => void) => void
    getState: () => StoreType
    dispatch: (action: GeneralActionType) => void
}

export type GeneralActionType = AddPostType | UpdateNewPostTextType;

type AddPostType = ReturnType<typeof addPostAC>

type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextAC>

export const store: StoreState = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, postText: 'Post 1 message goes here', likesCount: 15},
                {id: 2, postText: `It's a lorem ipsum message for post`, likesCount: 23}
            ],
            newPostText: 'it-kamasutra'
        },
        dialoguesPage: {
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
            ]
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Andrew', pic: 'https://i.pravatar.cc/150?img=3'},
                {id: 2, name: 'Sasha', pic: 'https://i.pravatar.cc/150?img=68'},
                {id: 3, name: 'Sveta', pic: 'https://i.pravatar.cc/150?img=45'},
                {id: 4, name: 'Katya', pic: 'https://i.pravatar.cc/150?img=44'},
                {id: 5, name: 'Masha', pic: 'https://i.pravatar.cc/150?img=46'},
                {id: 6, name: 'Vova', pic: 'https://i.pravatar.cc/150?img=50'}
            ]
        }
    },
    _callSubscriber(state: StoreType){
        console.log('state is changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer: (state: StoreType) => void){
        this._callSubscriber = observer;
    },
    dispatch(action: any) {
        if(action.type === 'ADD-POST') {

            const newItem: PostsType = {
                id: this._state.profilePage.posts.length + 1,
                postText: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newItem);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if(action.type === 'UPDATE-NEW-POSTTEXT') {
            this._state.profilePage.newPostText = action.payload.newPostText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const updateNewPostTextAC = (newPostText: string) => {
    return {
        type: 'UPDATE-NEW-POSTTEXT',
        payload: {
            newPostText
        }
    }
}