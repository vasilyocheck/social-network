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
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
};