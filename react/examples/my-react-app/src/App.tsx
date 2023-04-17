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
import { BoxProvider } from 'hooks/Context2/BoxProvider';
import { ComponentBox } from 'hooks/Context2/ComponentBox';
import { BoxProvider2 } from 'hooks/Context3/BoxProvider';
import { ComponentBox2 } from 'hooks/Context3/ComponentBox';
import { WrapperProvider } from 'hooks/Context3/WrapperProvider';
import { Box } from 'hooks/Context4/Box';
import { Provider } from 'hooks/Context4/Provider';
import { ContainerAPI } from 'hooks/ExampleFetchAPI/ContainerAPI';
import { Container } from 'hooks/Memo/Container';
import { Example } from 'hooks/state';
import { ExampleUseCallback } from 'hooks/UseCallback/ExampleUseCallback';
import { Count } from 'hooks/useEffect/useEffect';
import { ExampleUseMemo } from 'hooks/UseMemo/ExampleUseMemo';
import { ExampleReducer } from 'hooks/useReducer/exampleReducer';
import { TodoList } from 'hooks/useReducer/todo';
import { TextInputWithFocusButton, UseRefDemo, UseRefTest } from 'hooks/UseRef/useRef';
import './App.css';
import ErrorBoundary from 'advanced/errorBoundary/ErrorBoundary';
import ComponentsTest from 'advanced/errorBoundary/ComponentTest';
import WordAdder from 'advanced/WordsAdder';
import TaskApp from 'advanced/reducer/Todo';
import PageContext from 'advanced/context/PageContext';
import AlbumArtist from 'advanced/suspense/AlbumArtist';
import BoxSearch from 'advanced/suspenseSearch/BoxSearch';
import BoxApp from 'advanced/suspenseHidingContents/SuspenseHidingContent';

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
      <ErrorBoundary fallback={<h1>Something wrong!</h1>}>
        <ComponentsTest />
      </ErrorBoundary>
      <WordAdder />
      <br />
      <br />
      <TaskApp />
      <br />
      <br />
      <br />
      <PageContext />
      <br />
      <br />
      <br />
      <h1>Advanced</h1>
      <br />
      <AlbumArtist />
      <br />
      <br />
      <BoxSearch />
      <br />
      <br />
      <br />
      <hr />
      <BoxApp />
      <br />
      <br />
      <hr />
      <p>Calculator</p>
      <Calculator />
      <br />
      <TemperatureInput scale='p' />
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
      <UseRefDemo />
      <TextInputWithFocusButton />
      <UseRefTest />
      <br />
      <br />
      <Container />
      <br />
      <br />
      <ExampleUseCallback />
      <br />
      <br />
      <ExampleUseMemo />
      <br />
      <br />
      <ExampleReducer />
      <br />
      <br />
      <TodoList />
      <br />
      <br />
      <br />
      <br />
      <BoxProvider>
        <ComponentBox />
      </BoxProvider>
      <br />
      <br />
      <br />
      <br />
      <WrapperProvider>
        <BoxProvider2>
          <ComponentBox2 />
        </BoxProvider2>
      </WrapperProvider>
      <br />
      <br />
      <br />
      <Provider>
        <Box />
      </Provider>
      <ContainerAPI />
    </div>
  );
}

export default App;
