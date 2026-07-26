const jwt = require("jsonwebtoken");

// 1. Protect Middleware (Verifies JWT Token)
const protect = (req, res, next) => {
  let token;

  // Check if authorization header exists and starts with "Bearer"
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header (Format: "Bearer <token>")
      token = req.headers.authorization.split(" ")[1];

      // Verify token using secret key
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "your_jwt_secret");

      // Attach decoded user info (e.g. { id, role }) to the request object
      req.user = decoded;

      next();
    } catch (error) {
      return res.status(401).json({ message: "Non autorisé, jeton invalide." });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "Non autorisé, aucun jeton fourni." });
  }
};

// 2. Authorize Middleware (Role Checking)
const authorize = (...roles) => {
  return (req, res, next) => {
    // Check if user object exists and role is allowed
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        message: `Accès interdit : le rôle [${req.user?.role}] n'a pas les autorisations requises.`
      });
    }
    next();
  };
};

// 3. Export functions using module.exports
module.exports = {
  protect,
  authorize
};