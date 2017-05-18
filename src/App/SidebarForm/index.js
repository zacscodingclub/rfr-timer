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
  }

  handleAddExercise(e) {
    this.setState({
      inputCount: this.state.inputCount + 1
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    console.log('SUBMITTING WORKOUT')
  }

  validateForm() {
    // get all inputs: e.target.querySelectorAll('.input-div')
    // get id from that input: input.lastChild.id
    // get value from that input: input.lastChild.value
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
