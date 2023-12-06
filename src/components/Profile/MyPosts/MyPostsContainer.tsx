import React from "react";
import { MyPosts } from "./MyPosts";
import { addPostAC } from "redux/reducers/profile-reducer";
import { useDispatch } from "react-redux";
import { useAppSelector } from "app/hooks";
import { getNewPostText, getPosts } from "utils/utils";

export const MyPostsContainer = () => {
  const dispatch = useDispatch();
  const posts = useAppSelector(getPosts);
  const newPostText = useAppSelector(getNewPostText);

  const addPost = (newPostText: string) => {
    dispatch(addPostAC(newPostText));
  };

  return <MyPosts addPost={addPost} posts={posts} newPostText={newPostText} />;
};
