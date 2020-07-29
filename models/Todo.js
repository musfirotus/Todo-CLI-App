const { Sequelize } = require('sequelize');
const koneksi = require('../config/db');

const Todo = koneksi.define('todo', {
    item: Sequelize.TEXT,
    status: Sequelize.STRING
  });

module.exports = Todo;