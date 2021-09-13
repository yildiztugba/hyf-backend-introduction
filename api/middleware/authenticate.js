const isValidToken = require('../utils/validateToken');

const authenticateUser = function (req, res, next) {
  const tokenHeader = req.headers.authorization;
  const username = req.headers.username;

  if (!tokenHeader || !username) {
    return res.status(401).send({
      message: 'Unauthorized',
    });
  }

  const tokenArray = tokenHeader.split(' ');
  console.log(tokenHeader, username, tokenArray[0] === 'bearer');
  if (tokenArray[0] !== 'Bearer' || tokenArray.length !== 2) {
    return res.status(401).send({
      message: 'Unauthorized',
    });
  }

  const token = tokenArray[1];
  if (isValidToken(token, username)) {
    next();
  } else {
    return res.status(401).send({
      message: 'Unauthorized',
    });
  }
};

module.exports = authenticateUser;
