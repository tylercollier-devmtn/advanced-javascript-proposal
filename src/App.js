import React, { Component } from 'react';
import './App.css';
import TryCatchDemo from './TryCatchDemo';
import PromiseDemo from './PromiseDemo';

class App extends Component {
  render() {
    return (
      <div>
        {/* <TryCatchDemo /> */}
        <PromiseDemo />
      </div>
    )
  }
}

export default App;
