import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import contactsReducer from "./contacts/slice";
import filtersReducer from "./filters/operations";

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

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: persistReducer(persistConfig, contactsReducer),
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
