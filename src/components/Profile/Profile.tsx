import React from 'react';
import {MyPosts, PostsDataType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    posts: PostsDataType[]
}

export const Profile: React.FC<ProfilePropsType> = ({posts}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts} />
        </div>
    );
};