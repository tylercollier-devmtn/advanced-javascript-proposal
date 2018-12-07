import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      num1: '',
      num2: '',
      result: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { num1, num2 } = this.state;
    const biggest = this.getBiggest(num1, num2);
    this.setState({ result: `The biggest is ${biggest}`});
  }

  getBiggest(a, b) {
    // Your code goes here
  }

  render() {
    const { num1, num2, result } = this.state;

    return (
      <div>
        <h1>Which is bigger?</h1>
        <div>
          <div>
            Num 1: <input
              value={num1}
              onChange={event => this.setState({ num1: event.target.value })}
            />
          </div>
          <div>
            Num 2: <input
              value={num2}
              onChange={event => this.setState({ num2: event.target.value })}
            />
          </div>
          <div><button onClick={this.handleClick}>Get biggest</button></div>
          <div>{result}</div>
        </div>
      </div>
    );
  }
}

export default App;
