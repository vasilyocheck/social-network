import React, { useEffect } from "react";
import { Header } from "./Header";
import { setAuthUserDataTC } from "../../redux/reducers/auth-reducer";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
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
  const login = useAppSelector((state) => state.auth.login);
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  useEffect(() => {
    dispatch(setAuthUserDataTC());
  }, [dispatch]);
  return <Header login={login} isAuth={isAuth} />;
};
