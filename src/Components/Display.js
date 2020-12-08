import PropTypes from 'prop-types';

function Display(props) {
  const { result } = props;
  return (
    <>
      {result}
    </>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: 'O',
};

export default Display;
