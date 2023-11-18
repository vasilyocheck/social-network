import React from "react";
import {Profile} from "./Profile";
import {profileAPI, UserProfileType} from "../../api/profile-api";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {setUserProfileAC} from "../../redux/reducers/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";

type ProfileAPIComponentType = {
    profile: UserProfileType | null
    setUserProfile: (profile: UserProfileType) => void
    router: {
        location: {pathname: string, search: string, hash: string, state: null | string, key: string}
        navigate: any
        params: {userId: string}
    }
}

function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}
export class ProfileAPIComponent extends React.Component<ProfileAPIComponentType> {

    componentDidMount() {
        const userId = Number(this.props.router.params.userId) || 30104;
        profileAPI.getProfile(userId)
            .then(res => this.props.setUserProfile(res.data))
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        );
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileAPIComponent);

export const ProfileContainer = () => {
    const dispatch = useDispatch();
    const profile = useSelector<StoreType, UserProfileType | null>(state => state.profilePage.profile);
    const setUserProfile = (profile: UserProfileType) => {
        dispatch(setUserProfileAC(profile));
    }

    return(
        <WithUrlDataContainerComponent profile={profile} setUserProfile={setUserProfile}/>
    );
}