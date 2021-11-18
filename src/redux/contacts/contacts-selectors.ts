import { createSelector } from '@reduxjs/toolkit';
import {IStateContact} from '../../interfaces/interfaceContact'
import {IFilterState} from '../../interfaces/interfaceFilter'
 

export const getContacts = (state:IStateContact) => state.contacts.contacts;
export const stateFilter = (state:IFilterState)=> state.contacts.filter;
export const getVisibleContacts = createSelector(
  [getContacts, stateFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
