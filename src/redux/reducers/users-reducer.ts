
type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

type UsersStateType = {
    users: UserType[]
}

const initialState = {
    users: []
}

export const usersReducer = (state: UsersStateType = initialState, action: UsersReducerActionType): UsersStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)};
        }
        case 'UNFOLLOW': {
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: false}: u)};
        }
        case "SET_USERS": {
            return {...state, users: [...state.users, ...action.payload.users]};
        }
        default: {
            return state;
        }
    }
}

type UsersReducerActionType = FollowACType | UnfollowACType | SetUsersACType;

type FollowACType = ReturnType<typeof followAC>
export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}

type UnfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}

type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET_USERS',
        payload: {
            users
        }
    } as const
}