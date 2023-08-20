import React from 'react';
import {
  ListContainer,
  StyledContactList,
  ListItem,
  ContactInfo,
  ContactName,
  DeleteButton,
} from './contactList-style';

export const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <ListContainer>
      <StyledContactList>
        {filteredContacts.map(contact => (
          <ListItem key={contact.id}>
            <ContactInfo>
              <ContactName>{contact.name}:</ContactName> {contact.number}
              <DeleteButton onClick={() => onDeleteContact(contact)}>
                Delete
              </DeleteButton>
            </ContactInfo>
          </ListItem>
        ))}
      </StyledContactList>
    </ListContainer>
  );
};
