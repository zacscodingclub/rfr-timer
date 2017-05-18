import React, { Component } from 'react';
import './SidebarInput.css';

class SidebarInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: '',
      time: ''
    }

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="input-div">
          <label htmlFor="exercise">Exercise #{this.props.inputId + 1}: </label>
            <input className="sidebar-input"
                   type="text"
                   placeholder="Which exercise?"
                   id="exercise"
                   name="exercise"
                   onChange={this.handleOnChange}
            />
        </div>
        <div className="input-div">
          <label htmlFor="time">Time:</label>
          <input className="sidebar-input"
                 type="text"
                 placeholder="How long?"
                 id="time"
                 name="time"
                 onChange={this.handleOnChange}
          />
        </div>
      </div>
    );
  }
}

export default SidebarInput;
