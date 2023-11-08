import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/reducers/users-reducer";
import {UserType} from "../../api/users-api";
import {Users} from "./Users";

export const UsersContainer = () => {
    const dispatch = useDispatch();
    const users = useSelector<StoreType, UserType[]>(
        state => state.usersPage.users);
    const pageSize = useSelector<StoreType, number>(state => state.usersPage.pageSize)
    const totalUsersCount = useSelector<StoreType, number>(state => state.usersPage.totalUsersCount);
    const currentPage = useSelector<StoreType, number>(state => state.usersPage.currentPage);
    const follow = (userId: number) => {
        dispatch(followAC(userId));
    }
    const unfollow = (userId: number) => {
        dispatch(unfollowAC(userId));
    }

    const setUsers = (newUsers: UserType[]) => {
        dispatch(setUsersAC(newUsers));
    }

    const setCurrentPage = (newCurrentPage: number) => {
        dispatch(setCurrentPageAC(newCurrentPage));
    }

    const setTotalUsersCount = (totalCount: number) => {
        dispatch(setTotalUsersCountAC(totalCount));
    }

    return (
        <Users users={users}
               follow={follow}
               unfollow={unfollow}
               setUsers={setUsers}
               pageSize={pageSize}
               totalUsersCount={totalUsersCount}
               currentPage={currentPage}
               setCurrentPage={setCurrentPage}
               setTotalUsersCount={setTotalUsersCount}
        />
    );
};