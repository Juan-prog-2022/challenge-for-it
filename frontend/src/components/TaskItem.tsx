import { type Task } from '../types/task';
import { useTasksStore } from '../store/tasks.store';

interface Props {
  task: Task;
}

export default function TaskItem({task}: Props) {
    const updatedTask = useTasksStore((state) => state.updateTask);
    const deleteTask = useTasksStore((state) => state.deleteTask);

    return (
        <li
            className="flex justify-between items-center p-4 bg-white rounded shadow">
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() =>
                        updatedTask(task.id, {completed: !task.completed})
                    }
                />
                <div>
                    <p className={`font-medium ${task.completed ? 'line-through text-gray-500' : ''}`}>{task.title}</p>
                    <p className="text-sm text-gray-600">{task.description}</p>
                </div>
            </div>
            <button
            onClick={() => deleteTask(task.id)}
            className="text-red-500 hover:text-red-700"
            >Delete</button>
        </li>
    );
}