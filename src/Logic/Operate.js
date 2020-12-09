import Big from 'big.js';

const Operate = (num1 = null, num2 = null, operation) => {
  const operations = ['+', '-', 'X', '/', '%'];
  let result = Infinity;
  if (operations.includes(operation)) {
    if (operation === '+') {
      result = new Big(num1).plus(new Big(num2));
    } else if (operation === '-') {
      result = new Big(num1).minus(new Big(num2));
    } else if (operation === 'X') {
      result = new Big(num1).times(new Big(num2));
    } else if (operation === '/') {
      result = new Big(num1).div(new Big(num2));
    } else if (operation === '%') {
      result = new Big(num1).div(100);
    }
  } else if (operation === '=') {
    return result;
  }
  return result;
};

export default Operate;
