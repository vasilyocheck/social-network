import React from 'react';
import s from "./Post.module.css";

export const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://img1.goodfon.ru/wallpaper/nbig/f/20/avatar-avatar-neytiri.jpg' alt='avatar'/>
            Post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
};