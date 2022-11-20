import { React, Component } from 'react';
import { nanoid } from 'nanoid';

import { Section } from 'components/Section/Section';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
 
  addContact = (name, number) => {
        this.setState(({ contacts, filter}) => {
          return {
        contacts: [...contacts, { id: nanoid(), name, number}],
        filter,
      };
    });
  }

  deleteContact = e => {
    const edEl = e.target.dataset.id;
    const { contacts } = this.state;
    let indexEl;
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].id === edEl) {
        indexEl = i;
      }
    }

    this.setState(state => {
      const stateRed = [...state.contacts];
      stateRed.splice(indexEl, 1);
      return {
        ...state,
        contacts: stateRed,
      };
    });
  };

    changeFilter = e => {
    const input = e.target;
    this.setState(stat => {
      return {
        ...stat,
        [input.name]: input.value,
      };
    });
  };

  render() {
    const {filter, contacts} = this.state;
    return (
      <div>
        <Section title="Phonebook">
          <Phonebook addContact={this.addContact} contacts={contacts} />
        </Section>
        <Section title="Contacts">
          <Filter change={this.changeFilter} value={filter} />
          <Contacts
            contacts={contacts}
            filter={filter}
            deleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}
