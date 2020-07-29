const { Sequelize } = require('sequelize');
const { program } = require("@caporal/core");

const sequelize = new Sequelize({
    host: '127.0.0.1',
    dialect: 'mysql',
    username: 'root',
    password: '200801',
    database: 'todo'
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})();