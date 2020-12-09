import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, handleClick } = props;
  return (
    <>
      <button type="button" onClick={handleClick}>{name}</button>
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: '',
};

export default Button;
