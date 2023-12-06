import { StoreType } from "redux/redux-store";

export const getAuth = (state: StoreType) => state.auth.isAuth;
export const getProfile = (state: StoreType) => state.profilePage.profile;
export const getProfileStatus = (state: StoreType) => state.profilePage.profileStatus;
export const getPosts = (state: StoreType) => state.profilePage.posts;
export const getNewPostText = (state: StoreType) => state.profilePage.newPostText;
export const getDialoguesPage = (state: StoreType) => state.dialoguesPage;
