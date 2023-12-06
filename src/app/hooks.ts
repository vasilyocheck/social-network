import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatchType, StoreType } from "../redux/redux-store";

export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;
