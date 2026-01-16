const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  doctorId: String,
  message: String,
  type: { type: String, enum: ['emergency', 'report', 'missed', 'new'] },
  read: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Notification', notificationSchema);
