import PropTypes from 'prop-types';
import css from 'components/Contacts/ContactList.module.css';

export const ContactItem = ({contact, deleteContact}) => {
    return (
        <li className={css.item}>
            {contact.name}: {contact.number}
            <button
              type="button"
              onClick={() => deleteContact(contact.id)}
              className={css.button}
            >
              Delete
            </button>
          </li>
    )
}

ContactItem.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};