import React from 'react'
import s from "./Users.module.css";
import avatarPlaceholder from "../../assets/img/avatar-placeholder.png";
import {usersApi, UserType} from "../../api/users-api";

type UsersPropsType = {
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

export class Users extends React.Component<UsersPropsType>{
    componentDidMount() {
        if(this.props.users.length < 1) {
            usersApi.getUsers(this.props.pageSize, this.props.currentPage)
                .then(res => {
                    this.props.setUsers(res.data.items);
                    this.props.setTotalUsersCount(res.data.totalCount);
                })
        }
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        const handleChangePageNumber = (pageNumber: number) => {
            this.props.setCurrentPage(pageNumber);
            usersApi.getUsers(this.props.pageSize, pageNumber)
                .then(res => this.props.setUsers(res.data.items))
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return (<span key={p}
                                      className={this.props.currentPage === p ? s.selectedPage : s.page}
                                        onClick={() => handleChangePageNumber(p) }
                        >{p}</span>);
                })}
                </div>
                {this.props.users.map(u => {
                    const followUnfollowButton = u.followed
                        ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                        : <button onClick={() => this.props.follow(u.id)}>Follow</button>;

                    return (
                        <div key={u.id}>
                        <span>
                            <div className={s.avatarContainer}>
                                <img src={u.photos.small || avatarPlaceholder} alt={u.name}/>
                            </div>
                            <div>
                                {followUnfollowButton}
                            </div>
                        </span>
                            <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>
                        </span>
                        </div>
                    );
                })}
            </div>
        );
    }
}