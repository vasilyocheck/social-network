import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>add post</button>
                <button>remove post</button>
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post message='Post 1 message goes here' likeCount={15}/>
                <Post message={`It's a lorem ipsum message for post`} likeCount={23}/>
            </div>
        </div>
    );
};