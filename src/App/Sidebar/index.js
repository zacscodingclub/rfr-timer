import React, { Component } from 'react';
import './Sidebar.css'

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.showSidebar = this.showSidebar.bind(this);
  }

  showSidebar() {
    if (!this.props.isOpen) { return null; }
    const componentClasses = ['sidebar','open-sidebar'];

    return (
      <div className={componentClasses.join(' ')}>
        <h2>It's a Sidebar</h2>
        <p>Some Input stuff here.</p>
        <button onClick={this.props.handleSidebar}>Close X</button>
      </div>
    );
  }

  render() {
    return this.showSidebar()
  }
}

export default Sidebar;
