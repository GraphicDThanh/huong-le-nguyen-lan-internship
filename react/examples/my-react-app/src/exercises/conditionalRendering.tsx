import React from 'react';

interface Props {
  isLoggedIn: boolean;
}

const UserGreeting = () => {
  return <h1>Welcome back!</h1>;
};

const GuestGreeting = () => {
  return <h1>Please sign up.</h1>;
};

const Greeting = (props: Props) => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};

// Element Variables
interface State {
  isLoggedIn: boolean;
}

interface ButtonProps {
  onClick: () => void;
}

const LoginButton = (props: ButtonProps) => {
  return <button onClick={props.onClick}>Login</button>;
};

const LogoutButton = (props: ButtonProps) => {
  return <button onClick={props.onClick}>Logout</button>;
};

class LoginControl extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        <div>
          {isLoggedIn ? (
            <LogoutButton onClick={this.handleLogoutClick} />
          ) : (
            <LoginButton onClick={this.handleLoginClick} />
          )}
        </div>
      </div>
    );
  }
}

interface MailBoxProps {
  unreadMessages: string[];
}

const Mailbox = (props: MailBoxProps) => {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hi!</h1>
      {unreadMessages.length > 0 && <h2>You have {unreadMessages.length} unread messages.</h2>}
    </div>
  );
};

export { Greeting, LoginControl, Mailbox };
