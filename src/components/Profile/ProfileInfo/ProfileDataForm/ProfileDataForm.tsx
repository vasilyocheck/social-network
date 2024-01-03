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
      <div>
        <label htmlFor="contacts.github">Github: </label>
        <input
          id="contacts.github"
          name="contacts.github"
          onChange={formik.handleChange}
          value={formik.values.contacts.github}
        />
      </div>
      <div>
        <label htmlFor="contacts.vk">Vk: </label>
        <input id="contacts.vk" name="contacts.vk" onChange={formik.handleChange} value={formik.values.contacts.vk} />
      </div>
      <div>
        <label htmlFor="contacts.facebook">Facebook: </label>
        <input
          id="contacts.facebook"
          name="contacts.facebook"
          onChange={formik.handleChange}
          value={formik.values.contacts.facebook}
        />
      </div>
      <div>
        <label htmlFor="contacts.instagram">Instagram: </label>
        <input
          id="contacts.instagram"
          name="contacts.instagram"
          onChange={formik.handleChange}
          value={formik.values.contacts.instagram}
        />
      </div>
      <div>
        <label htmlFor="contacts.twitter">Twitter: </label>
        <input
          id="contacts.twitter"
          name="contacts.twitter"
          onChange={formik.handleChange}
          value={formik.values.contacts.twitter}
        />
      </div>
      <div>
        <label htmlFor="contacts.website">Website: </label>
        <input
          id="contacts.website"
          name="contacts.website"
          onChange={formik.handleChange}
          value={formik.values.contacts.website}
        />
      </div>
      <div>
        <label htmlFor="contacts.youtube">Youtube: </label>
        <input
          id="contacts.youtube"
          name="contacts.youtube"
          onChange={formik.handleChange}
          value={formik.values.contacts.youtube}
        />
      </div>
      <div>
        <label htmlFor="contacts.mainLink">MainLink: </label>
        <input
          id="contacts.mainLink"
          name="contacts.mainLink"
          onChange={formik.handleChange}
          value={formik.values.contacts.mainLink}
        />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
