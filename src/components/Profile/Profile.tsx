import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {GeneralActionType, ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: GeneralActionType) => void
}

export const Profile: React.FC<ProfilePropsType> = ({profilePage, dispatch}) => {
    return (
        <div className={''}>
            <ProfileInfo/>
            <MyPosts posts={profilePage.posts}
                     newPostText={profilePage.newPostText}
                     dispatch={dispatch}
            />
        </div>
    );
};