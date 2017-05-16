import React, { Component } from 'react';
import SidebarInput from '../SidebarInput';

class SidebarForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: [0],
      nextInputId: 1
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddExercise = this.handleAddExercise.bind(this);
    this.appendExercise = this.appendExercise.bind(this);
  }

  handleAddExercise(e) {
    const inputId = this.state.nextInputId;
    this.appendExercise(inputId);
    this.setState({
      inputs: [...this.state.inputs, inputId],
      nextInputId: this.state.nextInputId++
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    console.log('SUBMITTING WORKOUT')
  }

  appendExercise(id) {
    return <SidebarInput inputId={id} />
  }

  validateForm() {
    // get all inputs: e.target.querySelectorAll('.input-div')
    // get id from that input: input.lastChild.id
    // get value from that input: input.lastChild.value
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Build Your Workout</h3>
        <SidebarInput inputId="0" />
        <div>
          <button onClick={this.handleAddExercise}>+ Add Exercise</button>
          <input type="submit" />
        </div>

      </form>
    );
  }
}

export default SidebarForm;
