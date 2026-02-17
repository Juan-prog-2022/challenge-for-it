import { useTasksStore } from "../store/tasks.store";
import TaskItem from "./TaskItem";

export default function TaskList() {
    const tasks = useTasksStore((state) => state.tasks);

    if (tasks.length === 0){
        return (
            <p className="text-gray-500 text-center">
                No  hay tareas aún, agrega una nueva tarea para comenzar a organizar tu día.
            </p>
        )
    }

    return (
        <ul className="space-y-2">
            {tasks.map((task) =>(
                <TaskItem key={task.id} task={task}/>
            ))}
        </ul>
    )
}