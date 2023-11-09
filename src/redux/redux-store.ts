import {combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./reducers/profile-reducer";
import {dialoguesReducer} from "./reducers/dialogues-reducer";
import {sidebarReducer} from "./reducers/sidebar-reducer";
import {usersReducer} from "./reducers/users-reducer";

export type StoreType = ReturnType<typeof reducers>

const reducers = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})


export const store = legacy_createStore(reducers);