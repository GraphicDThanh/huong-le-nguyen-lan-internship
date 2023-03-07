import { createContext, ReactNode, useCallback, useMemo, useReducer } from 'react';

interface ValueType {
  changeColor?: string;
}

interface ContextType extends ValueType {
  handleChangeColor?: () => void;
}

const BoxContext = createContext<ContextType>({
  changeColor: 'red',
});

const initState = {
  changeColor: 'wheat',
};

const CHANGE_COLOR = 'change-color';

const reducer = (state: ValueType, actions: string) => {
  const { changeColor } = state;

  switch (actions) {
    case CHANGE_COLOR:
      return { ...state, changeColor: changeColor === 'wheat' ? 'red' : 'wheat' };
    default:
      throw new Error('Invalid action');
  }
};

const BoxProvider2 = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { changeColor } = state;
  const handleChangeColor = useCallback(() => {
    dispatch(CHANGE_COLOR);
  }, []);

  const value = useMemo(
    () => ({
      changeColor,
      handleChangeColor,
    }),
    [handleChangeColor, changeColor],
  );

  return <BoxContext.Provider value={value}>{children}</BoxContext.Provider>;
};

export { BoxProvider2, BoxContext };
