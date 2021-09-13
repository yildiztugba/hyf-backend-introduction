const loginManager = require('../business-logic/login');

const loginController = {
  post: async (req, res) => {
    const { username: username, password } = req.body;

    console.log(req.body);

    const result = await loginManager.checkPassword(username, password);

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(401).json({
        message: 'Invalid username or password',
      });
    }
  },
};

module.exports = loginController;
