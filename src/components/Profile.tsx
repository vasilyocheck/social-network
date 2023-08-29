import React from 'react';
import s from './Profile.module.css';

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src={'https://t3.ftcdn.net/jpg/01/62/85/00/360_F_162850009_lnHxshkJUH36xjM3Ysi8gwAYwUBOaRWB.jpg'} alt={'top profile image'}/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                my posts
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        Post 1
                    </div>
                    <div className={s.item}>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    );
};