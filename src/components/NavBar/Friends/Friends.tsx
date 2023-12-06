import React from "react";
import { Friend } from "./Friend/Friend";
import s from "./Friends.module.css";
import { FriendsType } from "../../../redux/reducers/sidebar-reducer";
import { useSelector } from "react-redux";
import { StoreType } from "../../../redux/redux-store";

export const Friends = () => {
  const friends = useSelector<StoreType, FriendsType[]>((state) => state.sidebar.friends);
  const friendsList = friends.map((f) => {
    return <Friend key={f.id} id={f.id} name={f.name} imageSrc={f.pic} />;
  });
  return (
    <div className={s.friends}>
      <h3>Friends:</h3>
      <div className={s.friendsBlock}>{friendsList}</div>
    </div>
  );
};
