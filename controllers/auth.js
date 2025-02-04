import { registerUser, loginUser, refreshAccessToken } from '../services/auth.js';
import { sendResponse, sendErrorResponse } from '../utils/response.js';

// Register a user
export const signup = async (req, res) => {
  try {
    const user = await registerUser(req.body);
    sendResponse(res, 201, 'User created successfully', user);
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};

// Login a user and return both access and refresh tokens
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { accessToken, refreshToken } = await loginUser(email, password);
    sendResponse(res, 200, 'Login successful', { accessToken, refreshToken });
  } catch (error) {
    sendErrorResponse(res, error.message, 401);
  }
};

// Refresh the access token using a valid refresh token
export const refresh = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    const { accessToken } = await refreshAccessToken(refreshToken);
    sendResponse(res, 200, 'Access token refreshed', { accessToken });
  } catch (error) {
    sendErrorResponse(res, error.message, 401);
  }
};
