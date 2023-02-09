import React from 'react';
import { TemperatureInput, toCelsius, toFahrenheit, tryConvert } from './liftingStateUp2';

const BoilingVerdict = (props: { celsius: number }) => {
  if (props.celsius >= 100) {
    return <p>The water should boil</p>;
  } else {
    return <p>The water would not boil</p>;
  }
};

class Calculator extends React.Component<{}, { temperature: string; scale: string }> {
  state = { temperature: '', scale: 'c' };

  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature });
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;

    return (
      <div>
        <TemperatureInput
          scale='c'
          temperature={scale === 'f' ? tryConvert(temperature, toCelsius) : temperature}
          onTemperatureChange={(temperature) => this.handleCelsiusChange(temperature)}
        />
        <TemperatureInput
          scale='f'
          temperature={scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature}
          onTemperatureChange={(temperature) => this.handleFahrenheitChange(temperature)}
        />
        <BoilingVerdict
          celsius={parseFloat(scale === 'f' ? tryConvert(temperature, toCelsius) : temperature)}
        />
      </div>
    );
  }
}

export default Calculator;
