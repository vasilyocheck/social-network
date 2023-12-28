import React, { FC } from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { UserProfileType } from "api/profile-api";

type ProfilePropsType = {
  profile: UserProfileType | null;
  profileStatus: string;
  updateStatus: (status: string) => void;
  isStatusToUpdate: boolean;
};

export const Profile: FC<ProfilePropsType> = (props) => {
  return (
    <div className={""}>
      <ProfileInfo
        profile={props.profile}
        profileStatus={props.profileStatus}
        updateStatus={props.updateStatus}
        isStatusToUpdate={props.isStatusToUpdate}
      />
      <MyPostsContainer />
    </div>
  );
};
