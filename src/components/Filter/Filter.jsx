import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-action'
import styles from './styles.module.scss'

const Filter = ({value, onChange}) => {
    return(<>
    <h2 className={styles.title}>Contacts</h2>  
     <label className={styles.label}>
       <span className={styles.text}>Find contacts by name</span> 
        
          <input className={styles.input} type='text' value={value} onChange={onChange} />
        
      </label> </>)}

      // Filter.propTypes = {
      //   value: PropTypes.string.isRequired,
      //   onChange: PropTypes.func.isRequired
      // }

//  const getVisibleContact = () => {
//     const { contacts, filter } = this.state;

//     const normilizeFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normilizeFilter),
//     );
//   };


      const mapStateToProps = (state) => {
       return {
         value: state.contacts.filter
        } 
    }
     const mapDispatchToProps =  dispatch => ({
       onChange: e => dispatch(contactsActions.changeFilter(e.target.value))
     })

export default connect(mapStateToProps, mapDispatchToProps )(Filter);