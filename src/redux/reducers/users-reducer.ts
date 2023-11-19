import {usersAPI, UserType} from "../../api/users-api";
import {Dispatch} from "redux";

type UsersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

export const usersReducer = (state: UsersStateType = initialState, action: UsersReducerActionType): UsersStateType =>
{
    switch (action.type) {
        case 'FOLLOW':
            return {...state,
                users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)};
        case 'UNFOLLOW':
            return {...state,
                users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: false}: u)};
        case "SET_USERS": return {...state, users: [...action.payload.users]};
        case "SET_CURRENT_PAGE": return {...state, currentPage: action.payload.currentPage};
        case "SET_TOTAL_USERS_COUNT": return {...state, totalUsersCount: action.payload.totalCount};
        case "TOGGLE-ISFETCHING": return {...state, isFetching: action.payload.isFetching}
        default: return state;
    }
}

type UsersReducerActionType = FollowACType | UnfollowACType | SetUsersACType | SetCurrentPageACType
    | SetTotalUsersCountACType | ToggleIsFetchingType;

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

type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: {
            currentPage
        }
    } as const
}

type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        payload: {
            totalCount
        }
    } as const
}

type ToggleIsFetchingType = ReturnType<typeof toggleIsFetchingAC>
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-ISFETCHING',
        payload: {
            isFetching
        }
    } as const
}

export const followTC = (userId: number) => async (dispatch: Dispatch) => {
    const response = await usersAPI.followUser(userId);
    try {
        dispatch(followAC(userId));
    } catch (e) {
        console.log(e);
    }
}

export const unfollowTC = (userId: number) => async (dispatch: Dispatch) => {
    const response = await usersAPI.unfollowUser(userId);
    try {
        dispatch(unfollowAC(userId));
    } catch (e) {
        console.log(e);
    }
}

