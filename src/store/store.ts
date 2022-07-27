import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
