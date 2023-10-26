import React, {ChangeEvent, FC} from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/reducers/profile-reducer";

type MyPostsPropsTypes = {
    posts: PostsType[]
    newPostText: string
    updateNewPostText: (newPostText: string) => void
    addPost: () => void

}

export const MyPosts: FC <MyPostsPropsTypes> = ({posts, newPostText, updateNewPostText, addPost}) => {

    const postsElements = posts.map(p =>
        <Post message={p.postText} likeCount={p.likesCount} id={p.id} key={p.id}/>)

    const onAddPost = () => {
        addPost();
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            updateNewPostText(e.currentTarget.value);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>add post</button>
                </div>
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

/*
export const MyPosts:React.FC<MyPostsPropsTypes> = ({posts, dispatch, newPostText}) => {

    const postsElements = posts.map(p =>
        <Post message={p.postText} likeCount={p.likesCount} id={p.id} key={p.id}/>)

    const addPostHandler = () => {
        if(newPostText) {
            dispatch(addPostAC());
        }

    }
    const handlePostOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if(newPostText) {
            dispatch(updateNewPostTextAC(e.currentTarget.value));
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={handlePostOnChange} value={newPostText}/>
                </div>
                <div>
                    <button onClick={addPostHandler}>add post</button>
                </div>
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};*/
