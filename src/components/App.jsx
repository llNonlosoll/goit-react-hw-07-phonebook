import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';

import { Contacts } from './ContactsListComponent/ContactsList';
import { ContactForm } from './ContactFormComponent/ContactForm';
import { Filter } from './FilterComponent/Filter';
import { Loader } from './LoaderComponent/Loader';

import {
  AppContainer,
  AppTitle,
  AppSecondaryTitle,
  EmptyText,
} from './App.styled';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
