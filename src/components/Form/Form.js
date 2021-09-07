
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import styles from './Form.module.css'



export default function Form() {
    const [contactName, setContactName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const handleInputChange = event => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case 'name':
                setContactName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();

        const isExistedName = contacts.find(
            contact => contact.name.toLowerCase() === contactName.toLowerCase(),
        );

        if (isExistedName) {
            alert(contactName + ' is already in your contacts');
            return;
        }

        dispatch(addContact(contactName, number));
        reset();
    };

    const reset = () => {
        setContactName('');
        setNumber('');
    };

    return (
        <form  onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label}>
                Name
                <input
className={styles.input}
                    type="text"
                    name="name"
                    value={contactName}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    onChange={handleInputChange}
                    required
                />
            </label>
            <label className={styles.label}>
                Phone Number
                <input
                    className={styles.input}
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    onChange={handleInputChange}
                    required
                />
            </label>
            <button  type="submit" className={styles.button}>
                Add Contact
            </button>
        </form>
    );
}