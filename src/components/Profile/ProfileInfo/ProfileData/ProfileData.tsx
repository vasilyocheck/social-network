import React from "react";
import s from "components/Profile/ProfileInfo/ProfileInfo.module.css";
import { UserProfileType } from "api/profile-api";
import { ContactDetails } from "components/Profile/ProfileInfo/ProfileData/ContactDetails/ContactDetails";

type ProfileDataProps = {
  profile: UserProfileType;
  isToUpdate: boolean;
  toggleEditMode: (mode: boolean) => void;
};

export const ProfileData = ({ profile, isToUpdate, toggleEditMode }: ProfileDataProps) => {
  const switchEditMode = () => {
    toggleEditMode(true);
  };
  return (
    <>
      {isToUpdate && <button onClick={switchEditMode}>edit profile</button>}
      <div>
        <span className={s.paramTitle}>Full name: </span>
        {profile.fullName || "---"}
      </div>
      <div>
        <span className={s.paramTitle}>About me: </span>
        {profile.aboutMe || "---"}
      </div>
      <div>
        <span className={s.paramTitle}>Looking for a job: </span> {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <span className={s.paramTitle}>My professional skills: </span> {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <span className={s.paramTitle}>Contact details:</span>
        <ContactDetails contacts={profile.contacts} />
      </div>
    </>
  );
};
