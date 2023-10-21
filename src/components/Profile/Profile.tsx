import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type ProfilePropsType = {
    store: any
}

export const Profile: React.FC<ProfilePropsType> = ({store}) => {
    return (
        <div className={''}>
            <ProfileInfo/>
            <MyPostsContainer store={store} />
        </div>
    );
};