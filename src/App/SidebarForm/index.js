import React, { Component } from 'react';
import SidebarInput from '../SidebarInput';

class SidebarForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputCount: 1
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddExercise = this.handleAddExercise.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleAddExercise(e) {
    this.setState({
      inputCount: this.state.inputCount + 1
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let exercises = [...e.target.querySelectorAll('.exercise-div')];

    this.parseForm(exercises);
  }

  validateForm(values) {
    let isValid = true

    values.forEach(value => {
      const invalidInput = (value.name === "" || value.time === "");
      if(invalidInput) {
        isValid = false;
      };
    });

    return isValid;
  }

  parseForm(elements) {
    const values = elements.map((el) => {
      return {
        name: el.querySelector('#exercise').value,
        time: el.querySelector('#time').value
      }
    });

    if(this.validateForm(values)) {
      console.log("send values up");
    } else {
      console.log("there were some errors");
    }
  }

  render() {
    const children = [];
    for (let i = 0; i < this.state.inputCount; i++) {
      children.push(<SidebarInput inputId={i} key={i} />);
    };

    return (
      <div>
        <button onClick={this.handleAddExercise}>+ Add Exercise</button>
        <form onSubmit={this.handleSubmit}>
          <h3>Build Your Workout</h3>
          {children}
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default SidebarForm;
