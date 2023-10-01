import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    state: ProfilePageType
    addPost: (newPost: string) => void
}

export const Profile: React.FC<ProfilePropsType> = ({state, addPost}) => {
    return (
        <div className={''}>
            <ProfileInfo />
            <MyPosts state={state.posts} addPost={addPost} />
        </div>
    );
};