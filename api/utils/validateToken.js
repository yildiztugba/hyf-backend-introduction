const persistentDataAccess = require('../data-access/persistent');
const usersStore = persistentDataAccess('users');

const isValidToken = async (token, username) => {
  const registeredUsers = await usersStore.all();
  const user = usersStore.find('username', username);

  if (!user || !user.token) {
    return false;
  }

  if (!user.token[token] || user.token[token] !== token) {
    return false;
  }

  return true;
};

module.exports = isValidToken;
