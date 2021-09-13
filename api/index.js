const express = require('express');
const channelRoutes = require('./routes/channels');
const messageRoutes = require('./routes/messages');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');

// const app = express();

const router = express.Router();

router.use((req, res, next) => {
  console.log('api! index');
  next();
});

router.get('/', (req, res) => {
  res.send('api!');
});

//register
router.use('/register', registerRoute);

// login
router.use('/login', loginRoute);

// authentication with token
router.use((req, res, next) => {
  // TODO: check if token is valid
  console.log('auth middleware');
  next();
});

// use routes
router.use('/channels', channelRoutes);
router.use('/', messageRoutes);

module.exports = router;
