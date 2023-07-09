// import hook useEffect
import { useEffect } from 'react';
// import hooks useDispatch, useSelector
import { useSelector, useDispatch } from 'react-redux';
// import fetch function
import { fetchContacts } from 'redux/operations';
// import selectors
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
// import components
import { Contacts } from './ContactsListComponent/ContactsList';
import { ContactForm } from './ContactFormComponent/ContactForm';
import { Filter } from './FilterComponent/Filter';
import { Loader } from './LoaderComponent/Loader';
// import styled components
import {
  AppContainer,
  AppTitle,
  AppSecondaryTitle,
  EmptyText,
} from './App.styled';

// App component
export const App = () => {
  // variables dispatch
  const dispatch = useDispatch();

  // getting a list of contacts from the state
  const contacts = useSelector(selectContacts);
  // getting isLoading value from the state
  const isLoading = useSelector(selectIsLoading);
  // getting error value from the state
  const error = useSelector(selectError);

  // when rendering, make a fetch
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <AppTitle>PhoneBook</AppTitle>

      <ContactForm />

      {contacts.length > 0 && <AppSecondaryTitle>Contacts</AppSecondaryTitle>}

      {isLoading && !error && <Loader />}

      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <EmptyText>YOUR PHONEBOOK IS EMPTY</EmptyText>
      )}

      {error && error}

      {contacts.length > 0 && <Contacts />}
    </AppContainer>
  );
};
