import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {GeneralActionType} from "../../redux/store";
import {ProfilePageType} from "../../redux/reducers/profile-reducer";


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