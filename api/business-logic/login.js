const persistentDataAccess = require('../data-access/persistent');

const usersStore = persistentDataAccess('users');

const hashPassword = require('../utils/hashPassword');

const loginManager = {
  checkPassword: async function (username, password) {
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

    return { username };
  },
};

module.exports = loginManager;
