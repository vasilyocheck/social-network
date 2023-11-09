import s from "./Users.module.css";
import avatarPlaceholder from "../../assets/img/avatar-placeholder.png";
import React, {FC} from "react";
import {UserType} from "../../api/users-api";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    changePageNumber: (pageNumber: number) => void
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users: FC<UsersPropsType> = (
    {
        totalUsersCount,
        pageSize,
        currentPage,
        changePageNumber,
        users,
        follow,
        unfollow
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
                                  onClick={(e) => changePageNumber(p)}
                    >{p}</span>);
                })}
            </div>
            {users.map(u => {
                const followUnfollowButton = u.followed
                    ? <button onClick={() => unfollow(u.id)}>Unfollow</button>
                    : <button onClick={() => follow(u.id)}>Follow</button>;

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