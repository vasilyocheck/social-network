import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {UserProfileType} from "../../api/profile-api";
import {StoreType} from "../../redux/redux-store";
import {setProfileStatusTC, setUserProfileTC, updateStatusTC} from "../../redux/reducers/profile-reducer";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";

type ProfileAPIComponentType = {
    profile: UserProfileType | null
    setUserProfile: (userId: number) => void
    router: {
        location: {pathname: string, search: string, hash: string, state: null | string, key: string}
        navigate: any
        params: {userId: string}
    }
    isAuth: boolean
    profileStatus: string
    updateStatus: (status: string) => void
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
            <Profile profile={this.props.profile} profileStatus={this.props.profileStatus} updateStatus={this.props.updateStatus}/>
        );
    }
}

export const AuthRedirectComponent = (props: any) => {
    if(!props.isAuth) {
        return <Navigate to={'/login'} />
    }
    console.log(props.isAuth, 'тут должен быть статус аутентификации')
    return <ProfileAPIComponent {...props} />
}

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export const ProfileContainer = () => {
    const dispatch = useAppDispatch();
    const profile = useAppSelector((state: StoreType) => state.profilePage.profile);
    const isAuth = useAppSelector((state: StoreType) => state.auth.isAuth);
    const profileStatus = useAppSelector((state: StoreType) => state.profilePage.profileStatus);
    useEffect(() => {
        dispatch(setProfileStatusTC(30104));
    }, []);

    const setUserProfile = (userId: number) => {
        dispatch(setUserProfileTC(userId));
    }
    const updateStatus = (status: string) => {
        dispatch(updateStatusTC(status));
    }

    return(
        <WithUrlDataContainerComponent profile={profile}
                                       setUserProfile={setUserProfile}
                                       isAuth={isAuth}
                                       profileStatus={profileStatus}
                                       updateStatus={updateStatus}
        />
    );
}

