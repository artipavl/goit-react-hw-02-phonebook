import PropTypes from 'prop-types';
import css from 'components/statistics/Statistics.module.css';

export const Statistics = ({ title = '', stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(stat => {
          return (
            <li key={stat.id} className={css.item} style={{background: `${'#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()}`}} >
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
