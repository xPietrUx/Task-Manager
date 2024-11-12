import express, { Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

// Middleware JSON parser
app.use(express.json());

// Endpoint test
app.get('/', (req, res) => {
  res.send('API is running');
});

export default app;
