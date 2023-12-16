import React, { FC, memo } from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { PostsType } from "redux/reducers/profile-reducer";
import { TextInputForm } from "components/common/TextInputForm/TextInputForm";

type MyPostsPropsTypes = {
  posts: PostsType[];
  newPostText: string;
  addPost: (newPostText: string) => void;
};

export const MyPosts: FC<MyPostsPropsTypes> = memo(({ posts, newPostText, addPost }) => {
  const postsElements = posts.map((p) => <Post message={p.postText} likeCount={p.likesCount} id={p.id} key={p.id} />);

  const onAddPost = (newPostText: string) => {
    addPost(newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <TextInputForm onAddPost={onAddPost} initialPostText={newPostText} />
      <div>New post</div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});
