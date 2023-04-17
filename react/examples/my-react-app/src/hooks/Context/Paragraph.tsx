import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const Paragraph = () => {
  const context = useContext(ThemeContext);
  const { theme } = context;

  return (
    <p className={`${theme}`}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, asperiores officiis!
      Cumque ipsa perferendis repudiandae veritatis velit quam dolore quidem accusamus porro error
      unde blanditiis, voluptates, neque assumenda ad magni?
    </p>
  );
};

export { Paragraph };
