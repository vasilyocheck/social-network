import React from 'react'
import s from "./Users.module.css";
import avatarPlaceholder from "../../assets/img/avatar-placeholder.png";
import {usersApi, UserType} from "../../api/users-api";

type UsersPropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (newUsers: UserType[]) => void
}

export class Users extends React.Component<UsersPropsType>{
    componentDidMount() {
        if(this.props.users.length < 1) {
            usersApi.getUsers()
                .then(res => this.props.setUsers(res.data.items))
        }
    }

    render() {
        return (
            <div>
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