import { useDispatch, useSelector} from 'react-redux';
import {useCallback} from 'react';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import contactsActions from '../../redux/contacts/contacts-action'
import styles from './styles.module.scss'
import { toast } from 'react-toastify';



const ContactList = () =>{

    
    const dispatch = useDispatch()
    const contacts = useSelector(getVisibleContacts)

    const deleteContact = useCallback((id) => {dispatch(contactsActions.deleteContact(id))},[dispatch]);

    const onDeleteContact = (id:string, name:string) => {
        deleteContact(id)
        toast.info(`${name} was successfully removed from the list`);
    }

    return (<>
    <ul className={styles.list} >{contacts.map(({id, name, number}) => <li key={id} className={styles.item}>
        <p>{name}:</p>
        <p>{number}</p>
        <button className={styles.button} onClick={() => onDeleteContact(id, name)}>Delete</button>
        </li>)}
        </ul> </>);
    } 

export default ContactList;
