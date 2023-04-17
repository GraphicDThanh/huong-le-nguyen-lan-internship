import { Component } from 'react';

interface Props {
  color: string;
}

interface State {
  count: number;
}

class CounterButton extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { count: 1 };
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    const { color } = this.props;
    const { count } = this.state;

    if (color !== nextProps.color) {
      return true;
    }
    if (count !== nextState.count) {
      return true;
    }
    return false;
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

export default CounterButton;
