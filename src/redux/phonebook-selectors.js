import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (store) => store.items;

export const getFilter = (store) => store.filter;

export const getFilterList = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const filterItem = filter.toLowerCase();
    const filterContacts = contacts.filter((item) =>
      item?.name?.toLowerCase().includes(filterItem)
    );
    return filterContacts;
  }
);