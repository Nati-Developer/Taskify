import express from 'express';
import auth from '../middleware/auth.js';
import { getProfile } from '../controllers/userController.js';
const router = express.Router();

router.get('/profile', auth, getProfile);

export default router;