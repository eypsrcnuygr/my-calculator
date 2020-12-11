import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../Logic/Calculate';
import '../Calculator.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const {
      total, next, operation,
    } = this.state;
    const operations = ['+', '-', 'X', '/', '%', '='];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (operations.includes(e.target.value)) {
      this.setState(() => ({ operation: e.target.value }));
    } else if ((numbers.includes(e.target.value)
    && !next
    && !operation)
    || operation === 'AC') {
      const variable = [];
      variable.push(e.target.value);
      this.setState(() => ({ total: total + variable.toString() }));
    } else if (numbers.includes(e.target.value)
    && total
    && operation !== '.') {
      const variable = [];
      variable.push(e.target.value);
      this.setState(() => ({ next: next + variable.toString() }));
    } else if (operation === 'AC' && !total) {
      const variable = [];
      variable.push(e.target.value);
      this.setState(() => ({ total: total + variable.toString() }));
    } else if (operation === '.' && !next) {
      const variable = [];
      variable.push(e.target.value);
      this.setState(() => ({ total: total + variable.toString() }));
    } else if (total && next && operation === '.') {
      const variable = [];
      variable.push(e.target.value);
      this.setState(() => ({ next: next + variable.toString() }));
    }
    if (total && next && operations.includes(operation) && e.target.value === '='
    ) {
      this.handleClick();
    }
    if ((total && e.target.value === 'AC')
    || (total && e.target.value === '+/-')
    || (total && e.target.value === '.')
    ) {
      this.setState({ operation: e.target.value }, () => this.handleClick());
    }
  }

  handleClick() {
    const { total, next, operation } = this.state;
    const calculatedObj = Calculate({ total, next }, operation);

    this.setState(() => ({
      total: calculatedObj.total,
      next: calculatedObj.next,
      operation: calculatedObj.operation,
    }));
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <div>
        <Display result={`The total is ${total},   the next is ${next},   and the operation is ${operation}`} />
        <ButtonPanel ClickHandler={this.handleChange} />
      </div>
    );
  }
}

export default App;
