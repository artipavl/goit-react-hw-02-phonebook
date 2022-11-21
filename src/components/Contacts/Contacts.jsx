import PropTypes from 'prop-types';
import css from 'components/Contacts/Contacts.module.css';

export const Contacts = ({ contacts, filter, deleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ name, number, id }) => {
        const nameOwer = name.toLowerCase();
        const numberOwer = number.toLowerCase();
        const filterOwer = filter.toLowerCase();
        return (
          (nameOwer.includes(filterOwer) ||
            numberOwer.includes(filterOwer)) && (
            <li key={id} className={css.item}>
              {name}: {number}{' '}
              <button
                type="button"
                onClick={()=>deleteContact(id)}
                className={css.button}
              >
                Delete
              </button>
            </li>
          )
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
