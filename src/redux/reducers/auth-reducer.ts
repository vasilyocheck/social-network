import { authAPI, AuthDataType } from "api/auth-api";
import { AnyAction, Dispatch } from "redux";
import { toggleIsFetchingAC } from "./users-reducer";
import { ValuesType } from "components/Login/login-utils";
import { setAppIsInitialisedAC } from "redux/reducers/app-reducer";
import { securityAPI } from "api/security-api";

export type AuthStateType = AuthDataType & { isFetching: boolean; isAuth: boolean; error: string; captchaURL: string };

const initialState: AuthStateType = {
  id: 0,
  email: "",
  login: "",
  isFetching: false,
  isAuth: false,
  error: "",
  captchaURL: "",
};

export const authReducer = (state: AuthStateType = initialState, action: MainAuthActionType): AuthStateType => {
  switch (action.type) {
    case "AUTH/SET-USER-DATA":
      return { ...state, ...action.authData, isAuth: true, id: action.authData.userId };
    case "AUTH/SET-IS-LOGGED-IN":
      return { ...state, isAuth: action.isAuth };
    case "AUTH/SET-ERROR":
      return { ...state, error: action.error };
    case "AUTH/SET-CAPTCHA-URL":
      return { ...state, captchaURL: action.captchaUrl };
    default: {
      return state;
    }
  }
};

export type MainAuthActionType = SetUserDataACType | LoginACType | SetErrorACType | SetCaptchaURLACType;

type SetUserDataACType = ReturnType<typeof setAuthUserDataAC>;
export const setAuthUserDataAC = (userId: number, email: string, login: string) => {
  return {
    type: "AUTH/SET-USER-DATA",
    authData: { userId, email, login },
  } as const;
};

export type LoginACType = ReturnType<typeof setIsAuthAC>;
export const setIsAuthAC = (isAuth: boolean) => {
  return {
    type: "AUTH/SET-IS-LOGGED-IN",
    isAuth,
  } as const;
};

type SetErrorACType = ReturnType<typeof setErrorAC>;
export const setErrorAC = (error: string) => {
  return {
    type: "AUTH/SET-ERROR",
    error,
  } as const;
};

type SetCaptchaURLACType = ReturnType<typeof setCaptchaURLAC>;
export const setCaptchaURLAC = (captchaUrl: string) => {
  return {
    type: "AUTH/SET-CAPTCHA-URL",
    captchaUrl,
  } as const;
};

export const setAuthUserDataTC = () => async (dispatch: Dispatch) => {
  try {
    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
      const { id, email, login } = response.data.data;
      dispatch(setAuthUserDataAC(id, email, login));
      return id;
    }
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(setAppIsInitialisedAC(true));
  }
};

export const loginTC = (data: ValuesType) => async (dispatch: any) => {
  dispatch(toggleIsFetchingAC(true));
  try {
    const res = await authAPI.login(data);
    if (res.data.resultCode === 0) {
      dispatch(setIsAuthAC(true));
    } else {
      if (res.data.resultCode === 10) {
        dispatch(getCaptchaURLTC());
      }
      dispatch(setErrorAC(res.data.messages[0]));
      setTimeout(() => {
        dispatch(setErrorAC(""));
      }, 5000);
    }
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(toggleIsFetchingAC(false));
  }
};

export const logoutTC = () => async (dispatch: Dispatch) => {
  dispatch(toggleIsFetchingAC(true));
  try {
    const res = await authAPI.logout();
    if (res.data.resultCode === 0) {
      dispatch(setIsAuthAC(false));
    }
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(toggleIsFetchingAC(false));
  }
};

export const getCaptchaURLTC = () => async (dispatch: Dispatch) => {
  try {
    const res = await securityAPI.getCaptcha();
    const captchaURL = res.data.url;
    dispatch(setCaptchaURLAC(captchaURL));
  } catch (e) {
    console.log(e);
  }
};
