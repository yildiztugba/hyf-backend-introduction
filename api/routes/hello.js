const express = require('express');
const hello = require('../controllers/hello');

const router = express.Router();

router.use((req, res, next) => {
  console.log('hello!');
  next();
});

router.get('/', hello.root);

module.exports = router;
