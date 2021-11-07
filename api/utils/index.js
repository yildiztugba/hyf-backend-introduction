const express = require("express");
const channelManager = require("../business-logic/channels");
const channelRoutes = require("../routes/channels");
const messageRoutes = require("../routes/messages");
const messageManager = require("../business-logic/messages");

const router = express.Router();

// require routes files
router.use("/channels/:channelId", async (req, res, next) => {
  try {
    const channel = await channelManager.getChannel(req.params.channelId);
    req.channel = channel;
    next();
  } catch (err) {
    res.status(400).send({ message: "something wrong!" });
  }
});
router.use("/messages/:messageId", async (req, res, next) => {
  try {
    const message = await messageManager.getMessage(req.params.messageId);
    req.message = message;
    next();
  } catch (err) {
    res.status(400).send({ message: "something wrong!" });
  }
});

router.use("/channels", channelRoutes);
router.use("/", messageRoutes);

// use routes with this router

// export the routes
module.exports = router;
