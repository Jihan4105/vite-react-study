import AddTask from '../js/AddTask.jsx';
import TaskList from '../js/TaskList.jsx';
import { TasksProvider } from '../js/TaskContext.jsx';

export default function IndexApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}