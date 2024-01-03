import React from "react";
import { ProfileDataType, UserProfileType } from "api/profile-api";
import { useFormik } from "formik";
import { useAppDispatch } from "app/hooks";
import { setUserProfileTC, updateProfileTC } from "redux/reducers/profile-reducer";

type ProfileDataProps = {
  profile: UserProfileType;
  toggleEditMode: (mode: boolean) => void;
};
export const ProfileDataForm = ({ profile, toggleEditMode }: ProfileDataProps) => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      userId: profile.userId,
      aboutMe: profile.aboutMe,
      fullName: profile.fullName,
      lookingForAJob: profile.lookingForAJob,
      lookingForAJobDescription: profile.lookingForAJobDescription,
      contacts: {
        github: profile.contacts.github || "",
        vk: profile.contacts.vk || "",
        facebook: profile.contacts.facebook || "",
        instagram: profile.contacts.instagram || "",
        twitter: profile.contacts.twitter || "",
        website: profile.contacts.website || "",
        youtube: profile.contacts.youtube || "",
        mainLink: profile.contacts.mainLink || "",
      },
    },
    onSubmit: (values: ProfileDataType) => {
      dispatch(updateProfileTC(values)).then(() => {
        dispatch(setUserProfileTC(values.userId));
      });
      toggleEditMode(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="fullName">Full name: </label>
        <input id="fullName" name="fullName" onChange={formik.handleChange} value={formik.values.fullName} />
      </div>
      <div>
        <label htmlFor="aboutMe">About me: </label>
        <input id="aboutMe" name="aboutMe" onChange={formik.handleChange} value={formik.values.aboutMe} />
      </div>

      <div>
        <label htmlFor="fullName">Looking for a job: </label>
        <input
          id="lookingForAJob"
          name="lookingForAJob"
          type="checkbox"
          onChange={formik.handleChange}
          checked={formik.values.lookingForAJob}
        />
      </div>
      <div>
        <label htmlFor="fullName">My professional skills: </label>
        <input
          id="lookingForAJobDescription"
          name="lookingForAJobDescription"
          onChange={formik.handleChange}
          value={formik.values.lookingForAJobDescription}
        />
      </div>
      <div>Contact details:</div>
      {Object.entries(formik.values.contacts).map((c) => {
        const contactName = "contacts." + c[0];
        return (
          <div key={c[0]}>
            <label htmlFor={contactName}>{`${c[0]}: `}</label>
            <input type="text" id={contactName} {...formik.getFieldProps(contactName)} />
          </div>
        );
      })}
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
