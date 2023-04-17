import { Suspense, lazy, startTransition, useState } from 'react';

const OtherComponent = lazy(() => import('./OtherComponent'));
const AnotherComponent = lazy(() => import('./AnotherComponent'));

const MyComponent = () => {
  const [tab, setTab] = useState(true);

  const handleTabSelect = () => {
    startTransition(() => {
      setTab((prev) => !prev);
    });
  };

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section>{tab ? <OtherComponent /> : <AnotherComponent />}</section>
      </Suspense>
      <button type='button' onClick={handleTabSelect}>
        Change
      </button>
    </div>
  );
};

export default MyComponent;
