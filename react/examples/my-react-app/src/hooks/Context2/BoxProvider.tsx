import { createContext, ReactNode, useCallback, useMemo, useState } from 'react';

interface ValueType {
  changeColor: string;
  text?: string;
  handleChangeColor?: () => void;
  handleSetText?: () => void;
}

const BoxContext = createContext<ValueType>({
  changeColor: 'red',
  text: 'Hello World',
});

const BoxProvider = ({ children }: { children: ReactNode }) => {
  const [changeColor, setChangeColor] = useState('wheat');
  const [text, setText] = useState('Hello World');

  const handleChangeColor = useCallback(() => {
    setChangeColor(changeColor === 'wheat' ? 'red' : 'wheat');
  }, [changeColor]);
  const handleSetText = useCallback(() => {
    setText(text === 'Hello World' ? 'Text 1' : 'Hello World');
  }, [text]);

  const value = useMemo(
    () => ({
      changeColor,
      handleChangeColor,
      text,
      handleSetText,
    }),
    [handleChangeColor, changeColor, text, handleSetText],
  );

  return <BoxContext.Provider value={value}>{children}</BoxContext.Provider>;
};

export { BoxProvider, BoxContext };
