// import createSlice function
import { createSlice } from '@reduxjs/toolkit';
// import fetch functions
import { fetchContacts, addContact, deleteContact } from './operations';

// handle the pending action by updating the state
const handlePending = state => {
  state.isLoading = true;
};

// handle the rejected action by updating the state
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

// initial state
const initialContactsState = {
  items: [],
  isLoading: false,
  error: null,
};

// contactsSlice
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  extraReducers: {
    // all contacts
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    // add contact
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    // delete contact
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
