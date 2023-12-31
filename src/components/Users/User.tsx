import s from "components/Users/Users.module.css";
import { NavLink } from "react-router-dom";
import avatarPlaceholder from "assets/img/avatar-placeholder.png";
import React, { FC } from "react";
import { UserType } from "api/users-api";
import { useAppDispatch } from "app/hooks";
import { setProfileStatusTC } from "redux/reducers/profile-reducer";

type UserPropsType = {
  unfollow: (id: number) => void;
  follow: (id: number) => void;
  isFollowingInProgress: number[];
  user: UserType;
};

export const User: FC<UserPropsType> = ({ isFollowingInProgress, follow, unfollow, user }) => {
  const dispatch = useAppDispatch();
  const resetProfStatus = (userId: number) => {
    dispatch(setProfileStatusTC(userId));
  };
  const followBtnDisabledStatus = isFollowingInProgress.some((id) => id === user.id);
  const followUnfollowButton = user.followed ? (
    <button onClick={() => unfollow(user.id)} disabled={followBtnDisabledStatus}>
      Unfollow
    </button>
  ) : (
    <button onClick={() => follow(user.id)} disabled={followBtnDisabledStatus}>
      Follow
    </button>
  );
  return (
    <div>
      <span>
        <div className={s.avatarContainer}>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small || avatarPlaceholder}
              alt={user.name}
              onClick={() => resetProfStatus(user.id)}
            />
          </NavLink>
        </div>
        <div>{followUnfollowButton}</div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"u.location.country"}</div>
          <div>{"u.location.city"}</div>
        </span>
      </span>
    </div>
  );
};

//хвс 150 = 165 п.м.

// 215 ХВ-320 = 215 п.м.

//+7 961 455 04 22
