import { PureComponent } from 'react';

interface Props {
  words: string[];
}

class ListOfWords extends PureComponent<Props> {
  render() {
    const { words } = this.props;
    return <div>{words.join(',')}</div>;
  }
}

export default ListOfWords;
