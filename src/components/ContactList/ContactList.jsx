import { useDispatch, useSelector} from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import contactsActions from '../../redux/contacts/contacts-action'
import styles from './styles.module.scss'

const ContactList = () =>{
    const dispatch = useDispatch()
    const contacts = useSelector(getVisibleContacts)

    // console.log(123)
    // console.log(contacts)

    const onDeleteContact = (id) => dispatch(contactsActions.deleteContact(id));
    return (<>
    <ul className={styles.list} >{contacts.map(({id, name, number}) => <li key={id} className={styles.item}>
        <p>{name}:</p>
        <p>{number}</p>
        <button className={styles.button} onClick={() => onDeleteContact(id)}>Delete</button>
        </li>)}
        </ul> </>);
    } 

export default ContactList;
