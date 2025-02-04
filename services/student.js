import Student from '../models/student.js';

export const createStudent = async (data) => {
  try {
    const student = await Student.create(data);
    return student;
  } catch (error) {
    throw new Error('An error occurred while creating student (service)' + error.message);
  }
};

export const getAllStudents = async () => {
  try {
    const students = await Student.findAll();
    return students;
  } catch (error) {
    throw new Error('An error occurred while fetching students (service) :' + error.message);
  }
};

export const getStudentById = async (id) => {
  try {
    const student = await Student.findByPk(id);
    return student;
  } catch (error) {
    throw new Error('An error occurred while fetching student (service): ' + error.message);
  }
};

export const updateStudent = async (id, data) => {
  try {
    const student = await Student.findByPk(id);
    if (!student) throw new Error('Student not found');
    await student.update(data);
    return student;
  } catch (error) {
    throw new Error('An error occurred while updating student (service): ' + error.message);
  }
};

export const deleteStudent = async (id) => {
  try {
    const student = await Student.findByPk(id);
    if (!student) throw new Error('Student not found');
    await student.destroy();
    return { message: 'Student deleted successfully' };
  } catch (error) {
    throw new Error('An error occurred while deleting student (service) : ' + error.message);
  }
};
