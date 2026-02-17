import { Sequelize }  from 'sequelize';
import colors from "colors";
import path from 'path';
import { exit } from 'process';

const dbPath = path.resolve(process.cwd(), process.env.DB_PATH || "database.sqlite");

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
  logging: false,
});

export const connectDB = async() => {
  try {
    await sequelize.authenticate();
    console.log(colors.green("Database connection established successfully."));
  } catch (error) {
    console.error(colors.bgRed("Unable to connect to the database:"), error);
    exit(1);
  }
}