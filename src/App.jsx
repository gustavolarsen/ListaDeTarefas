import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { useTasks } from "./hooks/useTasks";

function App() {
  const { tasks, saveTask, deleteTask, completeTask } = useTasks();

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <TaskInput onAddTask={saveTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleTask={completeTask}
      />
    </div>
  );
}

export default App;
