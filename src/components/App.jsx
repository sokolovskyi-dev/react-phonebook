import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 1, name: 'Rosie Simpson', number: '645-17-49' },
      { id: 2, name: 'Hermonie Kline', number: '555-22-41' },
      { id: 3, name: 'Eden Clements', number: '555-13-94' },
      { id: 4, name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = (name, number) => {
    const normalizedNewName = name.toLowerCase().trim();
    const isDuplicate = this.state.contacts.some(
      ({ name }) => name.toLowerCase().trim() === normalizedNewName
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  getFilteredContacts = () => {
    const filterValue = this.state.filter.toLowerCase();
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterValue)
    );
  };

  deleteContact = deleteId => {
    const newContactList = this.state.contacts.filter(
      ({ id }) => id !== deleteId
    );
    this.setState({
      contacts: newContactList,
    });
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />

        <h2>Contacts</h2>

        <Filter handleChange={this.handleChange} filter={this.state.filter} />

        <ContactList
          filteredContacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
