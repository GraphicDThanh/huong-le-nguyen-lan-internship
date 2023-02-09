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
import { Greeting, LoginControl, Mailbox } from './exercises/conditionalRendering';
import Page from './exercises/preventingComponentFromRendering';
import Number from './exercises/listsAndKeys';
import { TodoTasks, NumberList, Blog } from './exercises/keys';
import NameForm from './exercises/form1';
import EssageForm from './exercises/form2';
import FlavorForm from './exercises/form3';
import FileInput from './exercises/form4';
import Reservation from './exercises/form5';
import ControlledInput from './exercises/form6';

import Calculator from './exercises/liftingStateUp';
import { TemperatureInput } from './exercises/liftingStateUp2';
import { WelcomeDialog, SignUpDialog } from './exercises/compositionVSInheritance';

function App() {
  const data = {
    author: {
      avatarUrl: 'https://i.stack.imgur.com/ONspp.png',
      name: 'Sara',
    },
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    date: new Date().toLocaleString(),
  };

  const messages = ['React', 'Re: React', 'Re:Re: React'];
  const numbers = [1, 2, 3, 4, 5];
  const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' },
  ];
  const flavors = [
    {
      value: 'grapefruit',
      name: 'Grapefruit',
    },
    {
      value: 'lime',
      name: 'Lime',
    },
    {
      value: 'coconut',
      name: 'Coconut',
    },
    {
      value: 'mango',
      name: 'Mango',
    },
  ];

  return (
    <div className='App'>
      <label htmlFor=''>Calculator</label>
      <Calculator />
      <br />
      <TemperatureInput scale='c' />
      <TemperatureInput scale='f' />
      <br />
      <WelcomeDialog />
      <SignUpDialog />
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
      <Greeting isLoggedIn={false} />
      <LoginControl />
      <Mailbox unreadMessages={messages} />
      <Page />
      <Number numbers={numbers} />
      <TodoTasks />
      <NumberList numbers={numbers} />
      <Blog posts={posts} />
      <NameForm />
      <EssageForm />
      <br />
      <FlavorForm flavor={flavors} />
      <br />
      <FileInput />
      <br />
      <Reservation />
      {setTimeout(() => {
        <ControlledInput />;
      }, 1000)}    </div>
  );
}

export default App;
