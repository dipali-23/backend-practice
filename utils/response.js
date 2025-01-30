// function sendResponse(res, statusCode, message, data = null) {
//     return res.status(statusCode).json({
//       success: statusCode >= 200 && statusCode < 300,
//       message: message,
//       data: data,
//     });
//   }
  
//   function sendErrorResponse(res, error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message || "Something went wrong.",
//     });
//   }
  
//   module.exports = { sendResponse, sendErrorResponse };
  
// Success Response Helper
function sendResponse(res, statusCode, message, data = null) {
    return res.status(statusCode).json({
      success: statusCode >= 200 && statusCode < 300, // Mark success if status code is 2xx
      message: message,
      data: data,
    });
  }
  
  // Error Response Helper
  function sendErrorResponse(res, error, statusCode = 500) {
    return res.status(statusCode).json({
      success: false,
      message: error.message || "Something went wrong.",
    });
  }
  
  module.exports = { sendResponse, sendErrorResponse };
  