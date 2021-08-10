'use strict';

const objectId = require('objectid');

// mocks just for fun
const userSchema = {};
const isValid = (schema, data) => true;

const persistentDataAccess = require('../data-access/persistent');

const { create, update, remove, read, find } = persistentDataAccess('users');

const usersLogic = {
  create: async (userData) => {
    if (!isValid(userSchema, userData)) {
      return false;
    }

    const userId = objectId().toString();
    userData.id = userId;
    await create(userData);
    return true;
  },
  update: async (userData) => {
    if (!isValid(userSchema, userData)) {
      return false;
    }

    if (!(await read(userData.id))) {
      return false;
    }

    await update(userData.id, userData);
    return true;
  },
  remove: async (userData) => {
    if (!(await read(userData.id))) {
      return false;
    }

    await remove(userData.id);
    return true;
  },
  read: async (key = '', value) => {
    return await find(key, value);
  },
};

module.exports = usersLogic;
