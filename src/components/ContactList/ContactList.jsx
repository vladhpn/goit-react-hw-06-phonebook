import { connect } from 'react-redux'
import contactsActions from '../../redux/contacts/contacts-action'
import PropTypes from 'prop-types';
import styles from './styles.module.scss'


const ContactList = ({contacts, onDeleteContact }) =>{return (<>
    <ul className={styles.list} >{contacts.map(({id, name, number}) => <li key={id} className={styles.item}>
        <p>{name}:</p>
        <p>{number}</p>
        <button className={styles.button} onClick={()=> onDeleteContact(id)}>Delete</button>
        </li>)}
        </ul> </>);
    } 

    ContactList.propTypes = {
     onDeleteContact: PropTypes.func.isRequired
    }

    const getVisibleContact = (contacts ,filter) => {
    
        const normilizeFilter = filter.toLowerCase();
    
        const filtered = contacts.filter(({name}) =>
          name.toLowerCase().includes(normilizeFilter),
        );
        return  filtered;
      };


    const mapStateToProps = ({contacts: {contacts, filter}}) => ({
        contacts: getVisibleContact(contacts, filter)
    })
    const mapDispatchToProps = dispatch => ({
        onDeleteContact: (id) => dispatch(contactsActions.deleteContact(id)),
    })
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
