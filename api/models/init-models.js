const { Sequelize, DataTypes } = require('sequelize');
const _messages = require("./messages");
const _users = require("./users");
const config = require('./../bin/config');

function initModels() {
  const sequelize = new Sequelize(config.dbname, config.dbusername, config.dbpassword, {dialect: 'mysql'});
  const messages = _messages(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);


  return {
    messages,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
