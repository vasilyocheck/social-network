import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { GeneralProfileReducerType, profileReducer } from "./reducers/profile-reducer";
import { dialoguesReducer, GeneralDialoguesReducer } from "./reducers/dialogues-reducer";
import { sidebarReducer } from "./reducers/sidebar-reducer";
import { usersReducer, UsersReducerActionType } from "./reducers/users-reducer";
import { authReducer, MainAuthActionType } from "./reducers/auth-reducer";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { appReducer } from "redux/reducers/app-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export type StoreType = ReturnType<typeof reducers>;
export type AppActionsType =
  | MainAuthActionType
  | GeneralDialoguesReducer
  | GeneralProfileReducerType
  | UsersReducerActionType;
export type AppDispatchType = ThunkDispatch<StoreType, unknown, AppActionsType>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StoreType, unknown, any>;
