import { useEffect } from "react";
import { useTasksStore } from "../store/tasks.store";
import { Link } from "react-router-dom";

export const TasksPage = () => {
  const { tasks, fetchTasks, deleteTask } = useTasksStore();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks])

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold mb-4">Tasks</h1>
        <Link
          to="/tasks/new"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create New Task
        </Link>
      </div>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="border p-3 rounded flex justify-between items-center"
          >
            {task.title}
            <span>{task.title}</span>
            <div className="space-x-2">
              <Link
                to={`/tasks/edit/${task.id}`}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete      
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
