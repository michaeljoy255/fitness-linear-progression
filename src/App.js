import React, { Component } from 'react';
import MainHeader from './components/MainHeader'
import Routines from './components/Routines'
import './App.css';

class App extends Component {
  state = {
    // add state for app here! (training video @ 23:00)
  }

  render() {
    return (
      <div className="App">
        <h1>App!</h1>
        <MainHeader />
        <Routines />
      </div>
    );
  }
}

export default App;
