import api from "../services";
import * as actions from "./phonebook.actions";

export const getPhoneBookContacts = (filterQuery) => {
  const getContacts = async (dispatch) => {
    dispatch(actions.getContactsRequest());

    try {
      const data = await api.getContacts(filterQuery);
      dispatch(actions.getContactsSuccess({ items: data }));
    } catch (error) {
      dispatch(actions.getContactsError(error));
    }
  };
  return getContacts;
};

export const addPhoneBookContact = (contactData) => {
  const addContact = async (dispatch) => {
    dispatch(actions.addContactRequest());

    try {
      const data = await api.addContact(contactData);
      dispatch(actions.addContactSuccess({ item: data }));
    } catch (error) {
      dispatch(actions.addContactError(error));
    }
  };
  return addContact;
};

export const removePhoneBookContact = (contactId) => {
  const addContact = (dispatch) => {
    dispatch(actions.removeContactRequest());

    api
      .removeContact(contactId)
      .then(() => dispatch(actions.removeContactSuccess({ id: contactId })))
      .catch((error) => dispatch(actions.removeContactError(error)));
  };
  return addContact;
};

export const changePhoneBookFilter = (filterQuery) => {
  const changeFilter = (dispatch) =>
    dispatch(actions.filterContactChange({ filter: filterQuery }));
  return changeFilter;
};

const operations = {
  getPhoneBookContacts,
  addPhoneBookContact,
  removePhoneBookContact,
  changePhoneBookFilter,
};

export default operations;
