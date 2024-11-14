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

export default sequelize;
