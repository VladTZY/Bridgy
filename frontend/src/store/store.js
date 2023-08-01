import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "./authSlice.js";
import storage from "redux-persist/lib/storage";
import { persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage
}

const reducer = combineReducers({
  auth: authSlice
})

const persistReducerer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistReducerer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
}}),
});
