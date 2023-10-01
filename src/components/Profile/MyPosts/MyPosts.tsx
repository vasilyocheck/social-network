import React, {useRef} from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export type PostsDataType = {
    id: number
    postText: string
    likesCount: number
}

type MyPostsPropsTypes = {
    state: PostsDataType[]
    addPost: (newPost: string) => void
}

export const MyPosts:React.FC<MyPostsPropsTypes> = ({state, addPost}) => {

    const postsElements = state.map(p => <Post message={p.postText} likeCount={p.likesCount} id={p.id} key={p.id}/>)

    let newPostEl = useRef<HTMLTextAreaElement>(null);

    const addPostHandler = () => {
        if(newPostEl.current !== null) {
            addPost(newPostEl.current.value);
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostEl}></textarea>
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