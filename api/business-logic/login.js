const persistentDataAccess = require('../data-access/persistent');
const createToken = require('../utils/createToken');

const usersStore = persistentDataAccess('users');

const hashPassword = require('../utils/hashPassword');

const loginManager = {
  checkPassword: async function (username, password) {
    if (!username || !password) {
      res.status(400).send('Missing username or password');
      return;
    }
    const hashedPassword = hashPassword(password);
    const user = { username: username, password: hashedPassword };

    console.log(user);

    const registeredUsers = await usersStore.all();

    console.log('existing users:', registeredUsers);

    const existingUser = registeredUsers.find(
      (user) => user.username === username && user.password === hashedPassword
    );

    if (!existingUser) {
      throw new Error('Invalid username or password !');
    }

    const token = createToken();
    existingUser.token = token;

    const update = await usersStore.update(existingUser.id, existingUser);

    console.log(update, token);
    return {
      token: token,
      username,
      message: `Session created for user ${username}`,
    };
  },
};

module.exports = loginManager;
