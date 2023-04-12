import { useState, useRef } from 'react';
import { useFadeIn } from './useFadeIn';

const Welcome = () => {
  const ref = useRef<HTMLDivElement>(null);

  useFadeIn(ref, 1000);

  return (
    <h1 className='welcome' ref={ref}>
      Welcome
    </h1>
  );
};

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button type='button' onClick={() => setShow(!show)}>
        {show ? 'Remove' : 'Show'}
      </button>
      <hr />
      {show && <Welcome />}
    </>
  );
}
