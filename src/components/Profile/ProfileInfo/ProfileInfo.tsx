import React, {FC} from 'react';
import s from './ProfileInfo.module.css'
import {UserProfileType} from "../../../api/profile-api";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: UserProfileType | null
}
export const ProfileInfo: FC<ProfileInfoPropsType> = ({profile}) => {
    if(!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src={'https://t3.ftcdn.net/jpg/01/62/85/00/360_F_162850009_lnHxshkJUH36xjM3Ysi8gwAYwUBOaRWB.jpg'} alt={'background'}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile?.photos.large} alt='avatar' className={s.largeAvatar}/>

            </div>
        </div>
    );
};