import { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react';

type TaskProps = {
  id: number;
  text: string;
  done: boolean;
};

type TaskAction =
  | { type: 'added'; id: number; text: string }
  | { type: 'changed'; task: TaskProps }
  | { type: 'deleted'; id: number };

const TasksContext = createContext<TaskProps[] | null>(null);

const TasksDispatchContext = createContext<Dispatch<TaskAction> | null>(null);

function tasksReducer(tasks: TaskProps[], action: TaskAction) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        }
        return t;
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error(`Unknown action`);
    }
  }
}

const initialTasks: TaskProps[] = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false },
];

export function TasksProvider({ children }: { children: ReactNode }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>{children}</TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const tasks = useContext(TasksContext);
  if (tasks === null) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return tasks;
}

export function useTasksDispatch() {
  const dispatch = useContext(TasksDispatchContext);
  if (dispatch === null) {
    throw new Error('useTasksDispatch must be used within a TasksProvider');
  }
  return dispatch;
}

export type { TaskProps };
