import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getAllContacts } from 'redux/phonebook/phonebookOperations';
import { getContacts } from 'redux/phonebook/phonebookSelectors';

import Container from 'components/Container';
import ContactList from 'components/ContactList';
import ContactEditor from 'components/ContactEditor';
import Filter from 'components/Filter';
import Stats from 'components/Stats';

const PhonebookView = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Телефонная книга</h1>
      <Stats />
      <ContactEditor />
      {contacts.length > 0 && <Filter />}
      <ContactList />
      <ToastContainer />
    </Container>
  );
};

export default PhonebookView;
