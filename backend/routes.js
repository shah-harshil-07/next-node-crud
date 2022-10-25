const express = require('express');
const router = express.Router();
const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');

router.post('/login', AuthController.login);
router.get('/users/list', UserController.listUsers);

module.exports = router;
