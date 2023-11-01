import React, {FC, useEffect} from 'react';
import {UserType} from "../../redux/reducers/users-reducer";
import s from '../../components/Users/Users.module.css'

type UsersPropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (newUsers: UserType[]) => void
}

export const Users: FC<UsersPropsType> = ({users, follow, unfollow, setUsers}) => {

    useEffect(() => {
        setUsers(
            [
                {id: 1, followed: false, photoUrl: 'https://i.pravatar.cc/150?img=64', fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
                {id: 2, followed: true, photoUrl: 'https://i.pravatar.cc/150?img=43', fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}},
                {id: 3, followed: false, photoUrl: 'https://i.pravatar.cc/150?img=52', fullName: 'Andrew', status: 'I am a boss either', location: {city: 'Kiev', country: 'Ukraine'}}
            ]
        );
    }, [setUsers]);

    return (
        <div>
            {users.map(u => {

                const followUnfollowButton = u.followed
                    ? <button onClick={() => unfollow(u.id)}>Unfollow</button>
                    : <button onClick={() => follow(u.id)}>Follow</button>;

                return(
                    <div key={u.id}>
                        <span>
                            <div className={s.avatarContainer}>
                                <img src={u.photoUrl} alt={u.fullName}/>
                            </div>
                            <div>
                                {followUnfollowButton}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>
                );
            })}
        </div>
    );
};