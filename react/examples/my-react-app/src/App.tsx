import { FunctionAndClassComponents, Welcome } from 'exercises/componentsAndProps';
import { SignUpDialog } from 'exercises/compositionVSInheritance';
import { Greeting, LoginControl, Mailbox } from 'exercises/conditionalRendering';
import NameForm from 'exercises/form1';
import EssageForm from 'exercises/form2';
import FlavorForm from 'exercises/form3';
import FileInput from 'exercises/form4';
import Reservation from 'exercises/form5';
import { Form, FormElement, Toggle } from 'exercises/handlingEvents';
import {
  EmbeddingExpressionJSX,
  RepresentsObjects,
  SpecifyingChildrenWithJSX,
} from 'exercises/introducingJSX';
import { Blog, NumberList, TodoTasks } from 'exercises/keys';
import Calculator from 'exercises/liftingStateUp';
import { TemperatureInput } from 'exercises/liftingStateUp2';
import Number from 'exercises/listsAndKeys';
import Page from 'exercises/preventingComponentFromRendering';
import Tick from 'exercises/renderingElements';
import { Clock, Clocks } from 'exercises/stateAndLifecycle';
import { ExampleContext } from 'hooks/Context/ExampleContext';
import { ThemeProvider } from 'hooks/Context/ThemeProvider';
import { Example } from 'hooks/state';
import { Count } from 'hooks/useEffect';
import './App.css';

function App() {
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
      <p>Calculator</p>
      <Calculator />
      <br />
      <TemperatureInput scale='c' />
      <TemperatureInput scale='f' />
      <br />
      <SignUpDialog />
      <EmbeddingExpressionJSX />
      <SpecifyingChildrenWithJSX />
      <RepresentsObjects />
      <Tick />
      <FunctionAndClassComponents name='abc' age={123} />
      <Welcome name='Sara' />
      <Welcome name='Cahal' />
      <Welcome name='Edite' />
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
      <h1>HOOKS</h1>
      <Example />
      <Count />
      <ThemeProvider>
        <ExampleContext />
      </ThemeProvider>
    </div>
  );
}

export default App;
