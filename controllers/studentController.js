// const StudentService = require('../services/studentService');

// class StudentController {
//   static async createStudent(req, res) {
//     try {
//       const student = await StudentService.createStudent(req.body);
//       res.status(201).json({ message: 'Student created successfully', student });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   }

//   static async getAllStudents(req, res) {
//     try {
//       const students = await StudentService.getAllStudents();
//       res.status(200).json({ students });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   }

//   static async getStudentById(req, res) {
//     try {
//       const student = await StudentService.getStudentById(req.params.id);
//       res.status(200).json({ student });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   }

//   static async updateStudent(req, res) {
//     try {
//       const student = await StudentService.updateStudent(req.params.id, req.body);
//       res.status(200).json({ message: 'Student updated successfully', student });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   }

//   static async deleteStudent(req, res) {
//     try {
//       const response = await StudentService.deleteStudent(req.params.id);
//       res.status(200).json(response);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   }
// }

// module.exports = StudentController;



const { sendResponse, sendErrorResponse } = require('../utils/response');
const StudentService = require('../services/studentService');

class StudentController {
  static async createStudent(req, res) {
    try {
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
      //  else {
      //   sendResponse(res, 404, 'Student not found');
      // }
    } catch (error) {
      sendErrorResponse(res, error);
    }
  }

  static async updateStudent(req, res) {
    try {
      const student = await StudentService.updateStudent(req.params.id, req.body);
      sendResponse(res, 200, 'Student updated successfully', student);
    } catch (error) {
      sendErrorResponse(res, error);
    }
  }

  static async deleteStudent(req, res) {
    try {
      const response = await StudentService.deleteStudent(req.params.id);
      sendResponse(res, 200, 'Student deleted successfully', response);
    } catch (error) {
      sendErrorResponse(res, error);
    }
  }
}

module.exports = StudentController;
