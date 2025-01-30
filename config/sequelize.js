const { Sequelize } = require('sequelize');
const config = require('./config'); 

const sequelize = new Sequelize(config.development); 

sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;
