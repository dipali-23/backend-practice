import express from 'express';
import sequelize from './config/sequelize.js';  
import studentRoutes from './routes/student.js';  
import dotenv from 'dotenv';

dotenv.config();

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
