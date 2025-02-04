import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';
import User from './user.js';  // Import User model for association

const Student = sequelize.define('Student', {
  student_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  course: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', // Referring to the Users table
      key: 'id',
    },
    onDelete: 'CASCADE', // Automatically delete student record when the corresponding user is deleted
  }
});

Student.associate = (models) => {
  Student.belongsTo(models.User, { foreignKey: 'user_id' });
};
export default Student;
