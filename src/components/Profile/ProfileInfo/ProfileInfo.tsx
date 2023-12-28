import React, { FC } from "react";
import s from "./ProfileInfo.module.css";
import { UserProfileType } from "api/profile-api";
import { Preloader } from "../../common/Preloader/Preloader";
import { ProfileStatus } from "../ProfileStatus/ProfileStatus";
import avatarPlaceholder from "../../../assets/img/avatar-placeholder.png";

type ProfileInfoPropsType = {
  profile: UserProfileType | null;
  profileStatus: string;
  updateStatus: (status: string) => void;
  isStatusToUpdate: boolean;
};
export const ProfileInfo: FC<ProfileInfoPropsType> = ({ profile, profileStatus, updateStatus, isStatusToUpdate }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile?.photos.large || avatarPlaceholder} alt="avatar" className={s.largeAvatar} />
        <ProfileStatus status={profileStatus} updateStatus={updateStatus} isStatusToUpdate={isStatusToUpdate} />
        <div>{profile.fullName}</div>
        <div>{profile.aboutMe}</div>
      </div>
    </div>
  );
};
