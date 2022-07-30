import { useAppDispatch } from "./useAppDispatch";
import { bindActionCreators } from "@reduxjs/toolkit";
import { rootReducerAction } from "../store/reducers/rootReducerAction";

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(rootReducerAction, dispatch);
};
