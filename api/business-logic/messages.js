const objectId = require('objectid');

const persistentDataAccess = require('../data-access/persistent');

const messageStore = persistentDataAccess('messages');

const messageManager = {
  createMessage: async (user, messageContent, channelId) => {
    const message = {
      text: messageContent,
      id: objectId().toString(),
      user: user,
      channelId: channelId,
      date: new Date()
    }
    await messageStore.create(message);
    return message;
  },
  updateMessage: async (message) => {
    await messageStore.update(message.id, message);
    return message;
  },
  removeMessage: async (messageId) => {
    return messageStore.remove(messageId);
  },
  getMessage: async (messageId) => {
    return messageStore.read(messageId);
  },
  getAllMessages: async () => {
    return messageStore.all();
  },
  getMessagesForChannel: async (channelId) => {
    const result = [];
    const allMessages = await messageStore.all();
    allMessages.array.forEach((element) => {
      if (element.channelId === channelId) {
        result.push(element);
      }
    });
    return result;
  },
};

module.exports = messageManager;
