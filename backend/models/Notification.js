const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  type: String,
  title: String,
  message: String,
  isRead: { type: Boolean, default: false },
  targetRole: { type: String, enum: ['admin', 'user'] },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notification', notificationSchema);
