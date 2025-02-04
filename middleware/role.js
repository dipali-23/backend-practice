// middleware/roleMiddleware.js
export const authorizeRole = (role) => {
    return (req, res, next) => {
      // Check if the user's role matches the required role
      if (req.user.role !== role) {
        return res.status(403).json({ message: `Access denied. ${role}s only` });
      }
      next(); // Allow access if role matches
    };
  };
  