const express = require('express');
const messageController = require('../controllers/messages');

const messageRoutes = express.Router();

messageRoutes.use((req, res, next) => {
  console.log('api!');
  next();
}); 

messageRoutes.get('/messages', messageController.get);
messageRoutes.get('/channels/:channelId/messages', messageController.getMessagesForChannel);
messageRoutes.delete('/:messageId', messageController.delete);
messageRoutes.put('/:messageId', messageController.put);
messageRoutes.post('/', messageController.post);

module.exports = messageRoutes;