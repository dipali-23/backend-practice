import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';
import Student from './student.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('admin', 'student'),
    defaultValue: 'student',
  },
  refreshToken: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  // Hooks should be placed inside the model options object
  hooks: {
    afterCreate: async (user, options) => {
      if (user.role === 'student') {
        // Automatically create a Student entry when the User is created with role 'student'
        try {
          await Student.create({
            user_id: user.id, // Assuming you have a user_id foreign key in the Student model
            course: 'Default Course', // Default course or any other field in your Student model
          });
        } catch (error) {
          console.error('Error creating student:', error.message);
        }
      }
    },
  }
});

User.associate = (models) => {
  User.hasOne(models.Student, { foreignKey: 'user_id', onDelete: 'CASCADE' });
};

export default User;
