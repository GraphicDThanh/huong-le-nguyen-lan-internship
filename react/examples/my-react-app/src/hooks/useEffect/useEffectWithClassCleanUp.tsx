import React from 'react';

class FriendStatus extends React.Component<{ friend: { id: string } }, { isOnline: string }> {
  constructor(props: { friend: { id: string } }) {
    super(props);
    this.state = { isOnline: '' };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    const { friend } = this.props;
    ChatAPI.subscribeToFriendStatus(friend.id, this.handleStatusChange);
  }

  componentWillUnmount() {
    const { friend } = this.props;
    ChatAPI.unsubscribeFromFriendStatus(friend.id, this.handleStatusChange);
  }

  handleStatusChange(status) {
    this.setState({
      isOnline: status.isOnline,
    });
  }

  render() {
    const { isOnline } = this.state;
    if (!isOnline) {
      return 'Loading...';
    }
    return isOnline ? 'Online' : 'Offline';
  }
}

export { FriendStatus };
