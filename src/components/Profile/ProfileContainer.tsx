import React from "react";
import {Profile} from "./Profile";
import {profileAPI, UserProfileType} from "../../api/profile-api";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {setUserProfileAC} from "../../redux/reducers/profile-reducer";

type ProfileAPIComponentType = {
    profile: UserProfileType | null
    setUserProfile: (profile: UserProfileType) => void
}
export class ProfileAPIComponent extends React.Component<ProfileAPIComponentType> {

    componentDidMount() {
        profileAPI.getProfile(30334)
            .then(res => this.props.setUserProfile(res.data))
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        );
    }
}

export const ProfileContainer = () => {
    const dispatch = useDispatch();
    const profile = useSelector<StoreType, UserProfileType | null>(state => state.profilePage.profile);
    const setUserProfile = (profile: UserProfileType) => {
        dispatch(setUserProfileAC(profile));
    }

    return(
        <ProfileAPIComponent profile={profile} setUserProfile={setUserProfile}/>
    );
}