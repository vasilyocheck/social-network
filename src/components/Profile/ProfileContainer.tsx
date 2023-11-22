import React from "react";
import {Profile} from "./Profile";
import {UserProfileType} from "../../api/profile-api";
import {StoreType} from "../../redux/redux-store";
import {setUserProfileTC} from "../../redux/reducers/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";

type ProfileAPIComponentType = {
    profile: UserProfileType | null
    setUserProfile: (userId: number) => void
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
        this.props.setUserProfile(userId);
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        );
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileAPIComponent);

export const ProfileContainer = () => {
    const dispatch = useAppDispatch();
    const profile = useAppSelector((state: StoreType) => state.profilePage.profile);
    const setUserProfile = (userId: number) => {
        dispatch(setUserProfileTC(userId));
    }

    return(
        <WithUrlDataContainerComponent profile={profile} setUserProfile={setUserProfile}/>
    );
}