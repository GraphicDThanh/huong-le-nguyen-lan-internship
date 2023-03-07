import { ChangeEvent, createContext, ReactNode, useCallback, useMemo, useReducer } from 'react';

interface ValueType {
  count: number;
  value?: string;
}

interface ValueContext extends ValueType {
  handleUp?: () => void;
  handleDown?: () => void;
  handleSetData?: (e: ChangeEvent) => void;
}

const initState = {
  count: 0,
  value: '',
};

const Provider2Context = createContext<ValueContext>({
  count: 0,
  value: '',
});

const UP = 'up';
const DOWN = 'down';
const SET_DATA = 'set-data';

const setDate = (payload: string) => ({
  act: SET_DATA,
  data: payload,
});

const reducer = (state: ValueType, actions: { act: string; data?: string }) => {
  switch (actions.act) {
    case UP:
      return { ...state, count: Number(state.count) + 1 };
    case DOWN:
      return { ...state, count: Number(state.count) - 1 };
    case SET_DATA:
      return { ...state, value: actions.data };
    default:
      throw new Error('Invalid action');
  }
};

const Provider2 = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { count, value } = state;
  const handleUp = useCallback(() => {
    dispatch({ act: UP });
  }, []);

  const handleDown = useCallback(() => {
    dispatch({ act: DOWN });
  }, []);

  const handleSetData = useCallback((e: ChangeEvent) => {
    dispatch(setDate((e.target as HTMLInputElement).value));
  }, []);

  const data = useMemo(
    () => ({
      count,
      value,
      handleUp,
      handleDown,
      handleSetData,
    }),
    [count, value, handleDown, handleUp, handleSetData],
  );

  return <Provider2Context.Provider value={data}>{children}</Provider2Context.Provider>;
};

export { Provider2, Provider2Context };
