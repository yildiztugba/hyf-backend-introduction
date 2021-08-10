const fs = require('fs');
const path = require('path');
const util = require('util');
const config = require('../../config');

const readAsync = util.promisify(fs.readFile);

/**
 * Generates an absolute path for a specific file in the app's data.
 *
 * @param {string} fileName - The file to read.
 * @returns {string} An absolute path to that file.
 */
const constructFilePath = (fileName) => path.join(config.DATA_PATH, fileName);

/**
 * Reads the contents of "hello.txt".
 *
 * @async
 * @returns {Promise<string>} Text content from the "hello.txt" file.
 */
const readHello = async () => {
  const helloPath = constructFilePath('hello.txt');
  // errors will be handled by controllers or express middleware
  const hello = await readAsync(helloPath, 'utf-8');
  return hello;
};

module.exports = {
  readHello,
};
