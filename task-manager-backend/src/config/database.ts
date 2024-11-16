import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import Task from '../models/Task';

dotenv.config();

const sequelize = new Sequelize({
  database: process.env.DB_NAME as string,
  username: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: 'postgres',
  logging: false,
  models: [Task],
});

export const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connecting to a related database');

    await sequelize.sync({ force: true });
    console.log('Model synchronized with the database.');

    return sequelize;
  } catch (error) {
    console.error('Error initializing database: ', error);
  }
};

export default sequelize;
