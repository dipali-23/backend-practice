const Student = require('../models/student');

class StudentService {
  static async createStudent(data) {
    try {
      const student = await Student.create(data);
      return student;
    } catch (error) {
      throw new Error('Error creating student: ' + error.message);
    }
  }

  static async getAllStudents() {
    try {
      const students = await Student.findAll();
      return students;
    } catch (error) {
      throw new Error('Error fetching students: ' + error.message);
    }
  }

  static async getStudentById(id) {
    try {
      const student = await Student.findByPk(id);
      return student;
    } catch (error) {
      throw new Error('Error fetching student: ' + error.message);
    }
  }

  static async updateStudent(id, data) {
    try {
      const student = await Student.findByPk(id);
      if (!student) throw new Error('Student not found');
      await student.update(data);
      return student;
    } catch (error) {
      throw new Error('Error updating student: ' + error.message);
    }
  }

  static async deleteStudent(id) {
    try {
      const student = await Student.findByPk(id);
      if (!student) throw new Error('Student not found');
      await student.destroy();
      return { message: 'Student deleted successfully' };
    } catch (error) {
      throw new Error('Error deleting student: ' + error.message);
    }
  }
}

module.exports = StudentService;
