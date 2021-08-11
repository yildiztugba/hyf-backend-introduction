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
    return await messageStore.update(message.id, message);
  },
  removeMessage: async (messageId) => {
   return await messageStore.remove(messageId);
  },
  getMessage: async (messageId) => {
    return await messageStore.read(messageId);
  },
  getAllMessages: async () => {
    return await messageStore.all();
  },
  getMessagesForChannel: async (channelId) => {
    const result = [];
    const allMessages = await messageStore.all();
    for (let i = 0; i < allMessages.length; i++) {
      const theMessage = allMessages[i];
      if (theMessage.channelId === channelId) {
        result.push(theMessage);
      }
    }
    return result;
  }
};

module.exports = messageManager;