import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from 'redux'

export const useAppDispatch = useDispatch<ThunkDispatch<RootState, void, AnyAction>>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore = useStore<RootState>