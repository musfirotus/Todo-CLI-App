const { Sequelize } = require('sequelize');
module.exports = new Sequelize({
    host: '127.0.0.1',
    dialect: 'mysql',
    username: 'root',
    password: '200801',
    database: 'todo'
});