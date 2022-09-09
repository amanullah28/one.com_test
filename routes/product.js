const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const permissionMiddleware = require('../middleware/permission');
router.post('/api/product', authMiddleware, permissionMiddleware, async (req, res, next) => {
  try {
    res.status(200).json({
      message: 'Products added successfully',
    });
  } catch (err) {
    next(err);
  }
});
router.put('/api/product/:id', authMiddleware, permissionMiddleware, async (req, res, next) => {
  try {
    res.status(200).json({
      message: 'Products updated successfully',
    });
  } catch (err) {
    next(err);
  }
});
router.patch('/api/product/:id', authMiddleware, permissionMiddleware, async (req, res, next) => {
  try {
    res.status(200).json({
      message: 'Products updated successfully',
    });
  } catch (err) {
    next(err);
  }
});
router.delete('/api/product/:id', authMiddleware, permissionMiddleware, async (req, res, next) => {
  try {
    res.status(200).json({
      message: 'Products deleted successfully',
    });
  } catch (err) {
    next(err);
  }
});
router.get('/api/product/:id', authMiddleware, permissionMiddleware, async (req, res, next) => {
  try {
    res.status(200).json({
      message: 'Products sent successfully',
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
