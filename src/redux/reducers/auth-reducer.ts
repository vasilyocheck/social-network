import {authAPI, AuthDataType} from "../../api/auth-api";
import {Dispatch} from "redux";

export type AuthStateType = AuthDataType & {isFetching: boolean, isAuth: boolean}

const initialState: AuthStateType = {
    id: 0,
    email: '',
    login: '',
    isFetching: false,
    isAuth: false
}

export const authReducer = (state: AuthStateType = initialState, action: MainAuthActionType): AuthStateType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {...state, ...action.authData, isAuth: true};
        }
        default: {
            return state;
        }
    }
}

export type MainAuthActionType = SetUserDataACType

type SetUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (userId: number, email: string, login: string) => {
    return {
        type: 'SET-USER-DATA',
        authData: {userId, email, login}
    } as const
}

export const setAuthUserDataTC = () => async (dispatch: Dispatch) => {
    try {
        const response = await authAPI.getAuth();
        if(response.data.resultCode === 0) {
            const {id, email, login} = response.data.data;
            dispatch(setAuthUserDataAC(id, email, login))
        }
    } catch (e) {
        console.log(e);
    }
}