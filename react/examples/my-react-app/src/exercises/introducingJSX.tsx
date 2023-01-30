import React from 'react';

interface User {
  firstName: string;
  lastName: string;
}

const EmbeddingExpressionJSX = () => {
  const formatName = (user: User) => {
    return user.firstName + ' ' + user.lastName;
  };

  const user = {
    firstName: 'Harper',
    lastName: 'Perez',
  };

  // JSX is an Expression Too
  const getGreeting = (user?: User) => {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  };

  return getGreeting();
};

// Specifying Children with JSX
const SpecifyingChildrenWithJSX = () => {
  const avatarUrl = 'https://i.stack.imgur.com/ONspp.png';
  const elementImg = <img src={avatarUrl} />;
  const element = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you here.</h2>
    </div>
  );

  return element;
};

// JSX Prevents Injection Attacks
const PreventsInjectionAttacks = () => {
  const title = response.potentiallyMaliciousInput as string;
  // This is safe:
  const element = <h1>{title}</h1>;
};

// JSX Represents Objects
const RepresentsObjects = () => {
  return <h1 className='greeting'>Hello, world!</h1>;
};

export { EmbeddingExpressionJSX, SpecifyingChildrenWithJSX, RepresentsObjects };
