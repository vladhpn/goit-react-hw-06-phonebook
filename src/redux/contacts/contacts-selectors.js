import { createSelector } from '@reduxjs/toolkit';
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
