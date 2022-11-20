import { React, Component } from 'react';

export class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  submitForm = e => {
    e.preventDefault();

    for (const contact of this.props.contacts) {
      if ((contact.name.toLowerCase() === this.state.name.toLowerCase())||(contact.number.toLowerCase() === this.state.number.toLowerCase())) {
        alert('povtor');
        return;
      }
    }

    this.props.addContact(this.state.name, this.state.number);

    this.setState({
      name: '',
      number: '',
    });
  };

  changeForm = e => {
    const input = e.target;
    this.setState(stat => {
      return {
        ...stat,
        [input.name]: input.value,
      };
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.submitForm}>
        <p>Name</p>
        <input
          value={name}
          onChange={this.changeForm}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <p>Number</p>
        <input
          value={number}
          onChange={this.changeForm}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">submit</button>
      </form>
    );
  }
}
