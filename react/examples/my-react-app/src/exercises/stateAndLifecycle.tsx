import React from 'react';

// Adding Lifecycle Methods to a Class
interface State {
  date: Date;
}

interface Props {
  name: string;
}

class Clock extends React.Component<{}, State> {
  timerID: number;

  constructor(props: Props) {
    super(props);
    this.state = { date: new Date() };
    this.timerID = 0;
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

class Clocks extends React.Component<{}, State> {
  state = { date: new Date() };
  timerID = 0;

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world 2!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export { Clock, Clocks };
