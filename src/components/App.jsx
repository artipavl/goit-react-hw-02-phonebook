import { React, Component } from 'react';
import  {nanoid}  from "nanoid";

import { Section } from "components/Section/Section";
import { Phonebook } from "components/Phonebook/Phonebook";
import { Contacts } from "components/Contacts/Contacts";
import { Filter } from "components/Filter/Filter";


export class App extends Component {
  state = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
  filter: '',
  name: '',
  number: ''
  }
  submitForm = (e) => {
    e.preventDefault();
    this.setState(({contacts, name,number}) => {
      return {
        contacts: [...contacts, { id: nanoid(), name: name, number: number }],
        filter: '',
        name: '',
        number: '',
      }
    })
    e.currentTarget.reset();
  }

  inputForm = (e) => {
    const input = e.target
    this.setState(stat => {
      return {
        ...stat,
        [input.name]: input.value,
      }
    })
  }
  render() {
    return (
      <>
        <Section title='Phonebook'>
          <Phonebook submitForm={this.submitForm} inputForm={this.inputForm} />
        </Section>
        <Section title='Contacts'>
          <Filter input={this.inputForm}/>
          <Contacts contacts={this.state.contacts} filter = {this.state.filter} />
        </Section>
      </>
    )
  }
};
