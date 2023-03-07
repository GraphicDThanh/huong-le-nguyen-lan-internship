import { createContext, ReactNode, useCallback, useMemo, useReducer } from 'react';

interface ValueType {
  text?: string;
}

interface ContextType extends ValueType {
  handleSetText?: () => void;
}

const WrapContext = createContext<ContextType>({
  text: 'Hello World',
});

const initState = {
  text: 'Hello',
};

const CHANGE_TEXT = 'change-text';

const reducer = (state: ValueType, actions: string) => {
  const { text } = state;

  switch (actions) {
    case CHANGE_TEXT:
      return {
        ...state,
        text: text === 'Hello World' ? 'Text 1' : 'Hello World',
      };
    default:
      throw new Error('Invalid action');
  }
};

const Provider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { text } = state;

  const handleSetText = useCallback(() => {
    dispatch(CHANGE_TEXT);
  }, []);

  const value = useMemo(
    () => ({
      text,
      handleSetText,
    }),
    [text, handleSetText],
  );

  return <WrapContext.Provider value={value}>{children}</WrapContext.Provider>;
};

export { Provider, WrapContext };
