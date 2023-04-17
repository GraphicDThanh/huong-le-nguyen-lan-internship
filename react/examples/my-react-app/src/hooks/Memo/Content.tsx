import { memo } from 'react';

const Content = () => {
  console.log('a');

  return <div>Hello World!</div>;
};

export default memo(Content);
