import { StoreType } from "redux/redux-store";
import { Store } from "redux";

export const getAuth = (state: StoreType) => state.auth.isAuth;
export const getAuthLogin = (state: StoreType) => state.auth.login;
export const getIsError = (state: StoreType) => state.auth.error;
export const getCaptchaURL = (state: StoreType) => state.auth.captchaURL;
export const getProfile = (state: StoreType) => state.profilePage.profile;
export const getProfileStatus = (state: StoreType) => state.profilePage.profileStatus;
export const getPosts = (state: StoreType) => state.profilePage.posts;
export const getNewPostText = (state: StoreType) => state.profilePage.newPostText;
export const getIsLoadingProfile = (state: StoreType) => state.profilePage.isLoading;
export const getDialoguesPage = (state: StoreType) => state.dialoguesPage;
export const getUsers = (state: StoreType) => state.usersPage.users;
export const getUsersPageSize = (state: StoreType) => state.usersPage.pageSize;
export const getTotalUsersCount = (state: StoreType) => state.usersPage.totalUsersCount;
export const getUserCurrentPage = (state: StoreType) => state.usersPage.currentPage;
export const getUsersIsFetching = (state: StoreType) => state.usersPage.isFetching;
export const getUsersIsFollowingInProgress = (state: StoreType) => state.usersPage.isFollowingInProgress;
