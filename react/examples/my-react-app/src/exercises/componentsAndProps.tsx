import React from 'react';
// Rendering a Component
const FunctionAndClassComponents = (props: { name: string; age: number }) => {
  return (
    <h1>
      Hello, {props.name}, age {props.age}
    </h1>
  );
};

// Composing Components
const Welcome = (props: { name: string }) => {
  return <h1>Hello, {props.name}</h1>;
};

interface CommentProps extends UserInfoProps {
  text: string;
  date: string;
}

interface UserInfoProps {
  author: {
    avatarUrl: string;
    name: string;
  };
}

// Extracting Components
const Comment = (props: CommentProps) => {
  return (
    <div className='Comment'>
      <UserInfo {...props} />
      <div className='Comment-text'>{props.text}</div>
      <div className='Comment-date'>{props.date}</div>
    </div>
  );
};

const UserInfo = (props: UserInfoProps) => {
  return (
    <div className='UserInfo'>
      <Avatar {...props} />
      <div className='UserInfo-name'>{props.author.name}</div>
    </div>
  );
};

const Avatar = (props: UserInfoProps) => {
  return <img className='Avatar' src={props.author.avatarUrl} alt={props.author.name} />;
};

export { FunctionAndClassComponents, Welcome, Comment };
