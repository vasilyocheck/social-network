import React from 'react';
import s from './Friend.module.css';

type FriendPropsType = {
    id: number
    name: string
    imageSrc: string
}
export const Friend:React.FC<FriendPropsType> = ({id, name, imageSrc}) => {
    return (
        <div className={s.friend} key={id}>
            <img src={imageSrc} alt={name}/>
            <div>{name}</div>
        </div>
    );
};