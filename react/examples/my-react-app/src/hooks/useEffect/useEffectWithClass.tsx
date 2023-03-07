import React from 'react';

class ExampleWithClass extends React.Component<{}, { count: number }> {
  state = {
    count: 0,
  };

  componentDidMount() {
    const { count } = this.state;
    document.title = `You clicked ${count} times`;
  }

  componentDidUpdate() {
    const { count } = this.state;
    document.title = `You clicked ${count} times`;
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <p>You clicked {count} times</p>
        <button type='button' onClick={() => this.setState({ count: count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export { ExampleWithClass };
