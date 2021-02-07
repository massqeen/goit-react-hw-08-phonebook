import { useSelector } from 'react-redux';
import {
  getContacts,
  getFilteredContacts,
} from 'redux/phonebook/phonebookSelectors';

const Stats = () => {
  const contacts = useSelector(getContacts);
  const visibleContacts = useSelector(getFilteredContacts);

  return (
    <div>
      <p>Всего контактов: {contacts.length}</p>
      <p>Показано контактов: {visibleContacts.length}</p>
    </div>
  );
};

export default Stats;
