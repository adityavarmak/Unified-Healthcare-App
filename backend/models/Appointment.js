const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  date: String,
  time: String,
  status: {
    type: String,
    default: 'Pending',
  },
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
