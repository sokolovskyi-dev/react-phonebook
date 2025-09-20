import { Contact } from 'components/Contact/Contact';
import React from 'react';
import { List } from './ContactList.styled';

export const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </List>
  );
};
