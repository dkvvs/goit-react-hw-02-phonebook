import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from '../../types/index';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape(ContactItem)),
};

export default ContactList;
