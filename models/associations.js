import User from './user.js';
import Student from './student.js';

// Define relationships
User.hasOne(Student, { foreignKey: 'userId', onDelete: 'CASCADE' });
Student.belongsTo(User, { foreignKey: 'userId' });

export default function setupAssociations() {
  console.log('Associations have been established.');
}
