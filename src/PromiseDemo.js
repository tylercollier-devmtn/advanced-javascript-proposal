import React, { Component } from 'react';
import fakeAxios from './fakeAxios';

class PromiseDemo extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    console.log('1')
    fakeAxios.get('https://swapi.co/api/people').then(response => {
      this.setState({ people: response.data })
      console.log('2')
    })
    console.log('3')
  }

  render() {
    const { people } = this.state;

    return (
      <div>
        <h1>Promise Demo</h1>
        <h2>People</h2>
        <ul>
          {people.map(person => {
            return <li key={person.id}>{person.name}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default PromiseDemo;