import React, { FC, useState } from "react";
import s from "./ProfileInfo.module.css";
import { UserProfileType } from "api/profile-api";
import { Preloader } from "../../common/Preloader/Preloader";
import { ProfileStatus } from "../ProfileStatus/ProfileStatus";
import avatarPlaceholder from "../../../assets/img/avatar-placeholder.png";
import { DownLoadAvatar } from "components/Profile/ProfileInfo/DownLoadAvatar/DownLoadAvatar";

type ProfileInfoPropsType = {
  profile: UserProfileType | null;
  profileStatus: string;
  updateStatus: (status: string) => void;
  isStatusToUpdate: boolean;
};
export const ProfileInfo: FC<ProfileInfoPropsType> = ({ profile, profileStatus, updateStatus, isStatusToUpdate }) => {
  const [ava, setAva] = useState(avatarPlaceholder);
  const [isAvaBroken, setIsAvaBroken] = useState(false);
  if (!profile) {
    return <Preloader />;
  }

  const errorHandler = () => {
    setIsAvaBroken(true);
    alert("Изображение битое...");
  };

  return (
    <div>
      <div className={s.descriptionBlock}>
        <div className={s.avaWithIcon}>
          <img src={profile?.photos.large || ava} alt="avatar" className={s.largeAvatar} onError={errorHandler} />
          {isStatusToUpdate && <DownLoadAvatar setAva={setAva} />}
        </div>
        <ProfileStatus status={profileStatus} updateStatus={updateStatus} isStatusToUpdate={isStatusToUpdate} />
        <div>{profile.fullName}</div>
        <div>{profile.aboutMe}</div>
      </div>
    </div>
  );
};
