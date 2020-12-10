import Big from 'big.js';

let result = Infinity;

const Operate = (num1 = null, num2 = null, operation) => {
  const operations = ['+', '-', 'X', '/', '%'];
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
  }
  return result.toString();
};

export default Operate;
