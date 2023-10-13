import {PostsType, ProfilePageType} from "../state";

export type GeneralProfileReducerType = AddPostType | UpdateNewPostTextType;

export const profileReducer = (state: ProfilePageType, action: GeneralProfileReducerType): ProfilePageType => {
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
            console.log('no state was found')
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
    return {
        type: 'UPDATE-NEW-POSTTEXT',
        payload: {
            newPostText
        }
    } as const
}