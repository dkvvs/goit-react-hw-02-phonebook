import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddNewContact = nameContact =>
    this.setState(({ contacts }) => ({
      contacts: [...contacts, nameContact],
    }));

  handleCheckContact = name => {
    const { contacts } = this.state;
    const isExistContact = !!contacts.find(contact => contact.name === name);
    if (isExistContact) {
      alert('Контакт с таким именем уже существует!');
    }
    return !isExistContact;
  };

  handleRemoveContact = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

  handleFilter = event => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContact();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onAddContact={this.handleAddNewContact}
          onCheckContact={this.handleCheckContact}
        />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleFilter} />
        <ContactList
          contacts={visibleContacts}
          onRemove={this.handleRemoveContact}
        />
      </div>
    );
  }
}

export default App;
