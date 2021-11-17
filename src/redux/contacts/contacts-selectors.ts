import { createSelector } from '@reduxjs/toolkit';


type ContactType = {
  id: string
  name:string
  number:string
}

type ContactsType ={
  contacts: ContactType[]
}

interface IStateContact{
  contacts : ContactsType
}

type FilterType = {
filter: string
}

interface IFilterState {
  contacts : FilterType
}


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
