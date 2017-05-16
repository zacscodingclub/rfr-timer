import React, { Component } from 'react';
import SidebarForm from '../SidebarForm';
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
        <button onClick={this.props.handleSidebar}>Close X</button>
        <SidebarForm />
      </div>
    );
  }

  render() {
    return this.showSidebar()
  }
}

export default Sidebar;
