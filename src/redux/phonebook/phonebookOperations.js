import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      return await axios.post('/contacts', contact).then(({ data }) => data);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getAllContacts = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, { rejectWithValue }) => {
    try {
      return await axios.get('/contacts').then(({ data }) => data);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const phonebookOperations = { addContact, deleteContact, getAllContacts };
export default phonebookOperations;
