import { sendResponse, sendErrorResponse } from '../utils/response.js';
import { createStudent, getAllStudents, getStudentById, updateStudent, deleteStudent } from '../services/student.js';
import studentValidationSchema from '../utils/validators/student.js';
import { HTTP_STATUS_CODES } from '../utils/constants/status-code.js';  // Import status codes

export const createStudentController = async (req, res) => {
  try {
    const { error } = studentValidationSchema.validate(req.body);
    if (error) {
      return sendErrorResponse(res, error.details[0].message, HTTP_STATUS_CODES.BAD_REQUEST);
    }
    const student = await createStudent(req.body);
    sendResponse(res, HTTP_STATUS_CODES.CREATED, 'Student created successfully', student);
  } catch (error) {
    sendErrorResponse(res, error.message || 'An error occurred while creating student', HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR);
  }
};

export const getAllStudentsController = async (req, res) => {
  try {
    const students = await getAllStudents();
    sendResponse(res, HTTP_STATUS_CODES.OK, 'Students fetched successfully', students);
  } catch (error) {
    sendErrorResponse(res, error.message || 'An error occurred while fetching students', HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR);
  }
};

export const getStudentByIdController = async (req, res) => {
  try {
    const student = await getStudentById(req.params.id);
    if (!student) {
      return sendErrorResponse(res, 'Student not found', HTTP_STATUS_CODES.NOT_FOUND);
    }
    sendResponse(res, HTTP_STATUS_CODES.OK, 'Student retrieved successfully', student);
  } catch (error) {
    sendErrorResponse(res, error.message || 'An error occurred while retrieving student', HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR);
  }
};

export const updateStudentController = async (req, res) => {
  try {
    const { error } = studentValidationSchema.validate(req.body);
    if (error) {
      return sendErrorResponse(res, error.details[0].message, HTTP_STATUS_CODES.BAD_REQUEST);
    }

    const student = await updateStudent(req.params.id, req.body);
    if (!student) {
      return sendErrorResponse(res, 'Student not found', HTTP_STATUS_CODES.NOT_FOUND);
    }
    sendResponse(res, HTTP_STATUS_CODES.OK, 'Student updated successfully', student);
  } catch (error) {
    sendErrorResponse(res, error.message || 'An error occurred while updating student', HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR);
  }
};

export const deleteStudentController = async (req, res) => {
  try {
    const response = await deleteStudent(req.params.id);
    if (!response) {
      return sendErrorResponse(res, 'Student not found', HTTP_STATUS_CODES.NOT_FOUND);
    }
    sendResponse(res, HTTP_STATUS_CODES.OK, 'Student deleted successfully', response);
  } catch (error) {
    sendErrorResponse(res, error.message || 'An error occurred while deleting student', HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR);
  }
};
