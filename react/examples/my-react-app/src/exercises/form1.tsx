import React from 'react';

// Controlled Components
class NameForm extends React.Component<{}, { value: string }> {
  state = { value: '' };

  handleChange(e: React.FormEvent<HTMLElement>) {
    this.setState({
      value: (e.target as HTMLInputElement).value,
    });
  }

  handleSubmit(e: React.FormEvent<HTMLElement>) {
    alert('Name was submitted ' + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>Name:</label>
        <input type='text' value={this.state.value} onChange={(e) => this.handleChange(e)} />
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default NameForm;
