import React, { Component } from 'react';

class Clock extends Component {
  state = {
    time: new Date()
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }


  render() {
    return (
      <span>
        <span>{this.state.time.toLocaleTimeString()}</span>
      </span>
    );
  }
}

export default Clock;