import React from 'react';

// The select Tag
interface Props {
  value: string;
  name: string;
}

class FlavorForm extends React.Component<{ flavor: Props[] }, { value: string }> {
  constructor(props: { flavor: Props[] }) {
    super(props);
    this.state = { value: 'coconut' };
  }

  handleChange(e: React.FormEvent<HTMLElement>) {
    this.setState({
      value: (e.target as HTMLInputElement).value,
    });
  }

  handleSubmit(e: React.FormEvent<HTMLElement>) {
    alert('You picked ' + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>Pick your favorite flavor:</label>
        <select value={this.state.value} onChange={(e) => this.handleChange(e)}>
          {this.props.flavor.map((item) => (
            <option value={item.value}>{item.name}</option>
          ))}
        </select>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default FlavorForm;
