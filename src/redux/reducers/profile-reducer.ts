import { profileAPI, ProfileDataType, UserProfileType } from "api/profile-api";
import { Dispatch } from "redux";

export type GeneralProfileReducerType =
  | AddPostType
  | SetUserProfileACType
  | SetProfileStatusAC
  | UpdateAvatarACType
  | SetIsLoadingAC;

export type PostsType = {
  id: number;
  postText: string;
  likesCount: number;
};

export type ProfilePageType = {
  posts: PostsType[];
  newPostText: string;
  profile: UserProfileType | null;
  profileStatus: string;
  isLoading: boolean;
};

const initialState = {
  posts: [
    { id: 1, postText: "Post 1 message goes here", likesCount: 15 },
    { id: 2, postText: `It's a lorem ipsum message for post`, likesCount: 23 },
  ],
  newPostText: "it-kamasutra",
  profile: null,
  profileStatus: "",
  isLoading: false,
};

export const profileReducer = (
  state: ProfilePageType = initialState,
  action: GeneralProfileReducerType,
): ProfilePageType => {
  switch (action.type) {
    case "PROFILE/SET-USER-PROFILE":
      return { ...state, profile: action.profile };
    case "PROFILE/ADD-POST": {
      const newItem: PostsType = {
        id: state.posts.length + 1,
        postText: action.newPostText,
        likesCount: 0,
      };
      return { ...state, posts: [newItem, ...state.posts], newPostText: "" };
    }
    case "PROFILE/SET-PROFILE-STATUS":
      return { ...state, profileStatus: action.status };
    case "PROFILE/UPDATE-AVATAR": {
      const updatedProfile: UserProfileType = { ...state.profile } as UserProfileType;
      updatedProfile.photos.large = action.avaURl;
      return { ...state, profile: updatedProfile };
    }
    case "PROFILE/SET-IS-LOADING":
      return { ...state, isLoading: action.isLoading };
    default: {
      return state;
    }
  }
};

type AddPostType = ReturnType<typeof addPostAC>;
export const addPostAC = (newPostText: string) => {
  return {
    type: "PROFILE/ADD-POST",
    newPostText,
  } as const;
};

type SetUserProfileACType = ReturnType<typeof setUserProfileAC>;
export const setUserProfileAC = (profile: UserProfileType) => {
  return {
    type: "PROFILE/SET-USER-PROFILE",
    profile,
  } as const;
};

type SetProfileStatusAC = ReturnType<typeof setProfileStatusAC>;
export const setProfileStatusAC = (status: string) => {
  return {
    type: "PROFILE/SET-PROFILE-STATUS",
    status,
  } as const;
};

type UpdateAvatarACType = ReturnType<typeof updateAvatarAC>;
export const updateAvatarAC = (avaURl: string) => {
  return {
    type: "PROFILE/UPDATE-AVATAR",
    avaURl,
  } as const;
};

type SetIsLoadingAC = ReturnType<typeof setIsLoadingAC>;
export const setIsLoadingAC = (isLoading: boolean) => {
  return {
    type: "PROFILE/SET-IS-LOADING",
    isLoading,
  } as const;
};

export const setUserProfileTC = (userId: number) => async (dispatch: Dispatch) => {
  try {
    const response = await profileAPI.getProfile(userId);
    dispatch(setUserProfileAC(response.data));
  } catch (e) {
    console.log(e);
  }
};

export const setProfileStatusTC = (userId: number) => async (dispatch: Dispatch) => {
  try {
    const res = await profileAPI.getStatus(userId);
    dispatch(setProfileStatusAC(res.data));
  } catch (e) {
    console.log(e);
  }
};

export const updateStatusTC = (status: string) => async (dispatch: Dispatch) => {
  try {
    const res = await profileAPI.updateStatus(status);
    if (res.data.resultCode === 0) {
      dispatch(setProfileStatusAC(status));
    }
  } catch (e) {
    console.log(e);
  }
};

export const updateAvatarTC = (formData: any) => async (dispatch: Dispatch) => {
  dispatch(setIsLoadingAC(true));
  try {
    const res = await profileAPI.updateAvatar(formData);
    if (res.data.resultCode === 0) {
      dispatch(updateAvatarAC(res.data.data.photos.large));
    }
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(setIsLoadingAC(false));
  }
};

export const updateProfileTC = (profileData: ProfileDataType) => async (dispatch: Dispatch) => {
  dispatch(setIsLoadingAC(true));
  try {
    await profileAPI.updateProfile(profileData);
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(setIsLoadingAC(false));
  }
};
