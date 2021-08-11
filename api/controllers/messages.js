const messageManager = require('../business-logic/messages');

const messageController = {
  get: async (req, res) => {
    try {
      const messages = await messageManager.getAllMessages();
      res.send(JSON.stringify(messages));
    } catch (error) {
      res.status(500).send(error);
    }   
  },
  getMessagesForChannel: async (req, res) => {
    try {
      const channelId = req.params.channelId;
      const messages = await messageManager.getMessagesForChannel(channelId);
      res.send(JSON.stringify(messages));
    } catch (error) {
      res.status(500).send(error);
    }   
  },
  put: async(req, res) => {
    try {
      const messageId = req.params.messageId;
      const newData = req.body;
      if (newData.id !== messageId) {
        throw Error('Cannot change channel ID after creation!')
      }
      await messageManager.updateMessage(newData);
      res.status(200).send(JSON.stringify(newData));
    } catch (error) {
      res.status(500).send(error);
    }
  },
  post: async(req, res) => {
    try {
      const user = req.body.user;
      const content = req.body.text;
      const channelId = req.params.channelId;
      const message = await messageManager.createMessage(user, content, channelId);
      res.status(200).send(JSON.stringify(message));
    } catch (error) {
      res.status(500).send(error);
    }
  },
  delete: async(req, res) => {
    try {
      const messageId = req.params.messageId;
      await messageManager.removeMessage(messageId);
      res.status(200).send(`Message with id ${messageId} was successfully deleted!`);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

module.exports = messageController;