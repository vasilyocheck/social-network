import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-key": 'abedc383-1acb-44b8-b20b-3c57769824c7'
    }
    }
)

export type UserType = {
    followed: boolean
    id: number
    name: string
    photos: {small: null | string, large: null | string}
    status: null | string
    uniqueUrlName: null | string
}

type UsersResponse = {
    items: UserType[]
    totalCount: number
    error: string
}

export const usersApi = {
    getUsers() {
        return instance.get<UsersResponse>(`users`);
    }
}