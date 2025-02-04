import Joi from 'joi';

const studentValidationSchema = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    'string.base': 'Name should be a string',
    'string.empty': 'Name cannot be empty',
    'string.min': 'Name should be at least 2 characters long',
    'string.max': 'Name should be at most 50 characters long',
    'any.required': 'Name is required',
  }),
  age: Joi.number().min(18).max(100).required().messages({
    'number.base': 'Age should be a number',
    'number.min': 'Age should be at least 18',
    'number.max': 'Age should be at most 100',
    'any.required': 'Age is required',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Email should be a valid email address',
    'string.empty': 'Email cannot be empty',
    'any.required': 'Email is required',
  }),
  course: Joi.string().min(3).max(50).required().messages({
    'string.base': 'Course should be a string',
    'any.required': 'Course is required',
  }),
  password: Joi.string().min(6).required().messages({
    'string.base': 'Password should be a string',
    'string.min': 'Password should be at least 6 characters long',
    'any.required': 'Password is required',
  }),
});

export default studentValidationSchema;
