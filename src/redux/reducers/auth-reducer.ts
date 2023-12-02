import {authAPI, AuthDataType} from "../../api/auth-api";
import {Dispatch} from "redux";
import {toggleIsFetchingAC} from "./users-reducer";
import {ValuesType} from "../../components/Login/login-utils";

export type AuthStateType = AuthDataType & { isFetching: boolean, isAuth: boolean }

const initialState: AuthStateType = {
    id: 0,
    email: '',
    login: '',
    isFetching: false,
    isAuth: false
}

export const authReducer = (state: AuthStateType = initialState, action: MainAuthActionType): AuthStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.authData, isAuth: true};
        case "AUTH/SET-IS-LOGGED-IN":
            return {...state, isAuth: action.isAuth};
        default: {
            return state;
        }
    }
}

export type MainAuthActionType = SetUserDataACType | LoginACType;

type SetUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (userId: number, email: string, login: string) => {
    return {
        type: 'SET-USER-DATA',
        authData: {userId, email, login}
    } as const
}

export type LoginACType = ReturnType<typeof setIsAuthAC>
export const setIsAuthAC = (isAuth: boolean) => {
    return {
        type: 'AUTH/SET-IS-LOGGED-IN',
        isAuth
    } as const
}

export const setAuthUserDataTC = () => async (dispatch: Dispatch) => {
    try {
        const response = await authAPI.me();
        if (response.data.resultCode === 0) {
            const {id, email, login} = response.data.data;
            dispatch(setAuthUserDataAC(id, email, login))
        }
    } catch (e) {
        console.log(e);
    }
}

export const loginTC = (data: ValuesType) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    try {
        const res = await authAPI.login(data);
        if (res.data.resultCode === 0) {
            dispatch(setIsAuthAC(true));
        } else {
            console.log(res.data.messages[0])
        }
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(toggleIsFetchingAC(false));
    }
}

export const logoutTC = () => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    try {
        const res = await authAPI.logout();
        if(res.data.resultCode === 0) {
            dispatch(setIsAuthAC(false));
        }
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(toggleIsFetchingAC(false));
    }
}