// import hook useState
import { useState } from 'react';
// import hooks useDispatch, useSelector
import { useDispatch, useSelector } from 'react-redux';
// import fetch function
import { addContact } from 'redux/operations';
// import selector
import { selectContacts } from 'redux/selectors';
// import styled components
import {
  ContactFormForm,
  ContactFormLabel,
  ContactFormInput,
  ContactFormButton,
} from './ContactForm.styled';

// ContactForm component
export const ContactForm = () => {
  // local component state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // variables dispatch
  const dispatch = useDispatch();

  // getting a list of contacts from the state
  const contacts = useSelector(selectContacts);

  // onSubmit function
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    // variables isInContacts
    const isInContacts = contacts.some(
      ({ name }) =>
        name.toLowerCase() === form.elements.name.value.toLowerCase()
    );

    // Contact check if contact is in contact list
    if (isInContacts) {
      alert(`${form.elements.name.value} is already in contacts`);
      return;
    }

    // add contact
    dispatch(addContact({ name, phone }));

    // form reset
    setName('');
    setPhone('');
  };

  // onChange setName function
  const handleNameChange = event => setName(event.target.value);

  // onChange setPhone function
  const handlePhoneChange = event => setPhone(event.target.value);

  return (
    <ContactFormForm onSubmit={handleSubmit}>
      <ContactFormLabel htmlFor="name">
        Name
        <ContactFormInput
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
        />
      </ContactFormLabel>
      <ContactFormLabel htmlFor="number">
        Number
        <ContactFormInput
          id="number"
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handlePhoneChange}
        />
      </ContactFormLabel>
      <ContactFormButton type="submit">Add Contact</ContactFormButton>
    </ContactFormForm>
  );
};
