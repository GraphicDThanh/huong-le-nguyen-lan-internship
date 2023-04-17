import AddTask from './AddTasks';
import { TasksProvider } from './TasksContext';
import TaskList from './TasksList';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
