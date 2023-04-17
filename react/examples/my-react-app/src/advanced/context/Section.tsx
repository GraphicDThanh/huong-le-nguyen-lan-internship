import { ReactNode, useContext } from 'react';
import { LevelContext } from './LevelContext';

interface Props {
  isFancy?: boolean;
  children: ReactNode;
}

export default function Section({ children, isFancy }: Props) {
  const level = useContext(LevelContext);

  return (
    <section className={`section ${isFancy ? 'fancy' : ''}`}>
      <LevelContext.Provider value={level + 1}>{children}</LevelContext.Provider>
    </section>
  );
}
