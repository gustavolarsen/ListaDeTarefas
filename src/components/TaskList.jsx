import Task from "./Task";

const TaskList = ({ tasks, onDeleteTask, onToggleTask }) => {
  if (tasks.length === 0) {
    return <p>Nenhuma tarefa cadastrada</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={() => onDeleteTask(task.id)}
          onToggle={() => onToggleTask(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
