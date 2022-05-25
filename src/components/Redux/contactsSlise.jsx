import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    filter: "",
  },
  reducers: {
    add(state, action) {
      state.items.push(action.payload);
    },
    remove(state, action) {
      state.items = state.items.filter((arrow) => arrow.id !== action.payload);
    },
    filter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { add, remove, filter } = contactsSlice.actions;
