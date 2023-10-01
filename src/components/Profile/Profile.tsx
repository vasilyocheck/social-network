import React from 'react';
import {MyPosts, PostsDataType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePagePropsType} from "../../App";



type ProfilePropsType = {
    state: ProfilePagePropsType
}

export const Profile: React.FC<ProfilePropsType> = ({state}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={state.posts} />
        </div>
    );
};