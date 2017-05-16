import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div>
        <h2>RFR.</h2>
        <button onClick={this.props.handleSidebar}>
          {this.props.isOpen ? "Close" : "Open"} Sidebar
        </button>
      </div>
    );
  }
}

export default Header;
