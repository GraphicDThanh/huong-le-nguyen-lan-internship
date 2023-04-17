import { useEffect, useReducer } from 'react';

export interface Users {
  first_name: string;
}

interface State {
  data?: Users[];
  isLoading?: boolean;
  errors?: string;
}

interface Action extends State {
  type: string;
}

const initState = {
  data: [],
  isLoading: false,
  errors: '',
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'fetch/request':
      return { ...state, isLoading: action.isLoading };
    case 'fetch/success':
    case 'fetch/error':
      return { ...state, isLoading: action.isLoading, errors: action.errors, data: action.data };
    default:
      return state;
  }
};

const useFetchAPI = (url: string) => {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    (async () => {
      dispatch({ type: 'fetch/request', isLoading: true });

      try {
        const response = await fetch(url);
        const { data } = await response.json();

        dispatch({ type: 'fetch/success', isLoading: false, data });
      } catch (error) {
        dispatch({ type: 'fetch/error', isLoading: false, data: [], errors: 'fail to fetch' });
      }
    })();
  }, [url]);

  return { ...state };
};

export { useFetchAPI };
