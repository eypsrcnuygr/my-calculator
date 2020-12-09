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
      // next: null,
      // operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const calculatedObj = Calculate({ total: 15, next: 15 }, '+');
    this.setState(() => ({
      total: calculatedObj.total,
      // next: calculatedObj.next,
      // operation: calculatedObj.operation,
    }));
    // eslint-disable-next-line no-console
    console.log(this.state.total);
  }

  render() {
    const { total } = this.state;
    return (
      <>
        <Display result={total} />
        <ButtonPanel ClickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
