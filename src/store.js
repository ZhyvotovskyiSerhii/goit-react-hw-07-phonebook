import { configureStore } from "@reduxjs/toolkit";
import phoneBookReducer from "./phonebook/phonebook.reducer";

export default configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
  },
});
