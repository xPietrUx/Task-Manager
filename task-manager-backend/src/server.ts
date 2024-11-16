import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server works properly');
});

app.get('/tasks', (req, res) => {
  res.json({ tasks: ['Task 1', 'Task 2', 'Task 3'] });
});

app.post('/tasks', (req, res) => {
  const newTask = req.body;
  res.status(201).json({ message: 'Task created', task: newTask });
});

app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const updateTask = req.body;
  res.json({ message: `Task ${id} updated`, task: updateTask });
});

app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Task ${id} deleted` });
});

app.listen(port, () => {
  console.log(`Server runs on http://localhost:${port}`);
});
