import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./phonebook.actions";

const initialState = {
  items: [],
  filter: "",
  error: "",
};

const phoneBookReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.addContactSuccess, (state, action) => {
      state.items = [...state.items, action.payload.item];
    })
    .addCase(actions.getContactsSuccess, (state, action) => {
      state.items = [...action.payload.items];
    })
    .addCase(actions.removeContactSuccess, (state, action) => {
      state.items = [
        ...state.items.filter((item) => item.id !== action.payload.id),
      ];
    })
    .addCase(actions.filterContactChange, (state, action) => {
      state.filter = action.payload.filter;
    })
    .addCase(actions.addContactError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(actions.removeContactError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(actions.getContactsError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(actions.addContactRequest, (state, action) => {
      state.error = "";
    })
    .addCase(actions.removeContactRequest, (state, action) => {
      state.error = "";
    })
    .addCase(actions.getContactsRequest, (state, action) => {
      state.error = "";
    });
});

export default phoneBookReducer;
