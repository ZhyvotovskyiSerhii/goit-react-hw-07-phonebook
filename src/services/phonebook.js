import axios from "axios";

const getContacts = (filterQuery) => {
  return axios
    .get(
      `http://localhost:3002/contacts${
        Boolean(filterQuery) ? "?name_like=" + filterQuery : ""
      }`
    )
    .then(({ data }) => data)
    .catch((e) => Promise.reject(e.message));
};

const addContact = (contactData) => {
  return axios
    .post("http://localhost:3002/contacts", { ...contactData })
    .then(({ data }) => data)
    .catch((e) => Promise.reject(e.message));
};

const removeContact = (contactId) => {
  return axios
    .delete("http://localhost:3002/contacts/" + contactId)
    .then(() => contactId)
    .catch((e) => Promise.reject(e.message));
};

export { getContacts, addContact, removeContact };
