import { createReducer } from "@reduxjs/toolkit";
import * as Actions from "../actions/PhoneBook";

const initialState = {
  items: [],
  filter: "",
};

const phoneBookReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(Actions.addContact, (state, action) => {
      state.items = [...state.items, action.payload.item];
    })
    .addCase(Actions.setContacts, (state, action) => {
      state.items = [...action.payload.items];
    })
    .addCase(Actions.removeContact, (state, action) => {
      state.items = [
        ...state.items.filter((item) => item.id !== action.payload.id),
      ];
    })
    .addCase(Actions.filterContact, (state, action) => {
      state.filter = action.payload.filter;
    });
});

export default phoneBookReducer;
