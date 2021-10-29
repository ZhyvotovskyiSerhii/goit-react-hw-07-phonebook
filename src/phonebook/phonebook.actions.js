import { createAction } from "@reduxjs/toolkit";
import * as actions from "./phonebook.types";

export const addContactRequest = createAction(actions.ADD_CONTACT_REQUEST);
export const addContactSuccess = createAction(actions.ADD_CONTACT_SUCCESS);
export const addContactError = createAction(actions.ADD_CONTACT_ERROR);


export const removeContactRequest = createAction(actions.REMOVE_CONTACT_REQUEST);
export const removeContactSuccess = createAction(actions.REMOVE_CONTACT_SUCCESS);
export const removeContactError = createAction(actions.REMOVE_CONTACT_ERROR);



export const getContactsRequest = createAction(actions.GET_CONTACTS_REQUEST);
export const getContactsSuccess = createAction(actions.GET_CONTACTS_SUCCESS);
export const getContactsError = createAction(actions.GET_CONTACTS_ERROR);

export const filterContactChange = createAction(actions.FILTER_CONTACTS_CHANGE);
