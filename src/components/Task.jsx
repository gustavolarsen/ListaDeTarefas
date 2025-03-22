const Task = ({ task, onDelete, onToggle }) => {
  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={onToggle}
      >
        {task.text}
      </span>
      <button onClick={onDelete}>Remover</button>
    </li>
  );
};

export default Task;
