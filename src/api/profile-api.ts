import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
})

type OptionalParamType = null | string;

type ContactsType = {
    facebook: OptionalParamType
    website: OptionalParamType
    vk: OptionalParamType
    twitter: OptionalParamType
    instagram: OptionalParamType
    youtube: OptionalParamType
    github: OptionalParamType
    mainLink: OptionalParamType
}


export type UserProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`);
    }
}