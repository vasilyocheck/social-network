import React from 'react';
import s from './Profile.module.css';
import {MyPosts, PostsDataType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DialogueItemPropsType} from "../Dialogues/DialogueItem/DialogueItem";

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