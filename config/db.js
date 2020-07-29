const { Sequelize } = require('sequelize');
module.exports = new Sequelize({
    host: '127.0.0.1',
    dialect: 'mysql',
    username: 'root',
    password: '200801',
    database: 'todo'
});
(async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})();