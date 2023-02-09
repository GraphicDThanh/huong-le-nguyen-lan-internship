import React from 'react';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('You clicked submit 1.');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type='submit'>Submit</button>
    </form>
  );
};

const FormElement = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('You clicked submit 2.');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type='submit'>Submit</button>
    </form>
  );
};

interface ToogleOn {
  isToggleOn: boolean;
}

class Toggle extends React.Component<{}, ToogleOn> {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    // Using arrow function in callback instead .bind(this)
    // return <button onClick={() => this.handleClick()}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>;
    return <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>;
  }
}

export { Form, FormElement, Toggle };
