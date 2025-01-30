// app.js
const express = require('express');
const sequelize = require('./config/sequelize');
const studentRoutes = require('./routes/studentRoutes');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json()); 

// Sync database
sequelize.sync({ alter: true }) // Compare models with the database schema and update
  .then(() => {
    console.log('Database schema updated successfully');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

app.use('/students', studentRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
