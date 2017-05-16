import React, { Component } from 'react';

class SidebarInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: '',
      time: ''
    }
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="exercise">Exercise: </label>
          <input className="sidebar-input"
                 type="text"
                 placeholder="Which exercise?"
                 id="exercise"
          />
        </div>
        <div>
          <label htmlFor="exercise">Time: </label>
          <input className="sidebar-input"
                 type="text"
                 placeholder="How long?"
                 id="time"
          />
        </div>
      </div>
    );
  }
}

export default SidebarInput;
