import { useState} from "react";
import {getContacts} from '../../redux/contacts/contacts-selectors'
import contactsActions from '../../redux/contacts/contacts-action'
import { toast } from 'react-toastify';
import styles from '../Form/styles.module.scss';
import { useDispatch, useSelector} from "react-redux";


const Form  = () => { 
       const dispatch = useDispatch()
       const contacts = useSelector(getContacts)

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const addName = (event) => {
        setName(event.target.value)
    }
    const addNumber = (event) => {
      setNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()


    const findContact = contacts.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    const findNumber = contacts.find((item) => item.number === number) 
    if (findContact) {
      toast.warning(`${name} is already in contacts`);
      
      return;
    }
    else if(findNumber){
      toast.warning(`${number} is already in contacts`);
      
      return;
    }
    dispatch(contactsActions.addContact({name,number}))
    setNumber('')
    setName('')
  }
  
        return(
        <>
            <h1 className={styles.title}>Phone book</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.label}>
                <span className={styles.text}>Name</span>
                <input className={styles.input}
                  type='text'
                  name='name'
                  value={name}
                  onChange={addName}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
                />
              </label>
              <label className={styles.label}>
                <span className={styles.text}>Phone</span>
                <input className={styles.input}
                  type='tel'
                  name='number'
                  value={number}
                  onChange={addNumber}
                  // pattern='(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})'
                  title='Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +'
                  required
                />
              </label>
              <button className={styles.button} type='submit'><span className={styles.content}>Add contact</span> </button>
            </form>
            
          </>)
    }

export default Form;