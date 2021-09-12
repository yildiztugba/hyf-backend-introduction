const persistentDataAccess = require('../data-access/persistent');

const usersStore = persistentDataAccess('users');

const hashPassword = require('../utils/hashPassword');

const registerManager = {
  register: async function (username, password) {
    const hashedPassword = hashPassword(password);
    const user = { username: username, password: hashedPassword };

    console.log(user);

    // check if user already exists
    const registeredUsers = await usersStore.all();

    console.log('existing user:', registeredUsers);

    const existingUser = registeredUsers.find(
      (user) => user.username === username
    );

    if (existingUser) {
      throw new Error('User already exists');
    }

    await usersStore.create(user);

    return { username };
  },
};

module.exports = registerManager;
