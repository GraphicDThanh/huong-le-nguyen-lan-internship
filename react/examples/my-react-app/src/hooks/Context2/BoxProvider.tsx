import { createContext, ReactNode, useCallback, useMemo, useReducer } from 'react';

interface ValueType {
  changeColor?: string;
  text?: string;
}

interface ContextType extends ValueType {
  handleChangeColor?: () => void;
  handleSetText?: () => void;
}

const BoxContext = createContext<ContextType>({
  changeColor: 'red',
  text: 'Hello World',
});

const initState = {
  changeColor: 'wheat',
  text: '',
};

const CHANGE_COLOR = 'change-color';
const CHANGE_TEXT = 'change-text';

const reducer = (state: ValueType, actions: string) => {
  const { changeColor, text } = state;

  switch (actions) {
    case CHANGE_COLOR:
      return { ...state, changeColor: changeColor === 'wheat' ? 'red' : 'wheat' };
    case CHANGE_TEXT:
      return { ...state, text: text === 'Hello World' ? 'Text 1' : 'Hello World' };
    default:
      throw new Error('Invalid action');
  }
};

const BoxProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { changeColor, text } = state;
  const handleChangeColor = useCallback(() => {
    dispatch(CHANGE_COLOR);
  }, []);

  const handleSetText = useCallback(() => {
    dispatch(CHANGE_TEXT);
  }, []);

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
