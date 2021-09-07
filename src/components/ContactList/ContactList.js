
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactList.module.css'

import {
    fetchContacts,
    deleteContact,
} from '../../redux/contacts/contacts-operations';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';



export default function ContactList() {
    const contacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <ol className={styles.list}>
            {contacts.map(({ id, name, number }) => {
                return (
                    <li key={id} className={styles.item}>
                        {name}: <span >{number}</span>
                        <button
                            type="button"
className={styles.button}
                            onClick={() => dispatch(deleteContact(id))}
                        >
                            Delete
                        </button>
                    </li>
                );
            })}
        </ol>
    );
}