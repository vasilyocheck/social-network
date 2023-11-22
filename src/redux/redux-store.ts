import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {GeneralProfileReducerType, profileReducer} from "./reducers/profile-reducer";
import {dialoguesReducer, GeneralDialoguesReducer} from "./reducers/dialogues-reducer";
import {sidebarReducer} from "./reducers/sidebar-reducer";
import {usersReducer, UsersReducerActionType} from "./reducers/users-reducer";
import {authReducer, MainAuthActionType} from "./reducers/auth-reducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export const store = legacy_createStore(reducers, applyMiddleware(thunk));

export type StoreType = ReturnType<typeof reducers>
export type AppActionsType = MainAuthActionType | GeneralDialoguesReducer | GeneralProfileReducerType
    | UsersReducerActionType;
export type AppDispatchType = ThunkDispatch<StoreType, unknown, AppActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StoreType, unknown, any>

