import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
    fetchContactsSuccess,
    addContactSuccess,
    deleteContactSuccess,
    filterContact,
} from './contacts-actions';

const items = createReducer([], {
    [fetchContactsSuccess]: (_, action) => action.payload,
    [addContactSuccess]: (state, action) => [...state, action.payload],
    [deleteContactSuccess]: (state, action) =>
        state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
    [filterContact]: (_, action) => action.payload,
});

export default combineReducers({
    items,
    filter,
});