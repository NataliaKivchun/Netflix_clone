import { combineReducers } from "redux"; 
import { moviesReducer } from "./movies";
import storage from "redux-persist/es/storage";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth";

const persistConfig = {
  key: "root",
  storage,
};

const rootState = combineReducers({
  auth: authReducer,
  movies: moviesReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootState);

export const store = configureStore({
  reducer: rootState,
  devTools: true,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootState>;
export type AppDispatch = typeof store.dispatch;
