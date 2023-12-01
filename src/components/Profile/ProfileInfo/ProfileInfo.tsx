import React, {FC} from 'react';
import s from './ProfileInfo.module.css'
import {UserProfileType} from "../../../api/profile-api";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";

type ProfileInfoPropsType = {
    profile: UserProfileType | null
    profileStatus: string
    updateStatus: (status: string) => void
}
export const ProfileInfo: FC<ProfileInfoPropsType> = ({profile, profileStatus, updateStatus}) => {
    if(!profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>
                <img src={'https://t3.ftcdn.net/jpg/01/62/85/00/360_F_162850009_lnHxshkJUH36xjM3Ysi8gwAYwUBOaRWB.jpg'} alt={'background'}/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={profile?.photos.large} alt='avatar' className={s.largeAvatar}/>
                <ProfileStatus status={profileStatus} updateStatus={updateStatus}/>
                <div>{profile.fullName}</div>
                <div>{profile.aboutMe}</div>
            </div>
        </div>
    );
};