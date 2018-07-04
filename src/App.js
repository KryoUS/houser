import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';
import House from './components/House/House';

class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
          <House />
        <Wizard />
      </div>
    );
  }
}

export default App;
