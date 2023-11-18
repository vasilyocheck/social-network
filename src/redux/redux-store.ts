import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./reducers/profile-reducer";
import {dialoguesReducer} from "./reducers/dialogues-reducer";
import {sidebarReducer} from "./reducers/sidebar-reducer";
import {usersReducer} from "./reducers/users-reducer";
import {authReducer} from "./reducers/auth-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export type StoreType = ReturnType<typeof reducers>

const reducers = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})


export const store = legacy_createStore(reducers, applyMiddleware(thunk));

type AppDispatchType = ThunkDispatch<StoreType, unknown, AnyAction>
export const useAppDispatch = useDispatch<AppDispatchType>
export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;