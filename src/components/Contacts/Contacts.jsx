import PropTypes from 'prop-types';
import css from 'components/Contacts/Contacts.module.css';

export const Contacts = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id} className={css.item}>
            {name}: {number}
            <button
              type="button"
              onClick={() => deleteContact(id)}
              className={css.button}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

Contacts.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
