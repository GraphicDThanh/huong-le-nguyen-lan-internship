import { Component } from 'react';
import ListOfWords from './ListOfWords';

interface State {
  words: string[];
}

class WordAdder extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      words: ['marklar'],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This section is bad style and causes a bug
    const { words } = this.state;
    words.push('marklar');
    this.setState({ words });
  }

  render() {
    const { words } = this.state;

    return (
      <div>
        <button type='button' onClick={this.handleClick}>
          Add
        </button>
        <ListOfWords words={words} />
      </div>
    );
  }
}

export default WordAdder;
