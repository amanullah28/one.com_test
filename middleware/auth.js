const jwt = require('jsonwebtoken');
module.exports = async (req, res, next) => {
  try {
    let authHeader = req.get('Authorization');
    if (!authHeader) {
      let error = new Error('Invalid Token');
      error.statusCode = 401;
      throw error;
    }
    const token = authHeader.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken;
    console.log(req.user);
    next();
  } catch (err) {
    next(err);
  }
};
