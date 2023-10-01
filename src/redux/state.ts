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
}

export type StateType = {
    profilePage: ProfilePageType
    dialoguesPage: DialoguesPageType
    sidebar: SiderBarType
}

export const state = {
    profilePage: {
        posts: [
            {id: 1, postText: 'Post 1 message goes here', likesCount: 15},
            {id: 2, postText: `It's a lorem ipsum message for post`, likesCount: 23}
        ]
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
}

export const addPost = (newPost: string) => {
    const newItem = {id: 3, postText: newPost, likesCount: 0}
    console.log({...state, profilePage: {...state.profilePage, posts: [newItem, ...state.profilePage.posts] }})
}