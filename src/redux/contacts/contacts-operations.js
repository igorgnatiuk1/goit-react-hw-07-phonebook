
import axios from 'axios';
import {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:3000';

export const fetchContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());

    try {
        const { data } = await axios.get('/contacts');
        dispatch(fetchContactsSuccess(data));
    } catch (error) {
        dispatch(fetchContactsError(error));
    }
};

export const addContact = (text, number) => async dispatch => {
    const contact = {
        name: text,
        number,
    };

    dispatch(addContactRequest());

    try {
        const { data } = await axios.post('/contacts', contact);
        dispatch(addContactSuccess(data));
    } catch (error) {
        dispatch(addContactError(error));
    }
};

export const deleteContact = id => async dispatch => {
    dispatch(deleteContactRequest());

    try {
        await axios.delete(`contacts/${id}`);
        dispatch(deleteContactSuccess(id));
    } catch (error) {
        dispatch(deleteContactError(error));
    }
};