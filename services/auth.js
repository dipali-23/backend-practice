import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import { v4 as uuidv4 } from 'uuid'; // For generating a unique refresh token

// Register a user
export const registerUser = async ({ name, email, password, role = 'student' }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword, role });
  return user;
};

// Generate access and refresh tokens
export const generateTokens = (user) => {
  const accessToken = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

  const refreshToken = jwt.sign({ id: user.id, role: user.role, refreshKey: uuidv4() }, process.env.JWT_SECRET, { expiresIn: '7d' });
  
  // Store the refresh token in your DB for future validation
  user.refreshToken = refreshToken;
  user.save(); // Update user with refresh token

  return { accessToken, refreshToken };
};

// Login a user and return access and refresh tokens
export const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const { accessToken, refreshToken } = generateTokens(user);

  return { accessToken, refreshToken };
};

// Handle refresh token logic
export const refreshAccessToken = async (refreshToken) => {
  try {
    // Validate refresh token
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);

    // Find the user with the refresh token stored
    const user = await User.findOne({ where: { id: decoded.id, refreshToken } });
    if (!user) throw new Error('Invalid refresh token');

    // Generate a new access token
    const accessToken = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return { accessToken };
  } catch (error) {
    throw new Error('Invalid refresh token');
  }
};
