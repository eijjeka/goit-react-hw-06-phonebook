import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsSlice } from "./contactsSlise";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["items"],
};

const persistContacts = persistReducer(persistConfig, contactsSlice.reducer);

export const store = configureStore({
  reducer: {
    contacts: persistContacts,
  },
});

export const persistor = persistStore(store);
