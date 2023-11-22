import {usersAPI, UserType} from "../../api/users-api";
import {AppThunk} from "../redux-store";

type UsersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowingInProgress: number[]
}

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowingInProgress: []
}

export const usersReducer = (state: UsersStateType = initialState, action: UsersReducerActionType): UsersStateType => {
    switch (action.type) {
        case 'USERS/FOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)
            };
        case 'USERS/UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: false} : u)
            };
        case "USERS/SET_USERS":
            return {...state, users: [...action.payload.users]};
        case "USERS/SET_CURRENT_PAGE":
            return {...state, currentPage: action.payload.currentPage};
        case "USERS/SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.payload.totalCount};
        case "USERS/TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.payload.isFetching}
        case "USERS/IS-FOLLOWING-IN-PROGRESS":
            return {
                ...state,
                isFollowingInProgress: action.payload.isFetching
                    ?[...state.isFollowingInProgress, action.payload.userId]
                    : state.isFollowingInProgress.filter(id => id !== action.payload.userId)
            }
        default:
            return state;
    }
}

export type UsersReducerActionType = FollowACType | UnfollowACType | SetUsersACType | SetCurrentPageACType
    | SetTotalUsersCountACType | ToggleIsFetchingType | SetIsFollowingInProgressACType;

type FollowACType = ReturnType<typeof followAC>
export const followAC = (userId: number) => {
    return {
        type: 'USERS/FOLLOW',
        payload: {
            userId
        }
    } as const
}

type UnfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: number) => {
    return {
        type: 'USERS/UNFOLLOW',
        payload: {
            userId
        }
    } as const
}

type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'USERS/SET_USERS',
        payload: {
            users
        }
    } as const
}

type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'USERS/SET_CURRENT_PAGE',
        payload: {
            currentPage
        }
    } as const
}

type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: 'USERS/SET_TOTAL_USERS_COUNT',
        payload: {
            totalCount
        }
    } as const
}

type ToggleIsFetchingType = ReturnType<typeof toggleIsFetchingAC>
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'USERS/TOGGLE-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const
}

type SetIsFollowingInProgressACType = ReturnType<typeof toggleIsFollowingInProgressAC>
export const toggleIsFollowingInProgressAC = (userId: number, isFetching: boolean) => {
    return {
        type: 'USERS/IS-FOLLOWING-IN-PROGRESS',
        payload: {
            userId,
            isFetching
        }
    } as const
}

export const followTC = (userId: number): AppThunk => async dispatch => {
    dispatch(toggleIsFollowingInProgressAC(userId, true));
    const response = await usersAPI.followUser(userId);
    try {
        dispatch(followAC(userId));
        dispatch(toggleIsFollowingInProgressAC(userId, false));
    } catch (e) {
        console.log(e);
        dispatch(toggleIsFollowingInProgressAC(userId, false));
    }
}

export const unfollowTC = (userId: number): AppThunk => async dispatch => {
    dispatch(toggleIsFollowingInProgressAC(userId, true));
    const response = await usersAPI.unfollowUser(userId);
    try {
        dispatch(unfollowAC(userId));
        dispatch(toggleIsFollowingInProgressAC(userId, false));
    } catch (e) {
        console.log(e);
        dispatch(toggleIsFollowingInProgressAC(userId, false));
    }
}

