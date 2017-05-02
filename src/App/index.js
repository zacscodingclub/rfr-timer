import React, { Component } from 'react';
import Header from './Header';
import Clock from './Clock';
import ExerciseSidebar from './ExerciseSidebar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Clock />
        <ExerciseSidebar />
      </div>
    );
  }
}

export default App;
