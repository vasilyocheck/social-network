import React from 'react';
import {Friend} from "./Friend/Friend";
import s from './Friends.module.css';
import {FriendItemPropsType, SidebarPropsType} from "../../../App";

type FriendsPropsType = {
    state: FriendItemPropsType[]
}

export const Friends:React.FC<FriendsPropsType> = ({state}) => {
    return (
        <div className={s.friends}>
            <h3>Friends:</h3>
            <div className={s.friendsBlock}>
                {state.map(f => {
                    return (
                        <Friend key={f.id} id={f.id} name={f.name} imageSrc={f.pic} />
                    );
                })}
            </div>
        </div>
    );
};