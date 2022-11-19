import { React, Component } from 'react';
import  {nanoid}  from "nanoid";

import { Section } from "components/Section/Section";
import { Phonebook } from "components/Phonebook/Phonebook";
import { Contacts } from "components/Contacts/Contacts";


export class App extends Component {
  state = {
  contacts: [],
    name: '',
  number: ''
  }
  submitForm = (e) => {
    e.preventDefault();
    this.setState(({contacts, name,number}) => {
      return {
        contacts: [...contacts, {id: nanoid(),name: name, number: number}],
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
          <Contacts contacts={this.state.contacts} />
        </Section>
      </>
    )
  }
};
