const express = require('express');
const registerController = require('../controllers/register');

const registerRouter = express.Router();

registerRouter.use((req, res, next) => {
  console.log('api! Register route');

  next();
});

registerRouter.post('/', registerController);
