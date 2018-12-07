import React, { Component } from 'react';
import './App.css';
import myMathLib from './myMathLib'

class App extends Component {
  constructor() {
    super();
    this.state = {
      num1: '',
      num2: '',
      result: '',
      isLoading: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isLoading: true });
    // Simulate this taking a while so we can see the loading message.
    setTimeout(() => {
      const { num1, num2 } = this.state;
      try {
        const biggest = this.getBiggest(num1, num2);
        this.setState({ result: `The biggest is ${biggest}`});
      } catch (error) {
        this.setState({ result: error.message })
      } finally {
        this.setState({ isLoading: false });
      }
    }, 500);
  }

  getBiggest(a, b) {
    return myMathLib.getBiggest(a, b);
  }

  render() {
    const { num1, num2, result, isLoading } = this.state;

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
          {isLoading && <div>Loading...</div>}
        </div>
      </div>
    );
  }
}

export default App;
