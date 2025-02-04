import { Sequelize } from 'sequelize';
import config from '../config/config.js';
import pino from 'pino';  // Import pino

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

// Create a pino logger instance with prettyPrint using pino-pretty
const logger = pino({
  level: 'info',
  transport: {
    target: 'pino-pretty',  // Use pino-pretty for pretty printing
    options: {
      colorize: true,         // Adds colors to the output
      translateTime: 'SYS:standard', // Formats timestamp in a human-readable way
    },
  },
});

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
});

// Test the database connection
sequelize.authenticate()
  .then(() => logger.info('Database connected successfully'))
  .catch(error => logger.error('Unable to connect to the database:', error));

export default sequelize;
