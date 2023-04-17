import { PureComponent } from 'react';

interface Props {
  color: string;
}

interface State {
  count: number;
}

class CounterButton2 extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { count: 1 };
  }

  render() {
    const { color } = this.props;
    const { count } = this.state;

    return (
      <button
        type='button'
        color={color}
        onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
      >
        Count: {count}
      </button>
    );
  }
}

export default CounterButton2;
