import { Children } from 'react';
import styles from './ButtonBase.module.css'; // Default styles
import PropTypes from 'prop-types';

export const ButtonBase = ({
  color = "primary",      // String : primary | secondary | light | dark
  variant = "contained",
  fullWidth,              // Boolean
  children,               // Any
  buttonProps = {},       // Object
  textProps = {},         // Object
  startAdornment,
  endAdornment,
  ...rest
}) => {

  const buttonClassName = styles.button + " " +
    styles[`button--${color}`] + " " +
    styles[`button--${variant}`] + " " +
    `${fullWidth && styles.buttonFullWidth}`;

  const textClassName = `${styles.text} ` +
    styles[`text--${color}`];


  return (
    <button
      {...rest}
      {...buttonProps}
      className={buttonClassName}>
      {startAdornment &&
        <div style={{ paddingRight: "8px" }}>
          {startAdornment}
        </div>
      }
      <p
        {...textProps}
        className={textClassName}>
        {children}
      </p>
      {endAdornment &&
        <div style={{ paddingLeft: "8px" }}>
          {endAdornment}
        </div>
      }
    </button>
  )
}

ButtonBase.propTypes = {
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  buttonProps: PropTypes.object,
  textProps: PropTypes.object,
};
