import PropTypes from 'prop-types';

const Display = props => {
  const { onChange, result } = props;
  return (
    <>
      <p onChange={e => { onChange(e); }}>{result}</p>

    </>
  );
};

Display.propTypes = {
  result: PropTypes.string,
  onChange: PropTypes.func,
};

Display.defaultProps = {
  result: 'O',
  onChange: null,
};

export default Display;
