import s from "./Users.module.css";
import avatarPlaceholder from "../../assets/img/avatar-placeholder.png";
import React, {FC} from "react";
import {UserType} from "../../api/users-api";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    changePageNumber: (pageNumber: number) => void
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    isFollowingInProgress: number[]
}

export const Users: FC<UsersPropsType> = (
    {
        totalUsersCount,
        pageSize,
        currentPage,
        changePageNumber,
        users,
        follow,
        unfollow,
        isFollowingInProgress
    }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return (<span key={p}
                                  className={currentPage === p ? s.selectedPage : s.page}
                                  onClick={() => changePageNumber(p)}
                    >{p}</span>);
                })}
            </div>
            {users.map(u => {
                const followUnfollowButton = u.followed
                    ? <button onClick={() => unfollow(u.id)} disabled={isFollowingInProgress.some(id => id === u.id)}>Unfollow</button>
                    : <button onClick={() => follow(u.id)} disabled={isFollowingInProgress.some(id => id === u.id)}>Follow</button>;

                return (
                    <div key={u.id}>
                        <span>
                            <div className={s.avatarContainer}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small || avatarPlaceholder} alt={u.name}/>
                                </NavLink>
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