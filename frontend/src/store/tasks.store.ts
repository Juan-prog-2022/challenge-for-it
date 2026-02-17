import { create } from 'zustand';
import {type Task } from '../types/task';
import * as tasksApi from '../api/tasks.api';
import { toast } from 'react-toastify';

interface TasksState {
    tasks: Task[];
    fetchTasks: () => Promise<void>;
    addTask: (title: string, description: string) => Promise<void>;
    updateTask: (id: number, data: Partial<Pick<Task, "title" | "description" | "completed">>) => Promise<void>;
    deleteTask: (id: number) => Promise<void>;
}


export const useTasksStore = create<TasksState>((set, get) => ({
    tasks: [],
    fetchTasks: async () => {
        const tasks = await tasksApi.getTasks();
        set({ tasks });
    },
    addTask: async (title, description) => {
        const task = await tasksApi.createTask({ title, description, completed: false });
        set({ tasks: [...get().tasks, task] });
    },
    updateTask: async (id, data) => {
        const updatedTask = await tasksApi.updateTask(id, data);
        set((state) => ({
            tasks: state.tasks.map(task => task.id === id ? updatedTask : task)
        }));
    },
    deleteTask: async (id) => {
        try {
            await tasksApi.deleteTask(id);
        set((state) => ({ tasks: state.tasks.filter(task => task.id !== id) }));
        toast.success("Tarea eliminada con éxito");
        } catch (error) {
            toast.error("Error al eliminar la tarea");
        }
    }}));