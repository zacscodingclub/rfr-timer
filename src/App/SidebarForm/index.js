import React, { Component } from 'react';
import SidebarInput from '../SidebarInput';

class SidebarForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddExercise = this.handleAddExercise.bind(this);
  }

  handleAddExercise(e) {
    e.preventDefault();
    console.log('ADDING EXERCISE INPUT')
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('SUBMITTING WORKOUT')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Create Your Workout</h3>
        <SidebarInput />
        <div>
          <button onClick={this.handleAddExercise}>+ Add Exercise</button>
          <input type="submit" />
        </div>

      </form>
    );
  }
}

export default SidebarForm;
