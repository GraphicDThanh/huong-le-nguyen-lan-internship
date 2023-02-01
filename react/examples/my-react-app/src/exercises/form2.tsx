import React from 'react';

// The textarea Tag
class EssageForm extends React.Component<{}, { value: string }> {
  state = { value: 'Please write an essay about your favorite DOM element.' };

  handleChange(e: React.FormEvent<HTMLElement>) {
    this.setState({
      value: (e.target as HTMLInputElement).value,
    });
  }

  handleSubmit(e: React.FormEvent<HTMLElement>) {
    alert('An essay was submitted: ' + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>Eassy:</label>
        <textarea value={this.state.value} onChange={(e) => this.handleChange(e)} />
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default EssageForm;
