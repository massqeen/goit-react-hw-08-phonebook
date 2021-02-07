import { combineReducers } from 'redux';
import { createReducer, createSlice } from '@reduxjs/toolkit';

import { changeFilter } from './phonebookActions';
import {
  getAllContacts,
  addContact,
  deleteContact,
} from './phonebookOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  extraReducers: {
    [getAllContacts.fulfilled](state, action) {
      state.contacts = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.contacts = [action.payload, ...state.contacts];
    },
    [deleteContact.fulfilled](state, action) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const phoneBookSlice = combineReducers({
  contact: contactsSlice.reducer,
  filter,
});

export default phoneBookSlice;
