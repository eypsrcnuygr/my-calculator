/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../Logic/Calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // getSnapshotBeforeUpdate(prevState) {
  //   if (this.state.operation !== prevState.operation && this.state.total && this.state.next) {
  //     return this.state;
  //   }
  //   return null;
  // }

  // componentDidUpdate(prevState) {
  //   if (prevState.operation === '=') {
  //     this.handleClick();
  //   }
  // }

  handleChange(e) {
    const { total, next, operation } = this.state;
    const operations = ['+', '-', 'X', '/', '%', '=', 'AC'];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (operations.includes(e.target.value)) {
      this.setState(() => ({ operation: e.target.value }));
      console.log(`Benim için yap şu işi ${e.target.value}`);
    } else if (numbers.includes(e.target.value)
    && this.state.next === null
    && this.state.total === null) {
      this.setState(() => ({ total: e.target.value }));
    } else if (numbers.includes(e.target.value)
    && this.state.next === null
    && this.state.total !== null) {
      this.setState(() => ({ next: e.target.value }));
    } else if (numbers.includes(e.target.value)
    && this.state.next !== null
    && this.state.total !== null) {
      this.setState(() => ({ next: e.target.value }));
    }
    if (total && next && operations.includes(operation) && e.target.value === '='
    ) {
      this.handleClick();
    }
    if (total && next && operations.includes(operation) && e.target.value === 'AC'
    ) {
      console.log(`The target is ${e.target.value}`);
      this.setState({ operation: e.target.value }, () => this.handleClick());
    }
  }

  handleClick() {
    const { total, next, operation } = this.state;
    // if (total === null) {
    //   total = `${total}`.replace(/null/g, '');
    // }
    // if (next === null) {
    //   next = `${next}`.replace(/null/g, '');
    // }
    // if (operation === null) {
    //   operation = `${operation}`.replace(/null/g, '');
    // }
    const calculatedObj = Calculate({ total, next }, operation);
    console.log(`THe calculated Object's operation is ${calculatedObj.operation}`);
    this.setState(() => ({
      total: calculatedObj.total,
      next: calculatedObj.next,
      operation: calculatedObj.operation,
    }));
  }

  render() {
    const { total, next, operation } = this.state;
    let ConditionalDisplay;
    console.log('----------------------');
    console.log(total);
    console.log(next);
    console.log(operation);
    if (next && !operation) {
      ConditionalDisplay = <Display result={next} />;
    } else if (next && operation && !total) {
      ConditionalDisplay = <Display result={operation} />;
    } else {
      ConditionalDisplay = <Display result={total} />;
    }
    return (
      <div>
        {ConditionalDisplay}
        <ButtonPanel ClickHandler={this.handleChange} />
      </div>
    );
  }
}

export default App;
