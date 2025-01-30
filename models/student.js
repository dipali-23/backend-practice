const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  course: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type:DataTypes.STRING,
    allowNull:false,
  },
});

module.exports = Student;
