const { sendResponse, sendErrorResponse } = require('../utils/response');
const StudentService = require('../services/studentService');
const studentValidationSchema = require('../utils/studentValidation');

class StudentController {
  static async createStudent(req, res) {
    try {
      const { error } = studentValidationSchema.validate(req.body);
      if (error) {
        return sendErrorResponse(res, error, 400);
      }
      const student = await StudentService.createStudent(req.body);
      sendResponse(res, 201, 'Student created successfully', student);
    } catch (error) {
      sendErrorResponse(res, error);
    }
  }

  static async getAllStudents(req, res) {
    try {
      const students = await StudentService.getAllStudents();
      sendResponse(res, 200, 'Fetched all students successfully', students);
    } catch (error) {
      sendErrorResponse(res, error);
    }
  }

  static async getStudentById(req, res) {
    try {
      const student = await StudentService.getStudentById(req.params.id);
      if (student) {
        sendResponse(res, 200, 'Student retrieved successfully', student);
      }
      else {
        return sendErrorResponse(res, new Error('Student not found'), 404);
      }
    } catch (error) {
      sendErrorResponse(res, error);
    }
  }

  static async updateStudent(req, res) {
    try {
      const { error } = studentValidationSchema.validate(req.body);
      if (error) {
        return sendErrorResponse(res, error, 400);
      }
      const student = await StudentService.updateStudent(req.params.id, req.body);

      sendResponse(res, 200, 'Student updated successfully', student);
    } catch (error) {
      return sendErrorResponse(res, new Error('Student not found'), 404);
    }
  }

  static async deleteStudent(req, res) {
    try {
      const response = await StudentService.deleteStudent(req.params.id);
      sendResponse(res, 200, 'Student deleted successfully', response);
    } catch (error) {
      return sendErrorResponse(res, new Error('Student not found'), 404);
    }
  }
}

module.exports = StudentController;
