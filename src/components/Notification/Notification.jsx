import PropTypes from 'prop-types';

export const Notification = ({ message = ' ' }) => <h3>{message}</h3>;

Notification.prototype = {
  message: PropTypes.string,
};
