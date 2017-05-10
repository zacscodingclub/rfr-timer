import React, { Component } from 'react';
import './Sidebar.css'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar" id="open-sidebar">
          <h2>It's a Sidebar</h2>
          <p>Some Input stuff here.</p>
          <a href="#">Close X</a>
      </div>
    );
  }
}

export default Sidebar;
