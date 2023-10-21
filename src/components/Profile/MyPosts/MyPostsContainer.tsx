import React, {FC} from 'react';
import {MyPosts} from "./MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../../redux/reducers/profile-reducer";

type MyPostsContainerPropsType = {
    store: any
}

export const MyPostsContainer: FC<MyPostsContainerPropsType> = ({store}) => {
    const posts = store.getState().profilePage.posts;
    const newPostText = store.getState().profilePage.newPostText;
    console.log(newPostText);

    const onPostChange = (newPostText: string) => {
        store.dispatch(updateNewPostTextAC(newPostText));
    }
    const addPost = () => {
        store.dispatch(addPostAC());
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={posts} newPostText={newPostText} />
    );
};