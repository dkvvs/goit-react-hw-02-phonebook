import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';
import { ContactItem } from '../../types';

const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <li className={s.item}>
      {name} : {number} <button onClick={() => onRemove(id)}>Delete</button>
    </li>
  );
};

ContactListItem.propTypes = {
  ...ContactItem,
  onRemove: PropTypes.func,
};

export default ContactListItem;
