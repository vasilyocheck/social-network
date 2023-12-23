import { usersAPI, UserType } from "api/users-api";
import { AppThunk } from "../redux-store";
import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AxiosResponse } from "axios";
import { changeObjInArr } from "utils/object-helpers";

type UsersStateType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  isFollowingInProgress: number[];
};

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  isFollowingInProgress: [],
};

export const usersReducer = (state: UsersStateType = initialState, action: UsersReducerActionType): UsersStateType => {
  switch (action.type) {
    case "USERS/FOLLOW":
      return {
        ...state,
        users: changeObjInArr(state.users, action.payload.userId, "id", { followed: true }),
      };
    case "USERS/UNFOLLOW":
      return {
        ...state,
        users: changeObjInArr(state.users, action.payload.userId, "id", { followed: false }),
      };
    case "USERS/SET_USERS":
      return { ...state, users: [...action.payload.users] };
    case "USERS/SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload.currentPage };
    case "USERS/SET_TOTAL_USERS_COUNT":
      return { ...state, totalUsersCount: action.payload.totalCount };
    case "USERS/TOGGLE-IS-FETCHING":
      return { ...state, isFetching: action.payload.isFetching };
    case "USERS/IS-FOLLOWING-IN-PROGRESS":
      return {
        ...state,
        isFollowingInProgress: action.payload.isFetching
          ? [...state.isFollowingInProgress, action.payload.userId]
          : state.isFollowingInProgress.filter((id) => id !== action.payload.userId),
      };
    default:
      return state;
  }
};

export const followAC = (userId: number) => {
  return {
    type: "USERS/FOLLOW",
    payload: {
      userId,
    },
  } as const;
};
export const unfollowAC = (userId: number) => {
  return {
    type: "USERS/UNFOLLOW",
    payload: {
      userId,
    },
  } as const;
};
export const setUsersAC = (users: UserType[]) => {
  return {
    type: "USERS/SET_USERS",
    payload: {
      users,
    },
  } as const;
};
export const setCurrentPageAC = (currentPage: number) => {
  return {
    type: "USERS/SET_CURRENT_PAGE",
    payload: {
      currentPage,
    },
  } as const;
};
export const setTotalUsersCountAC = (totalCount: number) => {
  return {
    type: "USERS/SET_TOTAL_USERS_COUNT",
    payload: {
      totalCount,
    },
  } as const;
};
export const toggleIsFetchingAC = (isFetching: boolean) => {
  return {
    type: "USERS/TOGGLE-IS-FETCHING",
    payload: {
      isFetching,
    },
  } as const;
};
export const toggleIsFollowingInProgressAC = (userId: number, isFetching: boolean) => {
  return {
    type: "USERS/IS-FOLLOWING-IN-PROGRESS",
    payload: {
      userId,
      isFetching,
    },
  } as const;
};

export const getUsersTC = (pageSize: number, currentPage: number) => async (dispatch: Dispatch) => {
  dispatch(toggleIsFetchingAC(true));
  try {
    const res = await usersAPI.getUsers(pageSize, currentPage);
    dispatch(setUsersAC(res.data.items));
    dispatch(setTotalUsersCountAC(res.data.totalCount));
    dispatch(setCurrentPageAC(currentPage));
    dispatch(toggleIsFetchingAC(false));
  } catch (e) {
    console.log(e);
  }
};

const followUfollowFlow = async (
  dispatch: ThunkDispatch<any, any, any>,
  apiMethod: AxiosResponse<any, any>,
  userId: number,
  actionCreator: (idNumber: number) => void,
) => {
  dispatch(toggleIsFollowingInProgressAC(userId, true));
  const response = apiMethod;
  try {
    dispatch(actionCreator(userId));
    dispatch(toggleIsFollowingInProgressAC(userId, false));
  } catch (e) {
    console.log(e);
    dispatch(toggleIsFollowingInProgressAC(userId, false));
  }
};

export const followTC =
  (userId: number): AppThunk =>
  async (dispatch) => {
    followUfollowFlow(dispatch, await usersAPI.followUser(userId), userId, followAC);
  };
export const unfollowTC =
  (userId: number): AppThunk =>
  async (dispatch) => {
    followUfollowFlow(dispatch, await usersAPI.unfollowUser(userId), userId, unfollowAC);
  };

export type UsersReducerActionType =
  | FollowACType
  | UnfollowACType
  | SetUsersACType
  | SetCurrentPageACType
  | SetTotalUsersCountACType
  | ToggleIsFetchingType
  | SetIsFollowingInProgressACType;

type SetIsFollowingInProgressACType = ReturnType<typeof toggleIsFollowingInProgressAC>;
type ToggleIsFetchingType = ReturnType<typeof toggleIsFetchingAC>;
type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>;
type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>;
type SetUsersACType = ReturnType<typeof setUsersAC>;
type UnfollowACType = ReturnType<typeof unfollowAC>;
type FollowACType = ReturnType<typeof followAC>;
