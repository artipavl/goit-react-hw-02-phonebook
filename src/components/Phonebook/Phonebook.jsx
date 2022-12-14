import { React, Component } from 'react';
import PropTypes from 'prop-types';
import css from 'components/Phonebook/Phonebook.module.css';

export class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  submitForm = e => {
    e.preventDefault();
    const { name, number } = this.state;
    for (const contact of this.props.contacts) {
      if (contact.name.toLowerCase() === name.toLowerCase()) {
        alert(`${name} is already in contacts.`);
        return;
      }
    }

    this.props.addContact(name, number);

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
      <form onSubmit={this.submitForm} className={css.phonebookForm}>
        <label>
          <span className={css.phonebookLableTitle}>Name</span>
          <input
            value={name}
            onChange={this.changeForm}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          <span className={css.phonebookLableTitle}>Number</span>
          <input
            value={number}
            onChange={this.changeForm}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className={css.phonebookButton}>
          add contacts
        </button>
      </form>
    );
  }
}

Phonebook.propTypes= {
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
