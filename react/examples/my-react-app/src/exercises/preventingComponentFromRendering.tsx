import React from 'react';

interface State {
  showWarning: boolean;
}

const WarningBanner = (props: { warn: boolean }) => {
  if (!props.warn) {
    return null;
  }

  return <div className='warning'>Warning!</div>;
};

class Page extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((state) => ({
      showWarning: !state.showWarning,
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>{this.state.showWarning ? 'Hide' : 'Show'}</button>
      </div>
    );
  }
}

export default Page;
