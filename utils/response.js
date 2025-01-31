// Success Response Helper
export const sendResponse = (res, statusCode, message, data = null) => {
  return res.status(statusCode).json({
    success: statusCode >= 200 && statusCode < 300, 
    message: message,
    data: data,
  });
};

// Error Response Helper
export const sendErrorResponse = (res, error, statusCode = 500) => {
  return res.status(statusCode).json({
    success: false,
    message: error || "something went wrong",
  });
};
