import React, { FC, useState } from "react";
import s from "./ProfileInfo.module.css";
import { UserProfileType } from "api/profile-api";
import { Preloader } from "../../common/Preloader/Preloader";
import { ProfileStatus } from "../ProfileStatus/ProfileStatus";
import avatarPlaceholder from "../../../assets/img/avatar-placeholder.png";
import { DownLoadAvatar } from "components/Profile/ProfileInfo/DownLoadAvatar/DownLoadAvatar";
import { useAppSelector } from "app/hooks";
import { getIsLoadingProfile } from "utils/utils";
import { ImageLoader } from "components/common/ImageLoader/ImageLoader";
import { ProfileData } from "components/Profile/ProfileInfo/ProfileData/ProfileData";
import { ProfileDataForm } from "components/Profile/ProfileInfo/ProfileDataForm/ProfileDataForm";

type ProfileInfoPropsType = {
  profile: UserProfileType | null;
  profileStatus: string;
  updateStatus: (status: string) => void;
  isToUpdate: boolean;
};
export const ProfileInfo: FC<ProfileInfoPropsType> = ({ profile, profileStatus, updateStatus, isToUpdate }) => {
  const [editMode, setEditMode] = useState(false);
  const isLoading = useAppSelector(getIsLoadingProfile);
  const [ava, setAva] = useState(avatarPlaceholder);
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <div className={s.avaWithIcon}>
          {isLoading ? (
            <ImageLoader />
          ) : (
            <img src={profile?.photos.large || ava} alt="avatar" className={s.largeAvatar} />
          )}
          {isToUpdate && <DownLoadAvatar disabled={isLoading} />}
        </div>
        <ProfileStatus status={profileStatus} updateStatus={updateStatus} isToUpdate={isToUpdate} />
        {editMode ? (
          <ProfileDataForm profile={profile} toggleEditMode={setEditMode} />
        ) : (
          <ProfileData profile={profile} isToUpdate={isToUpdate} toggleEditMode={setEditMode} />
        )}
      </div>
    </div>
  );
};
