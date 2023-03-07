import { useEffect, useState } from 'react';

function ExampleWithHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button type='button' onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

const FriendStatus = (props: { friend: { id: string } }) => {
  const [count, setCount] = useState(0);
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
};

export { ExampleWithHook, FriendStatus };
