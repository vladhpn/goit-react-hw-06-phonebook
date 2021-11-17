import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('contacts/Add', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/Delete');
const changeFilter = createAction('contacts/ChangeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
