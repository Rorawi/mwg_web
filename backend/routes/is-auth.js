const jwt = require('jsonwebtoken');

// Middleware to protect routes
function authenticateToken(req, res, next) {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.sendStatus(401); // Unauthorized
  }

  jwt.verify(token, 'secretKey', (err, user) => {
    if (err) {
      return res.sendStatus(403); // Forbidden
    }
    req.user = user;
    next();
  });
}

// Use the middleware to protect routes
app.get('/api/protected-route', authenticateToken, (req, res) => {
  // The route is protected and only accessible to authenticated users
  // req.user contains the user data from the token
});
