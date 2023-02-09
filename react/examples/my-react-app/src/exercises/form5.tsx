import React from 'react';

// Handling Multiple Inputs
interface State {
  isGoing: boolean | string;
  numberOfGuests: string | boolean;
}

class Reservation extends React.Component<{}, State> {
  state = {
    isGoing: true,
    numberOfGuests: 2,
  };

  handleInputChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log('name', name);
    console.log('value', value);

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <label>Is going:</label>
        <input
          name='isGoing'
          type='checkbox'
          checked={this.state.isGoing}
          onChange={(e) => this.handleInputChange(e)}
        />
        <br />
        <label>Number of guests:</label>
        <input
          name='numberOfGuests'
          type='number'
          value={this.state.numberOfGuests}
          onChange={(e) => this.handleInputChange(e)}
        />
      </form>
    );
  }
}

export default Reservation;
