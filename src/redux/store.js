// import configureStore function
import { configureStore } from '@reduxjs/toolkit';
// import contacts reducer
import { contactsReducer } from './contactsSlice';
// import filter reducer
import { filterReducer } from './filterSlice';

// store
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
