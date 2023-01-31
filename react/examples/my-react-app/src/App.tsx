import React from 'react';
import { FunctionAndClassComponents, Welcome } from './exercises/componentsAndProps';
import {
  EmbeddingExpressionJSX,
  SpecifyingChildrenWithJSX,
  RepresentsObjects,
} from './exercises/introducingJSX';
import Tick from './exercises/renderingElements';
import { Comment } from './exercises/componentsAndProps';
import { Clock, Clocks } from './exercises/stateAndLifecycle';
import { Form, FormElement, Toggle } from './exercises/handlingEvents';

function App() {
  const data = {
    author: {
      avatarUrl: 'https://i.stack.imgur.com/ONspp.png',
      name: 'Sara',
    },
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    date: new Date().toLocaleString(),
  };

  return (
    <div className='App'>
      <EmbeddingExpressionJSX />
      <SpecifyingChildrenWithJSX />
      <RepresentsObjects />
      <Tick />
      <FunctionAndClassComponents name='abc' age={123} />
      <Welcome name='Sara' />
      <Welcome name='Cahal' />
      <Welcome name='Edite' />
      <Comment {...data} />
      <Clock />
      <Form />
      <FormElement />
      <Toggle />
      <Clocks />
    </div>
  );
}

export default App;
