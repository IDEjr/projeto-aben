import PropTypes from 'prop-types';
import classes from './Partner.module.css'

export default function Partner ({title, imageUrl}) {
  return (
    <div
      className={classes.partner}
      style={{backgroundImage: `url(${imageUrl})`}}
    >
      <div className={classes.title}>
        <div>{title}</div>
      </div>
    </div>
  )
}

Partner.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};
