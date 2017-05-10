import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div>
          <h2>Awesome Header</h2>
          <a href="#open-sidebar">Open Sidebar</a>
      </div>
    );
  }
}

export default Header;
