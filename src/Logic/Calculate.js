import Operate from './Operate';

const Calculate = (calculatorObj, buttonName) => {
  let { total = 0, next, operation } = calculatorObj;
  const operations = ['+', '-', 'X', '/', '%'];
  operation = buttonName;
  if (operations.includes(buttonName)) {
    total = Operate(total, next, operation);
  }
  if (buttonName === '+/-') {
    total = Operate(total, -1, 'X');
    next = Operate(next, -1, 'X');

    return { total, next, operation };
  }
  if (operation === '=') {
    return { total, next, operation };
  }
  if (buttonName === 'AC') {
    total = '';
    next = '';
    operation = null;
    return { total, next, operation };
  }
  if (buttonName === '.') {
    next = next.concat(buttonName);
  }
  return { total, next, operation };
};

export default Calculate;
