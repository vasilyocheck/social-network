import { useAppSelector } from "app/hooks";
import { StoreType } from "redux/redux-store";
import { Login } from "components/Login/Login";

export const WithAuthRedirect = (Component: any) => {
  const isAuth = useAppSelector((state: StoreType) => state.auth.isAuth);
  if (!isAuth) {
    return <Login />;
  }
  return <Component />;
};
