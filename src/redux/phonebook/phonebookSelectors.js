import { createSelector } from 'reselect';

export const getContacts = ({ phonebook: { contact } }) => contact.contacts;
export const getFilterQuery = ({ phonebook: { filter } }) => filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilterQuery],
  (contacts, filterQuery) =>
    contacts.filter((item) =>
      item.name.toLowerCase().includes(filterQuery.toLowerCase())
    )
);
