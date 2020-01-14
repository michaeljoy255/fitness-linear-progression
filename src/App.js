import React, { Component } from 'react';
import HomeHeader from './components/HomeHeader'
import Routines from './components/Routines'

import './App.css';

class App extends Component {
  state = {
    exercises: null
  }

  render() {
    return (
      <div className="App">
        <h1>App!</h1>
        <HomeHeader />
        <Routines />
      </div>
    );
  }
}

export default App;
