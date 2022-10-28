const express = require('express');
const router = express.Router();
const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');

router.post('/login', AuthController.login);

router.get('/users/list', UserController.listUsers);
router.post('/user/create', UserController.createUser);
router.get('/user/show/:id', UserController.showUser);
router.put('/user/update/:id', UserController.updateUser);

module.exports = router;
