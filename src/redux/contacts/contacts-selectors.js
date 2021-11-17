import { createSelector } from '@reduxjs/toolkit';

// interface IContact{
//   id: string
//   name:string
//   number:string
// }

// type ContactType ={
//   contacts: IContact[]
// }

// interface IIC{
//   contacts :ContactType
//   filter: string
// }

// interface IFilter{
// type: string
// }

// interface IIF{
//   contacts : IFilter
// }

// interface IF{
//   filter: IIF
// }

export const getContacts = state => state.contacts.contacts;
export const stateFilter = state => state.contacts.filter;
export const getVisibleContacts = createSelector(
  [getContacts, stateFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
