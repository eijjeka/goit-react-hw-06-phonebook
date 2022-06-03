import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { persistContacts } from "./contactsSliсe";

export const store = configureStore({
  reducer: {
    contacts: persistContacts,
  },
});

export const persistor = persistStore(store);
