'use strict';

const express = require('express');
const userControllers = require('../controllers/users');

const userRoutes = express.Router();

userRoutes.use((req, res, next) => {
  console.log('users!');
  next();
});

userRoutes.get('/', userControllers.get);
userRoutes.post('/', userControllers.post);
userRoutes.put('/', userControllers.put);
userRoutes.delete('/', userControllers.delete);

module.exports = userRoutes;
