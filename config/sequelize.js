import { Sequelize } from 'sequelize';
import config from './db.js'; 

const sequelize = new Sequelize(config.development);

sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

export default sequelize;
