'use strict';
const channelRoutes = require('./channels.js');
const messageRoutes = require('./messages.js');

const express = require('express');

// require routes files

const router = express.Router();
router.use('/channels', channelRoutes);
router.use('/', messageRoutes);

// use routes with this router

// export the routes
module.exports = router;
