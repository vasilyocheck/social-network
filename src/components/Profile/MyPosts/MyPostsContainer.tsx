import React, {FC} from 'react';
import {MyPosts} from "./MyPosts";
import {addPostAC, PostsType, updateNewPostTextAC} from "../../../redux/reducers/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../../redux/redux-store";



export const MyPostsContainer = () => {
    const dispatch = useDispatch();
    const posts = useSelector<StoreType, PostsType[] >(state => state.profilePage.posts);
    const newPostText = useSelector<StoreType, string>(state => state.profilePage.newPostText);


    const onPostChange = (newPostText: string) => {
        dispatch(updateNewPostTextAC(newPostText));
    }
    const addPost = () => {
        dispatch(addPostAC());
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={posts} newPostText={newPostText} />
    );
};