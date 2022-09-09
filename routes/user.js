const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/user');
router.post('/api/signup', async (req, res, next) => {
  try {
    const { username, password, role, permission } = req.body;
    console.log(username, password);
    let user = await User.findOne({ where: { username: username } });
    if (user) {
      let error = new Error('User already Exist with that username');
      error.statusCode = 401;
      throw error;
    }
    let savedUser = await User.create({
      username: username,
      password: await bcrypt.hash(password, 12),
      role: role,
      permission: permission.join(),
    });
    res.status(200).json({
      message: 'User created succesfully!!',
      data: {
        id: savedUser.id,
        username: username,
      },
    });
  } catch (err) {
    next(err);
  }
});

router.post('/api/signin', async (req, res, next) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;
    let user = await User.findOne({ where: { username: username } });
    if (!user) {
      let error = new Error('User not found');
      error.statusCode = 401;
      throw error;
    }
    const correctPassword = bcrypt.compare(password, user.password);
    if (!correctPassword) {
      let error = new Error('Wrong password');
      error.statusCode = 401;
      throw error;
    }
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        role: user.role,
        permission: user.permission,
      },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );
    res.status(200).json({
      message: 'Success login',
      data: {
        token,
      },
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
