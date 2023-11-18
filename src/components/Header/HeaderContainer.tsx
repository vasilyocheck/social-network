import React, {useEffect} from "react";
import {Header} from "./Header";
import {useAppDispatch, useAppSelector} from "../../redux/redux-store";
import {setAuthUserDataTC} from "../../redux/reducers/auth-reducer";
/*export class HeaderContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
}*/

export const HeaderContainer = () => {
    const dispatch = useAppDispatch();
    const login = useAppSelector(state => state.auth.login);
    const isAuth = useAppSelector(state => state.auth.isAuth);
    console.log(login);
    useEffect(() => {
        dispatch(setAuthUserDataTC())
    }, []);
    return (
        <Header login={login} isAuth={isAuth} />
    );
}

