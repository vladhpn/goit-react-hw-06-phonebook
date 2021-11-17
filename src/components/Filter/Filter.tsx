import {useCallback} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-action'
import { stateFilter } from '../../redux/contacts/contacts-selectors';
import styles from './styles.module.scss'

const Filter = () => {
    const dispatch = useDispatch()
    const value = useSelector(stateFilter)
    const onChange = useCallback((event) => {dispatch(contactsActions.changeFilter(event.target.value))},[dispatch]);

    return(<>
    <h2 className={styles.title}>Contacts</h2>  
     <label className={styles.label}>
       <span className={styles.text}>Find contacts by name</span> 
        
          <input className={styles.input} type='text' value={value} onChange={onChange} />
        
      </label> </>)}

export default Filter;