import Operate from './Operate';

const Calculate = (calculatorObj, buttonName) => {
  let { total = 0, next, operation } = calculatorObj;
  const operations = ['+', '-', 'X', '/', '%'];
  operation = buttonName;
  if (operations.includes(buttonName)) {
    total = Operate(total, next, operation);
  }
  if (buttonName === '+/-') {
    if (!next) {
      total = Operate(total, -1, 'X');
    } else if (total && next) {
      next = Operate(next, -1, 'X');
    }

    return { total, next, operation };
  }
  if (operation === '=') {
    return { total, next, operation };
  }
  if (buttonName === 'AC') {
    console.log(`THe next is ${next}`);
    if (next === '') {
      total = '';
    } else {
      next = '';
    }
    operation = 'AC';
  }
  if (buttonName === '.') {
    if (operation) {
      next = next.concat(buttonName);
    } else {
      total = total.concat(buttonName);
    }
  }
  return { total, next, operation };
};

export default Calculate;
