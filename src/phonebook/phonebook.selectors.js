export const getContacts = store=> store.phoneBook.items;

export const getFilter = store=> store.phoneBook.filter;
export const getError = store => store.error;

// export const getFilterList = createSelector(
//     [getContacts, getFilter],
//     (contacts, filter) => {
//       return contacts.filter((item) => {
//         const result = item.name.toLowerCase().includes(filter.toLowerCase());
//         if (result) {
//           return result;
//         } else {
//           return item.number.includes(filter?.toLowerCase());
//         }
//       });
//     }
//   );
//   const filterContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return items
//       .filter((contact) =>
//         contact.name.toLowerCase().includes(normalizedFilter)
//       )
//       .sort((a, b) => a.name.localeCompare(b.name));
//   };

export const getFilterList = (state) => {
    console.log(state);
    const filters = getFilter(state);

    const normalizedFilter = filters.toLowerCase();
    const contacts = getContacts(state);
    
    return contacts.filter(({name}) => name.toLowerCase().includes(normalizedFilter))
    .sort((a, b) => a.name.localeCompare(b.name));
     
}