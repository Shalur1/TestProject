import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../redux/store/store";
import { bindActionCreators } from '@reduxjs/toolkit';
import {loginActions} from "../redux/login/loginSlice";
import {profileActions} from "../redux/profile/profileSlice";
import {mainActions} from "../redux/main/mainSlice";


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const actions = {
    ...loginActions,
    ...profileActions,
    ...mainActions,
};

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};
