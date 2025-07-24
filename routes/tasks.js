const express = require('express');
const auth = require('../middleware/auth');
const taskController = require('../controllers/taskController');

const router = express.Router();

router.post('/tasks', auth, taskController.createTask);
router.get('/tasks', auth, taskController.getTasks);
router.patch('/tasks/:id', auth, taskController.updateTaskStatus);
router.delete('/tasks/:id', auth, taskController.deleteTask);

module.exports = router;