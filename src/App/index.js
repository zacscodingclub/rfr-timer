import React, { Component } from 'react';
import Header from './Header';
import ClockContainer from './ClockContainer';
import Sidebar from './Sidebar';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allExercises: [],
      totalTime: null,
      currentExercise: null,
      currentExerciseTime: null,
      sidebarOpen: false
    }

    this.handleSidebar = this.handleSidebar.bind(this);
  }

  handleSidebar() {
    this.setState(prevState => ({
      sidebarOpen: !prevState.sidebarOpen
    }));
  }

  render() {
    return (
      <div className="content">
        <Header
          isOpen={this.state.sidebarOpen}
          handleSidebar={this.handleSidebar}/>
        <ClockContainer />
        <Sidebar
          isOpen={this.state.sidebarOpen}
          handleSidebar={this.handleSidebar}/>
      </div>
    );
  }
}

export default App;
