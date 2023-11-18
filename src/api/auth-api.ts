import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
});

export type AuthDataType = {
    id: number
    email: string
    login: string
}


type ResponseType = {
    resultCode: number
    messages: string[]
    data: AuthDataType
}

export const authAPI = {
    getAuth() {
        return instance.get<ResponseType>(`auth/me`)
    }
}