import avatarPlaceholder from "../../assets/img/avatar-placeholder.png";
import React, { FC } from "react";
import { UserType } from "api/users-api";
import { Pagination } from "components/common/Pagination/Pagination";
import { User } from "components/Users/User";

type UsersPropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  changePageNumber: (pageNumber: number) => void;
  users: UserType[];
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  isFollowingInProgress: number[];
};

export const Users: FC<UsersPropsType> = ({
  totalUsersCount,
  pageSize,
  currentPage,
  changePageNumber,
  users,
  follow,
  unfollow,
  isFollowingInProgress,
}) => {
  return (
    <div>
      <Pagination
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        changePageNumber={changePageNumber}
      />
      {users.map((u) => {
        return <User user={u} unfollow={unfollow} follow={follow} isFollowingInProgress={isFollowingInProgress} />;
      })}
    </div>
  );
};
