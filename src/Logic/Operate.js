import Big from 'big.js';

const Operate = (num1, num2, operation) => {
  const operations = ['+', '-', 'X', '/', '%'];
  let result = Infinity;
  if (operations.includes(operation)) {
    if (operation === '+') {
      result = new Big(num1) + new Big(num2);
    } else if (operation === '-') {
      result = new Big(num1) - new Big(num2);
    } else if (operation === 'X') {
      result = new Big(num1) * new Big(num2);
    } else if (operation === '/') {
      result = new Big(num1) / new Big(num2);
    } else if (operation === '%') {
      result = (100 * new Big(num1)) / new Big(num2);
    }
  } else if (operation === '=') {
    return result;
  }
  return result;
};

export default Operate;
