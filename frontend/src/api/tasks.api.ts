import api from "./api";
import { type Task } from "../types/task";

export const getTasks = async (): Promise<Task[]> => {
    const response = await api.get("/tasks");
    return response.data;
}

export const createTask = async (data: Pick<Task, "title" | "description" | "completed">): Promise<Task> => {
    const response = await api.post("/tasks", data);
    return response.data;
}

export const updateTask = async (id: number, data: Pick<Task, "title" | "description" | "completed">): Promise<Task> => {
    const response = await api.put(`/tasks/${id}`, data);
    return response.data;
}

export const deleteTask = async (id: number): Promise<void> => {
    await api.delete(`/tasks/${id}`);
}