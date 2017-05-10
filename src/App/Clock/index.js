import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date()
    }

    this.updateTime = this.updateTime.bind(this);
    this.formatTime = this.formatTime.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date()
      });
    });
  }

  updateTime() {
    setTimeout(() => {
      this.setState({
        time: new Date()
      })
    }, 1000);
  }

  formatTime() {
    let hours = this.state.time.getHours().toString().length < 2 ? `0${this.state.time.getHours()}` : this.state.time.getHours();
    let minutes = this.state.time.getMinutes().toString().length < 2 ? `0${this.state.time.getMinutes()}` : this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds().toString().length < 2 ? `0${this.state.time.getSeconds()}` : this.state.time.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  }

  render() {
    return (
      <div className="Clock">
          <h2>{this.formatTime()}</h2>
      </div>
    );
  }
}

export default Clock;
