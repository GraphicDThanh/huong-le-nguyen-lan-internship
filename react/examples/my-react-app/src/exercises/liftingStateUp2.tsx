import React from 'react';

// Adding a Second Input
interface Props {
  scale: string;
  temperature?: string;
  onTemperatureChange?: (string) => void;
}

interface State {
  temperature: string;
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

class TemperatureInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { temperature: '' };
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.onTemperatureChange!(e.target.value);
  }

  render() {
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
        <input value={this.props.temperature} onChange={(e) => this.handleChange(e)} />
      </fieldset>
    );
  }
}

// Writing Conversion Functions
const toCelsius = (fahrenheit: number) => {
  return ((fahrenheit - 32) * 5) / 9;
};

const toFahrenheit = (celsius: number) => {
  return (celsius * 9) / 5 + 32;
};

const tryConvert = (temperature, convert: (number) => number) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};

tryConvert('abc', toCelsius);
tryConvert('10.22', toFahrenheit);

export { TemperatureInput, tryConvert, toCelsius, toFahrenheit };
