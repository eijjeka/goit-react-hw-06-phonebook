import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    filter: "",
  },
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = contactsSlice.actions;

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});
