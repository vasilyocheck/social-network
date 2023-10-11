import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {addPostAC, GeneralActionType, PostsType, updateNewPostTextAC} from "../../../redux/state";

type MyPostsPropsTypes = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: GeneralActionType) => void

}

export const MyPosts:React.FC<MyPostsPropsTypes> = ({posts, dispatch, newPostText}) => {

    const postsElements = posts.map(p =>
        <Post message={p.postText} likeCount={p.likesCount} id={p.id} key={p.id}/>)

    const addPostHandler = () => {
        if(newPostText) {
            dispatch(addPostAC());
        }

    }
    const handlePostOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if(newPostText || typeof newPostText === 'string') {
            dispatch(updateNewPostTextAC(e.currentTarget.value))
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