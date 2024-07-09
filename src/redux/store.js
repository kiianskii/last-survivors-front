import { configureStore } from "@reduxjs/toolkit";

import { cardsReducer } from "./cards/slice";

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
import { authReducer } from "./auth/authSlice";
import { boardsReducer } from "./boards/slice";

const authPersistConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["token"],
};

const persistedReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    cards: cardsReducer,
    boards: boardsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
