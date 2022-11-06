const express = require('express');
const router = express.Router();
const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if (bearerHeader) {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];

        jwt.verify(bearerToken, 'secretkey', (err, authData) => {
            if (err) {
                res.send({ result: "no login" });
            } else {
                next();
            }
        });
    } else {
        res.send({ result: "no login" });
    }
}

router.post('/login', AuthController.login);

router.get('/users/list', verifyToken, UserController.listUsers);
router.post('/user/create', verifyToken, UserController.createUser);
router.get('/user/show/:id', verifyToken, UserController.showUser);
router.put('/user/update/:id', verifyToken, UserController.updateUser);
router.delete('/user/delete/:id', verifyToken, UserController.deleteUser);

module.exports = router;
