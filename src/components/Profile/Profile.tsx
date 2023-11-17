import React, {FC} from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../api/profile-api";

type ProfilePropsType = {
    profile: UserProfileType | null
}

export const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <div className={''}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    );
};