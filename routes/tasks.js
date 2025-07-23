import express from 'express';
import auth from '../middleware/auth.js';
import {
  createTask,
  getTasks,
  updateTaskStatus,
  deleteTask
} from '../controllers/taskController.js';

const router = express.Router();

router.post('/tasks', auth, createTask);
router.get('/tasks', auth, getTasks);
router.patch('/tasks/:id', auth, updateTaskStatus);
router.delete('/tasks/:id', auth, deleteTask);

export default router; 