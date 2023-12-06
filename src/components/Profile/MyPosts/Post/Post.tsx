import React from "react";
import s from "./Post.module.css";

type PostPropsType = {
  message: string;
  likeCount: number;
  id: number;
};
export const Post: React.FC<PostPropsType> = (props) => {
  return (
    <div className={s.item}>
      <img src="https://img1.goodfon.ru/wallpaper/nbig/f/20/avatar-avatar-neytiri.jpg" alt="avatar" />
      {props.message}
      <div>
        <span>likes: {props.likeCount}</span>
      </div>
      <div>
        <span>like</span>
      </div>
    </div>
  );
};
