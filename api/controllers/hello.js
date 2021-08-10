const { readHello } = require('../data-access/hello');

const hello = {
  root: async (req, res) => {
    const helloText = await readHello();
    res.send(helloText);
  },
};

module.exports = hello;
