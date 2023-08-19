import React from 'react';

export const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => onDeleteContact(contact)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
