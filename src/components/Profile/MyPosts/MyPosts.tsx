import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/state";

type MyPostsPropsTypes = {
    posts: PostsType[]
    addPost: (newPost: string) => void
    newPostText: string
    updateNewPostText: (newPostText: string) => void
}

export const MyPosts:React.FC<MyPostsPropsTypes> = ({posts, addPost, newPostText, updateNewPostText}) => {

    const postsElements = posts.map(p => <Post message={p.postText} likeCount={p.likesCount} id={p.id} key={p.id}/>)

    let newPostEl = newPostText;

    const addPostHandler = () => {
        if(newPostText) {
            addPost(newPostText);
        }

    }
    const handlePostOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if(newPostEl) {
            updateNewPostText(e.currentTarget.value)
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
};