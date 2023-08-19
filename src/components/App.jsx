import React, { Component } from 'react';
import { ContactForm } from './contact_form/ContactForm';
import { ContactList } from './contact_list/ContactList';
import { Filter } from './filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addNewContact = newContact => {
    const { contacts } = this.state;
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (existingContact) {
      alert(`"${existingContact.name}" is already in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  deleteContact = contactToDelete => {
    const updatedContacts = this.state.contacts.filter(
      contact => contact.id !== contactToDelete.id
    );
    this.setState({ contacts: updatedContacts });
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addNewContact={this.addNewContact} />

        <h2>Contacts</h2>
        <Filter
          handleFilterChange={this.handleFilterChange}
          filter={this.state.filter}
        />
        <ContactList
          filteredContacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
