import React, { Component } from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>

          <CounterContainer/>

      </div>
    );
  }
}

export default App;
