import { Dispatch } from "redux";
import { authAPI } from "api/auth-api";

type AppState = {
  isInitialised: boolean;
};

type AppActionsType = SetAppIsInitialisedACType;

const initialState: AppState = {
  isInitialised: false,
};

export const appReducer = (state: AppState = initialState, action: AppActionsType): AppState => {
  switch (action.type) {
    case "APP/SET-IS-INITIALISED": {
      return { ...state, isInitialised: action.isInitialised };
    }
    default:
      return state;
  }
};

type SetAppIsInitialisedACType = ReturnType<typeof setAppIsInitialisedAC>;
export const setAppIsInitialisedAC = (isInitialised: boolean) => {
  return {
    type: "APP/SET-IS-INITIALISED",
    isInitialised,
  } as const;
};
