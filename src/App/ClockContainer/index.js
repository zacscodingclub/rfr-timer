import React, { Component } from 'react';
import Clock from '../Clock';

import './ClockContainer.css'

class ClockContainer extends Component {
  render() {
    return (
      <div className="ClockContainer">
          <h2>Tick Tock</h2>
          <Clock />
      </div>
    );
  }
}

export default ClockContainer;
