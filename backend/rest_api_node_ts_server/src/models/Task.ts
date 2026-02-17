import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db";

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface TaskCreationAttributes extends Optional<Task, "id" | "createdAt" | "updatedAt"> { }

export class TaskModel extends Model<Task, TaskCreationAttributes> {}

TaskModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(500),
    allowNull: false
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  sequelize,
  tableName: "tasks",
  timestamps: true
})