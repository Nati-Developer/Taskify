import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import taskRoutes from './routes/tasks.js';

dotenv.config();

const app = express();


app.use(cors()); 
app.use(express.json()); 

app.use(authRoutes);
app.use(userRoutes);
app.use(taskRoutes);


app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});


app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 