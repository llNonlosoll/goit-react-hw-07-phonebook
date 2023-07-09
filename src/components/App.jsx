import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
// import { selectIsLoading, selectError } from 'redux/selectors';

import { Contacts } from './ContactsListComponent/ContactsList';

import {
  AppContainer,
  AppTitle,
  // AppSecondaryTitle,
  // EmptyText,
} from './App.styled';

export const App = () => {
  const dispatch = useDispatch();

  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <AppTitle>PhoneBook</AppTitle>

      <Contacts></Contacts>
    </AppContainer>
  );
};
