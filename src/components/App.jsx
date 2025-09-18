import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';

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

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />

        <h2>Contacts</h2>

        <label>
          <div>Find contact by name</div>
          <input
            type="text"
            name="filter"
            onChange={this.handleChange}
            value={this.state.filter}
            autoComplete="off"
          />
        </label>

        <ul>
          {filteredContacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                {name}: {number}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
