import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export type PostsDataType = {
    id: number
    postText: string
    likesCount: number
}

type MyPostsPropsTypes = {
    posts: PostsDataType[]
}

export const MyPosts:React.FC<MyPostsPropsTypes> = ({posts}) => {


    const postsElements = posts.map(p => <Post message={p.postText} likeCount={p.likesCount} id={p.id} key={p.id}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
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