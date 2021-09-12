const registerManager = require('../business-logic/register');

const registerController = {
  post: async (req, res) => {
    try {
      const { username: username, password } = req.body;
      const result = await registerManager.register(username, password);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = registerController;
