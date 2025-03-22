import { useEffect, useState } from "react";

const TASKS_STORAGE_KEY = "tasks";

export const useTasks = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY)) || []
  );

  useEffect(() => {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const saveTask = (taskText) => {
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const completeTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return { tasks, saveTask, deleteTask, completeTask };
};
