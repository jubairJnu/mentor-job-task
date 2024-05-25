import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from "./features/auth/authSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { baseApi } from "../api/baseApi";

const persisConfig = {
  key: "auth",
  storage,
};

const persistAuthReducer = persistReducer(persisConfig, authReducer);
const rootReducer = combineReducers({
  auth: persistAuthReducer,

  [baseApi.reducerPath]: baseApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);
