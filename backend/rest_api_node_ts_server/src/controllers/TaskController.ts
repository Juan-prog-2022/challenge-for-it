import type { Request, Response } from "express";
import { TaskModel } from "../models/Task";
import { Op } from "sequelize";

export class TaskController {
    static getAllTasks = async(req: Request, res: Response) => {
        try {
            const { q } = req.query;
            const where = q ? {title: {[Op.like]: `%${q}%`}} : undefined;
            const tasks = await TaskModel.findAll({ where });
            res .status(200).json(tasks);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message:'Error fetching tasks'});
        }
    }

    static getTaskById = async(req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            const task = await TaskModel.findByPk(id);
            if (!task){
                return res.status(404).json({ message: 'Task not found' });
            }
            res.status(200).json(task);
        } catch (error) {
            res.status(500).json({message: 'Error fetching task'});
        }
    }

     static createTask = async(req: Request, res: Response) => {
        try {
            const {title, description, completed} = req.body;
            if(!title || !description) {
                return res.status(400).json({ message: 'Title and description are required' });
            }
            const newTask = await TaskModel.create({ title, description, completed: completed || false });
            res.status(201).json(newTask);
        } catch (error) {
            res.status(500).json({ message: 'Error creating task' });
        }
    }

    static updateTask = async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            const task = await TaskModel.findByPk(id);
            if (!task){
                return res.status(404).json({ message: 'Task not found' });
            }
            await task.update(req.body);
            res.json(task);
        } catch (error) {
            res.status(500).json({ message: 'Error updating task' });
        }
    }

    static deleteTask = async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            const task = await TaskModel.findByPk(id);
            if (!task){
                return res.status(404).json({ message: 'Task not found' });
            }
            await task.destroy();
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting task' });
        }
    }
}