import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const DELETE_CONTACT = 'contacts/Delete'

interface IContact{
  id?: string
  name:string
  number:string
}

const addContact = createAction('contacts/Add', ({ name, number }: IContact) => ({
  payload: {
    id: shortid.generate(),
    name: name,
    number: number,
  },
}));

const deleteContact = createAction<string>('contacts/Delete');
const changeFilter = createAction<string>('contacts/ChangeFilter');


interface IDeleteContact{
  type: typeof DELETE_CONTACT
  payload: string
}


// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
