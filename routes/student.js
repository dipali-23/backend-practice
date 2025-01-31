import express from 'express';
import { 
  createStudentController, 
  getAllStudentsController, 
  getStudentByIdController, 
  updateStudentController, 
  deleteStudentController
} from '../controllers/student.js';

const router = express.Router();

// Create a new student
router.post('/', createStudentController);

// Get all students
router.get('/', getAllStudentsController);

// Get student by ID
router.get('/:id', getStudentByIdController);

// Update student by ID
router.put('/:id', updateStudentController);

// Delete student by ID
router.delete('/:id', deleteStudentController);

export default router;
