import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: '0',
      currentInput: '',
      previousInput: '',
      operator: null,
    };
  }

  handleNumberClick = (number) => {
    const { currentInput, display } = this.state;
    if (display === '0' || display === '-0') {
      this.setState({
        display: number,
        currentInput: number,
      });
    } else {
      this.setState({
        display: currentInput + number,
        currentInput: currentInput + number,
      });
    }
  };

  handleOperatorClick = (operator) => {
    const { currentInput } = this.state;
    this.setState({
      operator,
      previousInput: currentInput,
      currentInput: '',
    });
  };

  handleEqualsClick = () => {
    const { currentInput, previousInput, operator } = this.state;
    if (operator === '+') {
      this.setState({
        display: (parseFloat(previousInput) + parseFloat(currentInput)).toString(),
        currentInput: '',
        operator: null,
        previousInput: '',
      });
    } else if (operator === '-') {
      this.setState({
        display: (parseFloat(previousInput) - parseFloat(currentInput)).toString(),
        currentInput: '',
        operator: null,
        previousInput: '',
      });
    } else if (operator === '*') {
      this.setState({
        display: (parseFloat(previousInput) * parseFloat(currentInput)).toString(),
        currentInput: '',
        operator: null,
        previousInput: '',
      });
    } else if (operator === '/') {
      this.setState({
        display: (parseFloat(previousInput) / parseFloat(currentInput)).toString(),
        currentInput: '',
        operator: null,
        previousInput: '',
      });
    }
  };

  handleClearClick = () => {
    this.setState({
      display: '0',
      currentInput: '',
      previousInput: '',
      operator: null,
    });
  };

  render() {
    return (
      <center>
      <div className="calculator">
        <div className="display">{this.state.display}</div>
        <div className="buttons">
          <div className="row">
            <button onClick={() => this.handleNumberClick('7')}>7</button>
            <button onClick={() => this.handleNumberClick('8')}>8</button>
            <button onClick={() => this.handleNumberClick('9')}>9</button>
            <button onClick={() => this.handleOperatorClick('+')}>+</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleNumberClick('4')}>4</button>
            <button onClick={() => this.handleNumberClick('5')}>5</button>
            <button onClick={() => this.handleNumberClick('6')}>6</button>
            <button onClick={() => this.handleOperatorClick('-')}>-</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleNumberClick('1')}>1</button>
            <button onClick={() => this.handleNumberClick('2')}>2</button>
            <button onClick={() => this.handleNumberClick('3')}>3</button>
            <button onClick={() => this.handleOperatorClick('*')}>*</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleNumberClick('0')}>0</button>
            <button onClick={() => this.handleClearClick()}>C</button>
            <button onClick={() => this.handleEqualsClick()}>=</button>
            <button onClick={() => this.handleOperatorClick('/')}>/</button>
          </div>
        </div>
      </div>
      </center>
    );
  }
}

export default App;
