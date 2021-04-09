'use strict';
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const { body } = require('express-validator');

router.post('/login', authController.login);

router.post('/register',
    [
      body('name').isLength({min: 3}).escape().blacklist(';'),
      body('username').isEmail(),
      body('passwd').isLength({min: 8}).matches('(?=.*[A-Z]).{8,}'),
      //could also use isStrongPassword()
    ],
    userController.user_create,
    authController.login,);

router.get('/logout', authController.logout);


module.exports = router;