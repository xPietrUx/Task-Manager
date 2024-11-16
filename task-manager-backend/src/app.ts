import express, { Request, Response } from 'express';
import { initializeDatabase } from './config/database';
import Task from './models/Task';

const app = express();
const router = express.Router();
const port = 3000;

app.use(express.json());

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json({ tasks });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

app.post('/tasks', async (req, res) => {
  const { title, description, completed } = req.body;

  try {
    const newTask = await Task.create({ title, description, completed });
    res.status(201).json({ message: 'Task created', task: newTask });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
});

app.put('/tasks/:id', async (req: any, res: any) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  try {
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    await task.update({ title, completed });
    res.json({ message: 'Task updated', task });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

app.delete('/tasks/:id', async (req: any, res: any) => {
  const { id } = req.params;

  try {
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    await task.destroy();
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

const startServer = async () => {
  try {
    await initializeDatabase();
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
