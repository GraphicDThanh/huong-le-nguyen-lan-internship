import { ReactNode } from 'react';

function Panel({ children }: { children: ReactNode }) {
  return <section className='panel'>{children}</section>;
}

export default Panel;
