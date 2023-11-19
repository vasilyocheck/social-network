import React from 'react';
import {useSelector} from "react-redux";
import {StoreType, useAppDispatch} from "../../redux/redux-store";
import {
    followTC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowTC
} from "../../redux/reducers/users-reducer";
import {usersAPI, UserType} from "../../api/users-api";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

type UsersAPIComponentPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (newUsers: UserType[]) => void
    setCurrentPage: (newCurrentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}

export class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        if (this.props.users.length < 1) {
            usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
                .then(res => {
                    this.props.setUsers(res.data.items);
                    this.props.setTotalUsersCount(res.data.totalCount);
                    this.props.toggleIsFetching(false);
                })
        }
    }

    handleChangePageNumber(pageNumber: number) {
        console.log('invoked inside UsersAPIComponent')
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.pageSize, pageNumber)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.toggleIsFetching(false);
            })
    }

    componentWillUnmount() {
        this.props.toggleIsFetching(false);
    }


    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null }
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       changePageNumber={this.handleChangePageNumber.bind(this)}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                />
            </>
        );
    }
}


export const UsersContainer = () => {
    const dispatch = useAppDispatch();
    const users = useSelector<StoreType, UserType[]>(
        state => state.usersPage.users);
    const pageSize = useSelector<StoreType, number>(state => state.usersPage.pageSize)
    const totalUsersCount = useSelector<StoreType, number>(state => state.usersPage.totalUsersCount);
    const currentPage = useSelector<StoreType, number>(state => state.usersPage.currentPage);
    const isFetching = useSelector<StoreType, boolean>(state => state.usersPage.isFetching);
    const follow = (userId: number) => {
        dispatch(followTC(userId));
    }
    const unfollow = (userId: number) => {
        dispatch(unfollowTC(userId));
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
    const toggleIsFetching = (isFetching: boolean) => {
        dispatch(toggleIsFetchingAC(isFetching));
    }

    return (
        <UsersAPIComponent users={users}
                           follow={follow}
                           unfollow={unfollow}
                           setUsers={setUsers}
                           pageSize={pageSize}
                           totalUsersCount={totalUsersCount}
                           currentPage={currentPage}
                           setCurrentPage={setCurrentPage}
                           setTotalUsersCount={setTotalUsersCount}
                           isFetching={isFetching}
                           toggleIsFetching={toggleIsFetching}
        />
    );
};