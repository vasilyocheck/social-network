import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={'https://t3.ftcdn.net/jpg/01/62/85/00/360_F_162850009_lnHxshkJUH36xjM3Ysi8gwAYwUBOaRWB.jpg'} alt={'background'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};