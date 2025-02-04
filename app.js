import express from 'express';
import studentRoutes from './routes/student.js';  
import authRoutes from './routes/auth.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json()); 



app.use('/students', studentRoutes);
app.use('/api/auth', authRoutes);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
