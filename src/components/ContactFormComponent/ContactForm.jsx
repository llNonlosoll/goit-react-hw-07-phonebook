import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/operations';

import { selectContacts } from 'redux/selectors';

import {
  ContactFormForm,
  ContactFormLabel,
  ContactFormInput,
  ContactFormButton,
} from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const isInContacts = contacts.some(
      ({ name }) =>
        name.toLowerCase() === form.elements.name.value.toLowerCase()
    );

    // Contact check if is in contact
    if (isInContacts) {
      alert(`${form.elements.name.value} is already in contacts`);
      return;
    }

    // add contact
    dispatch(addContact({ name, phone }));

    setName('');
    setPhone('');
  };

  return (
    <ContactFormForm onSubmit={handleSubmit}>
      <ContactFormLabel htmlFor="name">Name</ContactFormLabel>
      <ContactFormInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <ContactFormLabel htmlFor="number">Number</ContactFormLabel>
      <ContactFormInput
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={phone}
        onChange={event => setPhone(event.target.value)}
      />
      <ContactFormButton type="submit">Add Contact</ContactFormButton>
    </ContactFormForm>
  );
};
