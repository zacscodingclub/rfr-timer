import React, { Component } from 'react';
import Header from './Header';
import ClockContainer from './ClockContainer';
import Sidebar from './Sidebar';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercises: [],
      currentExercise: null,
      totalTime: null,
      currentExerciseTime: null
    }
  }

  render() {
    return (
      <div className="content App">
        <Header />
        <ClockContainer />
        <Sidebar />
      </div>
    );
  }
}

export default App;
