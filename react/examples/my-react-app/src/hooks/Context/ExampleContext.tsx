import { useContext } from 'react';
import { Content } from './Content';
import { ThemeContext } from './ThemeProvider';

const ExampleContext = () => {
  const context = useContext(ThemeContext);
  const { toggleTheme } = context;

  return (
    <div>
      <button type='button' onClick={toggleTheme}>
        Toggle
      </button>
      <Content />
    </div>
  );
};

export { ExampleContext };
