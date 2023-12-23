import React from "react";
import { followTC, getUsersTC, setTotalUsersCountAC, unfollowTC } from "redux/reducers/users-reducer";
import { UserType } from "api/users-api";
import { Users } from "./Users";
import { Preloader } from "../common/Preloader/Preloader";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  getTotalUsersCount,
  getUserCurrentPage,
  getUsers,
  getUsersIsFetching,
  getUsersIsFollowingInProgress,
  getUsersPageSize,
} from "utils/utils";

type UsersAPIComponentPropsType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (pageSize: number, currentPage: number) => void;
  setTotalUsersCount: (totalCount: number) => void;
  isFetching: boolean;
  isFollowingInProgress: number[];
};

export class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType> {
  componentDidMount() {
    const { pageSize, currentPage } = this.props;
    this.props.setUsers(pageSize, currentPage);
  }

  handleChangePageNumber(pageNumber: number) {
    this.props.setUsers(this.props.pageSize, pageNumber);
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          changePageNumber={this.handleChangePageNumber.bind(this)}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          isFollowingInProgress={this.props.isFollowingInProgress}
        />
      </>
    );
  }
}

export const UsersContainer = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(getUsers);
  const pageSize = useAppSelector(getUsersPageSize);
  const totalUsersCount = useAppSelector(getTotalUsersCount);
  const currentPage = useAppSelector(getUserCurrentPage);
  const isFetching = useAppSelector(getUsersIsFetching);
  const isFollowing = useAppSelector(getUsersIsFollowingInProgress);
  const follow = (userId: number) => {
    dispatch(followTC(userId));
  };
  const unfollow = (userId: number) => {
    dispatch(unfollowTC(userId));
  };
  const setUsers = (pageSize: number, currentPage: number) => {
    dispatch(getUsersTC(pageSize, currentPage));
  };
  const setTotalUsersCount = (totalCount: number) => {
    dispatch(setTotalUsersCountAC(totalCount));
  };

  return (
    <UsersAPIComponent
      users={users}
      follow={follow}
      unfollow={unfollow}
      setUsers={setUsers}
      pageSize={pageSize}
      totalUsersCount={totalUsersCount}
      currentPage={currentPage}
      setTotalUsersCount={setTotalUsersCount}
      isFetching={isFetching}
      isFollowingInProgress={isFollowing}
    />
  );
};
