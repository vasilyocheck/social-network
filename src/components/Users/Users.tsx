import React, {FC, useEffect} from 'react';
import s from '../../components/Users/Users.module.css'
import {usersApi, UserType} from "../../api/users-api";
import avatarPlaceholder from '../../assets/img/avatar-placeholder.png'


type UsersPropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (newUsers: UserType[]) => void
}

export const Users: FC<UsersPropsType> = ({users, follow, unfollow, setUsers}) => {
    if(users.length < 1) {
        usersApi.getUsers()
            .then(res => setUsers(res.data.items))
    }

    return (
        <div>
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
};