import React from "react";
import { Profile } from "./Profile";
import { UserProfileType } from "api/profile-api";
import { setUserProfileTC, updateStatusTC } from "redux/reducers/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getAuth, getProfile, getProfileStatus } from "utils/utils";

type ProfileAPIComponentType = {
  profile: UserProfileType | null;
  setUserProfile: (userId: number) => void;
  router: {
    location: { pathname: string; search: string; hash: string; state: null | string; key: string };
    navigate: any;
    params: { userId: string };
  };
  isAuth: boolean;
  profileStatus: string;
  updateStatus: (status: string) => void;
  isStatusToUpdate: boolean;
};

function withRouter(Component: any) {
  function ComponentWithRouterProp(props: any) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}
export class ProfileAPIComponent extends React.Component<ProfileAPIComponentType> {
  componentDidMount() {
    const userId = Number(this.props.router.params.userId) || 30104;
    this.props.setUserProfile(userId);
  }

  render() {
    return (
      <Profile
        profile={this.props.profile}
        profileStatus={this.props.profileStatus}
        updateStatus={this.props.updateStatus}
        isStatusToUpdate={this.props.isStatusToUpdate}
      />
    );
  }
}

export const AuthRedirectComponent = (props: any) => {
  return <ProfileAPIComponent {...props} />;
};

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export const ProfileContainer = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector(getProfile);
  const isAuth = useAppSelector(getAuth);
  const profileStatus = useAppSelector(getProfileStatus);
  const authId = useAppSelector((state) => state.auth.id);
  const isStatusToUpdate = authId === profile?.userId;
  console.log(authId, profile?.userId);

  const setUserProfile = (userId: number) => {
    dispatch(setUserProfileTC(userId));
  };
  const updateStatus = (status: string) => {
    dispatch(updateStatusTC(status));
  };

  return (
    <WithUrlDataContainerComponent
      profile={profile}
      setUserProfile={setUserProfile}
      isAuth={isAuth}
      profileStatus={profileStatus}
      updateStatus={updateStatus}
      isStatusToUpdate={isStatusToUpdate}
    />
  );
};
