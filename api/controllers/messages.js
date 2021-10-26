const messageManager = require('../business-logic/messages');

const messageController = {
  get: async (req, res) => {
    // returns all messages currently in the system
    // TODO implement
    try {
      res.send(JSON.stringify(messageManager.getAllMessages()));
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getMessagesForChannel: async (req, res) => {
    // returns the messages that belong in the channel with the specified id
    // passed as /api/channels/:channelId/messages
    // TODO implement
    
    res.send(JSON.stringify([]));
  },
  put: async (req, res) => {
    // updates the messages with the specified id
    // passed as /api/messages/:messageId
    // TODO implement
    res.send('Not yet implemented');
  },
  post: async (req, res) => {
    // creates a new message based on the passed body
    // TODO implement
    try {
      const user = req.body.user;
      const content = req.body.text;
      const channelId = req.body.channelId;
      res.send(JSON.stringify(( await messageManager.createMessage(user,content,channelId))));
    } catch (error) {
      res.send('Not yet implemented');
    }
  },
  delete: async (req, res) => {
    // deleted the message with the specified id
    // passed as /api/messages/:messageId
    // TODO implement
    res.send('Not yet implemented');
  },
};

module.exports = messageController;
