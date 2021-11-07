const channelManager = require('../business-logic/channels');

const channelController = {
  get: async (req, res) => {
    try {
      const channels = await channelManager.getAllChannels();
      res.status(200).send(JSON.stringify(channels));
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getChannelById: async (req, res) => {
    try {
      res.status(200).send(JSON.stringify(req.channel));
    } catch (error) {
      res.status(500).send(error);
    }
  },
  put: async (req, res, next) => {
    try {
      const channelId = req.params.channelId;
      const newData = req.body;
      if (newData.id !== channelId) {
        throw Error('Cannot change channel ID after creation!');
      }
      await channelManager.updateChannel(newData);
      res.status(200).send(JSON.stringify(newData));
    } catch (error) {
      next(error);
    }
  },
  post: async (req, res) => {
    try {
      const body = req.body;
      const channel = await channelManager.createChannel(body.name);
      res.status(200).send(JSON.stringify(channel));
    } catch (error) {
      res.status(500).send(error);
    }
  },
  delete: async (req, res) => {
    try {
      const channelId = req.params.channelId;
      await channelManager.removeChannel(channelId);
      res.status(200).send(
        JSON.stringify({
          message: `Channel ${channelId} was successfully deleted!`,
        }),
      );
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = channelController;
