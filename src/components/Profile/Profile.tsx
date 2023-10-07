import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (newPost: string) => void
    updateNewPostText: (newPostText: string) => void
}

export const Profile: React.FC<ProfilePropsType> = ({profilePage, addPost, updateNewPostText}) => {
    return (
        <div className={''}>
            <ProfileInfo />
            <MyPosts posts={profilePage.posts}
                     newPostText={profilePage.newPostText}
                     updateNewPostText={updateNewPostText}
                     addPost={addPost} />
        </div>
    );
};