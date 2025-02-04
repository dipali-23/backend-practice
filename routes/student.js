import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import {authorizeRole} from '../middleware/role.js';

import { 
  createStudentController, 
  getAllStudentsController, 
  getStudentByIdController, 
  updateStudentController, 
  deleteStudentController
} from '../controllers/student.js';

const router = express.Router();

router.post('/',verifyToken, authorizeRole('admin'),createStudentController);// Create a new student

router.get('/',verifyToken, getAllStudentsController);// Get all students

router.get('/:id',verifyToken, getStudentByIdController);// Get all students

router.put('/:id', verifyToken,authorizeRole('admin'),updateStudentController);// Update student by ID

router.delete('/:id',authorizeRole('admin'), deleteStudentController);// Delete student by ID


export default router;
