// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/studentController');

// Create a new student
router.post('/', StudentController.createStudent);

// Get all students
router.get('/', StudentController.getAllStudents);

// Get student by ID
router.get('/:id', StudentController.getStudentById);

// Update student by ID
router.put('/:id', StudentController.updateStudent);

// Delete student by ID
router.delete('/:id', StudentController.deleteStudent);

module.exports = router;
    