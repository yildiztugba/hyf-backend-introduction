const messageManager = require('../business-logic/messages');

const messageController = {
  get: async (req, res) => {
    // returns all messages currently in the system
    // TODO implement
    try {
      const messages = await messageManager.getAllMessages();
      res.status(200).send(JSON.stringify(messages));
    } catch (error) {
      res.status(500).send(error);
      console.log("hyey");
    }
  },
  getMessagesForChannel: async (req, res) => {
    // returns the messages that belong in the channel with the specified id
    // passed as /api/channels/:channelId/messages
    // TODO implement
    try {
      res.status(200).send(JSON.stringify([messageManager.getMessagesForChannel()]));
    } catch (error) {
      res.status(500).send(error);
    }
  },
  put: async (req, res, next) => {
    // updates the messages with the specified id
    // passed as /api/messages/:messageId
    // TODO implement
    try {
      const messageId = req.params.messageId;
      const newData = req.body;
      if (newData.messageId !== messageId) {
        throw Error("Cannot change channel ID after creation!");
      }
      await messageManager.updateMessage(newData);
      res.status(200).send(JSON.stringify(newData));
    } catch (error) {
      next(error);
    }
  },
  post: async (req, res) => {
    // creates a new message based on the passed body
    // TODO implement
    try {
      const user = req.body.user;
      const content = req.body.text;
      const channelId = req.params.channelId;
      const postmessage = await messageManager.createMessage(
        user,
        content,
        channelId
      );
      res.status(200).send(JSON.stringify((postmessage)));
    } catch (error) {
      res.status(500).send(error);
    }
  },
  delete: async (req, res) => {
    // deleted the message with the specified id
    // passed as /api/messages/:messageId
    // TODO implement

    try {
      const messageId = req.params.messageId;
      await messageManager.removeMessage(messageId);
      res.status(200).send(
        JSON.stringify({
          message: `Message ${messageId} was successfully deleted!`,
        }),
      );
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = messageController;
