import PropTypes from 'prop-types';
import { Item, Text } from './ContactItemStyles';
import Button from 'components/Button';
import { useDispatch } from 'react-redux';
import operations from 'redux/phonebook/phonebookOperations';

const ContactItem = ({ name, number, id = '' }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <Text>{name}: </Text>
      <Text>{number}</Text>
      <Button
        type="button"
        onClick={() => dispatch(operations.deleteContact(id))}
      >
        Удалить
      </Button>
    </Item>
  );
};
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default ContactItem;
