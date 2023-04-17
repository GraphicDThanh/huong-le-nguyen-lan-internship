import React from 'react';

// Containment
interface Props {
  color: string;
  children: React.ReactNode;
}

const FancyBorder = (props: Props) => {
  return <div className={'fancy-border fancy-border-' + props.color}>{props.children}</div>;
};

const WelcomeDialog = () => {
  return (
    <FancyBorder color='blue'>
      <h1 className='Dialog-title'>Welcome</h1>
      <p className='Dialog-message'>Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  );
};

interface DialogProps {
  title: string;
  message: string;
  children: React.ReactNode;
}

const Dialog = (props: DialogProps) => {
  return (
    <FancyBorder color='blue'>
      <h1 className='Dialog-title'>{props.title}</h1>
      <p className='Dialog-message'>{props.message}</p>
      {props.children}
    </FancyBorder>
  );
};

class SignUpDialog extends React.Component<{}, { login: string }> {
  state = { login: '' };

  render() {
    return (
      <Dialog title='Mars Exploration Program' message='How should we refer to you?'>
        <input value={this.state.login} onChange={(e) => this.handleChange(e)} />
        <button onClick={() => this.handleSignUp()}>Sign Me Up!</button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}

export { WelcomeDialog, SignUpDialog };
