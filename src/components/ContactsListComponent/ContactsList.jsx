import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';

import {
  ContactsListList,
  ContactsListItem,
  ContactsListItemContainer,
  ContactsListButton,
} from './ContactsList.styled';

export const Contacts = () => {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const handleContactDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactsListList>
      {contacts.map(contact => (
        <ContactsListItem key={contact.id}>
          <ContactsListItemContainer>
            <p>{contact.name}: </p>
            <p>{contact.phone}</p>
          </ContactsListItemContainer>
          <ContactsListButton
            type="button"
            name="delete"
            onClick={() => handleContactDelete(contact.id)}
          >
            Delete
          </ContactsListButton>
        </ContactsListItem>
      ))}
    </ContactsListList>
  );
};
