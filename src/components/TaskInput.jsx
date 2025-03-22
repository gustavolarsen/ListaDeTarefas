import { useState } from "react";

const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!task.trim()) {
      alert("Digite uma tarefa");
      return;
    }
    onAddTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        onChange={(event) => setTask(event.target.value)}
        value={task}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TaskInput;
