import React from 'react';
import {Users} from "./Users";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC} from "../../redux/reducers/users-reducer";
import {UserType} from "../../api/users-api";

export const UsersContainer = () => {
    const dispatch = useDispatch();
    const users = useSelector<StoreType, UserType[]>(
        state => state.usersPage.users);

    const follow = (userId: number) => {
        dispatch(followAC(userId));
    }
    const unfollow = (userId: number) => {
        dispatch(unfollowAC(userId));
    }

    const setUsers = (newUsers: UserType[]) => {
        dispatch(setUsersAC(newUsers));
    }

    return (
        <Users users={users} follow={follow} unfollow={unfollow} setUsers={setUsers}/>
    );
};