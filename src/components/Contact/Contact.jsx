import React from 'react';
import { MdOutlineContactPhone } from 'react-icons/md';
import { ContactStyled, DeleteButton, Name } from './Contact.styled';

export const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <ContactStyled>
      <Name>
        <MdOutlineContactPhone className="icon" />
        <span>
          {name}: {number}
        </span>
      </Name>

      <DeleteButton type="button" onClick={() => deleteContact(id)}>
        Delete
      </DeleteButton>
    </ContactStyled>
  );
};
