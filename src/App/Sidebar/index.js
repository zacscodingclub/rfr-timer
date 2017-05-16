import React, { Component } from 'react';
import SidebarForm from '../SidebarForm';
import './Sidebar.css'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar" id="open-sidebar">
        <a href="#">Close X</a>
        <SidebarForm />
      </div>
    );
  }
}

export default Sidebar;
