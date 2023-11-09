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
import {usersApi, UserType} from "../../api/users-api";
import {Users} from "./Users";

type UsersAPIComponentPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (newUsers: UserType[]) => void
    setCurrentPage: (newCurrentPage:number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType>{
    componentDidMount() {
        if(this.props.users.length < 1) {
            usersApi.getUsers(this.props.pageSize, this.props.currentPage)
                .then(res => {
                    this.props.setUsers(res.data.items);
                    this.props.setTotalUsersCount(res.data.totalCount);
                })
        }
    }
    handleChangePageNumber(pageNumber: number){
        console.log('invoked inside UsersAPIComponent')
        this.props.setCurrentPage(pageNumber);
        usersApi.getUsers(this.props.pageSize, pageNumber)
            .then(res => this.props.setUsers(res.data.items))
    }

    render() {
        return (
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   changePageNumber={this.handleChangePageNumber.bind(this)}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        );
    }
}


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
        <UsersAPIComponent users={users}
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