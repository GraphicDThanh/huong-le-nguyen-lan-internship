import { useContext, useEffect } from 'react';
import { ThemeContext } from './ThemeProvider';

const Test = () => {
  const value = ['123', '2323'];
  const context = useContext(ThemeContext);
  const { data, setData } = context;

  useEffect(() => {
    // fetch
    setData(value);
  }, []);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export { Test };
