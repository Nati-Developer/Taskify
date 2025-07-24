const express = require('express');
const auth = require('../middleware/auth');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/profile', auth, userController.getProfile);

module.exports = router;