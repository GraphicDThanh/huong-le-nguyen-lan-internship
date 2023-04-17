import { useEffect, useRef, useState } from 'react';

const UseRefDemo = () => {
  const [count, setCount] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const timerId = useRef(0);

  const handleStart = () => {
    if (!isRunning) {
      timerId.current = window.setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);

      setIsRunning(true);
    }
  };

  const handleStop = () => {
    if (isRunning) {
      clearInterval(timerId.current);
      setIsRunning(false);
    }
  };

  return (
    <div>
      <p>{count}</p>
      <button type='button' onClick={handleStart}>
        Start
      </button>
      <button type='button' onClick={handleStop}>
        Stop
      </button>
    </div>
  );
};

const TextInputWithFocusButton = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  const onButtonClick = () => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  };

  return (
    <>
      <input ref={inputEl} type='text' />
      <button type='button' onClick={onButtonClick}>
        Focus the input
      </button>
    </>
  );
};

const UseRefTest = () => {
  const countRef = useRef(0);

  useEffect(() => {
    const timeId = setInterval(() => {
      countRef.current += 1;
    }, 1000);

    return () => clearInterval(timeId);
  }, []);

  return <button type='button'>CLick Button</button>;
};

export { UseRefDemo, TextInputWithFocusButton, UseRefTest };
