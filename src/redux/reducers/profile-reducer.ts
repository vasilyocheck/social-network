import {profileAPI, UserProfileType} from "../../api/profile-api";
import {Dispatch} from "redux";

export type GeneralProfileReducerType = AddPostType | UpdateNewPostTextType | SetUserProfileACType | SetProfileStatusAC;

export type PostsType = {
    id: number
    postText: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
    profile: UserProfileType | null,
    profileStatus: string

}

const initialState = {
    posts: [
        {id: 1, postText: 'Post 1 message goes here', likesCount: 15},
        {id: 2, postText: `It's a lorem ipsum message for post`, likesCount: 23}
    ],
    newPostText: 'it-kamasutra',
    profile: null,
    profileStatus: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: GeneralProfileReducerType): ProfilePageType => {
    switch (action.type) {
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile};
        case 'ADD-POST': {
            const newItem: PostsType = {
                id: state.posts.length + 1,
                postText: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [newItem, ...state.posts], newPostText: ''};
        }
        case "UPDATE-NEW-POSTTEXT":
            return {...state, newPostText: action.payload.newPostText};
        case "PROFILE/SET-PROFILE-STATUS":
            return {...state, profileStatus: action.status};
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

type SetUserProfileACType = ReturnType<typeof setUserProfileAC>
export const setUserProfileAC = (profile: UserProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}

type SetProfileStatusAC = ReturnType<typeof setProfileStatusAC>
export const setProfileStatusAC = (status: string) => {
    return {
        type: 'PROFILE/SET-PROFILE-STATUS',
        status
    } as const
}

export const setUserProfileTC = (userId: number) => async (dispatch: Dispatch) => {
    try {
        const response = await profileAPI.getProfile(userId);
        dispatch(setUserProfileAC(response.data));
    } catch (e) {
        console.log(e);
    }
}

export const setProfileStatusTC = (userId: number) => async (dispatch: Dispatch) => {
    try {
        const res = await profileAPI.getStatus(userId);
        dispatch(setProfileStatusAC(res.data));
    } catch (e) {
        console.log(e);
    }
}

export const updateStatusTC = (status: string) => async (dispatch: Dispatch) => {
    try {
        const res = await profileAPI.updateStatus(status);
        if(res.data.resultCode === 0) {
            dispatch(setProfileStatusAC(status))
        }
    } catch (e) {
        console.log(e);
    }
}