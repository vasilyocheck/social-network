
export type GeneralProfileReducerType = AddPostType | UpdateNewPostTextType;

export type PostsType = {
    id: number
    postText: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

const initialState = {
    posts: [
        {id: 1, postText: 'Post 1 message goes here', likesCount: 15},
        {id: 2, postText: `It's a lorem ipsum message for post`, likesCount: 23}
    ],
    newPostText: 'it-kamasutra'
}

export const profileReducer = (state: ProfilePageType = initialState, action: GeneralProfileReducerType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newItem: PostsType = {
                id: state.posts.length + 1,
                postText: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [newItem, ...state.posts], newPostText: ''};
        }
        case "UPDATE-NEW-POSTTEXT": {
            return {...state, newPostText: action.payload.newPostText};
        }
        default: {
            return state;
        }
    }
}

type AddPostType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (newPostText: string) => {
    console.log('update new post text AC is invoked')
    return {
        type: 'UPDATE-NEW-POSTTEXT',
        payload: {
            newPostText
        }
    } as const
}